import axios from "axios";

const API_Ordena_list = axios.create({
    baseURL: "http://localhost:8080/ordernaLista"
})

const API_Interlace = axios.create({
    baseURL: "http://localhost:8080/interlace"
})


export {
    API_Ordena_list,
    API_Interlace
}