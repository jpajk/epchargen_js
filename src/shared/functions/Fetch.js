import 'whatwg-fetch'

export default function performFetch(route, func, body) {

    body = body || {};
    let res;

    fetch(
        route, {
            method: 'POST',
            body: JSON.stringify(body)
        }
    )
        .then((resp) => resp.json())
        .then(
            (response) => {
                func(response);
            })
        .catch(function(error) {
            console.log('Error: ', error);
        });
};