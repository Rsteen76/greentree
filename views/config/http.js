import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.BASEURL, //base URL goes here
})