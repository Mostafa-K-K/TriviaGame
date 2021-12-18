// let HOST_URL = process.env.REACT_APP_LOCAL_URL; 
let HOST_URL = 'https://opentdb.com/api.php';

/**
 * Used to make it easy to fetch from backend
 * @param {string}
 * @returns 
 */
export async function fetchUrl({ method = 'GET', apiName }) {
    let data = {};
    let url = HOST_URL + apiName;

    let response = await fetch(url, { method });
    data = await response.json();

    return data;
}
