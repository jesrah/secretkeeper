import 'whatwg-fetch';

export default function post(url = ``, secret) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ secret }),
  })
    .then(response => response) 
    .catch(error => console.error(`Error occured:`, error));
}