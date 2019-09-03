import React, { Component } from 'react'
import './Favorites.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import CopyButton from '../../components/Copy'

export default class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount = () => {
        if (localStorage.length > 0) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            if (Object.keys(favoritos).length === 0 && favoritos.constructor === Object) {
                return
            }
            this.setState({ favoritos: favoritos })
        }
    }

    render() {
        const favoritos = this.state

        return (
            <div>
                <Header />
                <div className='container mt-5'>
                    {favoritos.favoritos.map((dado, index) => (

                        <div key={index} className='row'>
                            <h5 className='title'>{dado.title}</h5>
                            <img className='imagem-gif-favorites' src={dado.url} alt={dado.title} />
                            <CopyButton embed_url={dado.url} />
                            <textarea defaultValue={dado.embed_url} />
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }

}