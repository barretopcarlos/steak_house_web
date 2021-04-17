import axios from 'axios';

//função para retornar a URL da API
export const getApiUrl = () => {
    return "http://apirestaurante-001-site1.itempurl.com";
}

//função para retornar os dados do restaurante
export const getDadosRestaurante = () => {
    return axios.get(getApiUrl() + "/api/restaurante")
        .then( //retornando o PROMISSE da chamada HTTP
            response => { return response.data; }
        )
}

//função para retornar os produtos do restaurante
export const getDadosCardapio = () => {
    return axios.get(getApiUrl() + "/api/cardapio")
        .then( //retornando o PROMISSE da chamada HTTP
            response => { return response.data; }
        )
}

//função para enviar uma requisição POST para cadastro de cliente
export const postCliente = (cliente) => {
    return axios.post(getApiUrl() + "/api/cliente", cliente)
        .then(
            response => { return response.data; }
        )
}


