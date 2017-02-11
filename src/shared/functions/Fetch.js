import 'whatwg-fetch'

export default function performFetch(route, func, body) {

    body = body || {};

    fetch(
        route, {
            method: 'POST',
            body: JSON.stringify(body)
        }
    ).then(
        (response) => {
            return func(response);
        }
    )
};