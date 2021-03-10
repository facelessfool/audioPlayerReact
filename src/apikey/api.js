import axios from 'axios';

const KEY="";


export default axios.create({
    baseURL: "https://randomuser.me/api/",
  responseType: "json"
});