const { url } = require("inspector");

let token = localStorage.getItem('token');
let headers = {};
if (token){
    headers['Authorization'] = 'Bearer' + token;
}
fetch(url, {headers});