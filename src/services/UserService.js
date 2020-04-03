
export const profile = () =>
    fetch(`http://localhost:8080/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

export const register = (user) =>
    fetch(`http://localhost:8080/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
