class MainApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _request(path, payload) {
        // console.log('_request(path, payload)', path, payload);
        return fetch(path, payload) 
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(res);
                //return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    _addAuthTokenToRequestHeader(jwt) {
        return {...this._headers, Authorization: `Bearer ${jwt}` };
    }

    getUserInfo(jwt) {
        return this._request(`${this._baseUrl}/users/me`, {
            headers: this._addAuthTokenToRequestHeader(jwt)
        });
    }

    signIn(email, password) {
        return this._request(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify ({
                email,
                password
            })
        });
    }

    signUp(email, password, name) {
        return this._request(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify ({
                name,
                email,
                password
            })
        });
    }

    getArticles(jwt) {
        return this._request(`${this._baseUrl}/articles`, {
            headers: this._addAuthTokenToRequestHeader(jwt)
        })
    }

    saveArticle(jwt, article) {
        return this._request(`${this._baseUrl}/articles`, {
            method: 'POST',
            headers: this._addAuthTokenToRequestHeader(jwt),
            body: JSON.stringify ({...article})
        });
    }

    deleteArticle(jwt, Id) {
        return this._request(`${this._baseUrl}/articles/${Id}`, {
            method: 'DELETE',
            headers: this._addAuthTokenToRequestHeader(jwt)
        });
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.khrom.students.nomoreparties.xyz',
    headers: { "Content-Type": "application/json" }
});

export default mainApi;