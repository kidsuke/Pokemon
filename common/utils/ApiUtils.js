export const getJson = (url, headers) => (
    // Fetch always returns a resolved or rejected Promise, or another Promise.
    fetch(url, {
        method: 'GET',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    })
        .then((response) => {
            if (response.status >= 400) {
                return Promise.reject(response.status)
            }
            // .json() is a built-in Promise in fetch that parses the response.
            return response.json()
        })
)