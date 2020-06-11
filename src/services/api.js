import axios from 'axios';
export async function processRequest(url = '', method = 'GET', data = null) {
    let headers = { 'Content-Type': 'application/json' };
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    return axios({
        method,
        data: (data && JSON.stringify(data)) || null,
        headers,
        crossDomain: true,
        url: baseUrl + url,
    })
    .then(res => res )
    .catch(err => { throw err.response; });
}