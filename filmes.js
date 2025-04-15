"use strict"

async function getFilmes() {
    const url = "http://localhost:5050/v1/controle-filmes/filme"
    const response = await fetch(url)
    const data = await response.json()

    return data
}


async function postFilmes(filmes) {
    const url = "http://localhost:5050/v1/controle-filmes/filme"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmes)
    }


    const response = await fetch(url, options)
    return response.ok

}


async function putFilmes(filmes, id) {
    const url = `http://localhost:5050/v1/controle-filmes/filme/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmes)

    }

    const response = await fetch(url, options)
    return response.ok
}

async function deleteFilmes(id) {
    const url = `http://localhost:5050/v1/controle-filmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = fetch(url, options)
    return (await response).ok
}