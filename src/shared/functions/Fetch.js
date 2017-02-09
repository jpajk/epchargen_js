import 'whatwg-fetch'

export default function performFetch(route, func) {
    fetch(route, {method: 'POST'})
        .then(function(response) {
            return func(response);
        })
}