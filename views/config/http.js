import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://dry-earth-62210.herokuapp.com/api', //base URL goes here
})