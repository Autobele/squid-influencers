import axios from 'axios'

export const apiPostIntance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
})
