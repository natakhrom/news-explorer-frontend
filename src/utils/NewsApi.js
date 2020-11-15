class NewsApi {
    constructor({baseUrl, params}) {
        this._baseUrl = baseUrl;
        this._params = params;
    }

    _request(path, params) {
        var url = new URL(path);
        url.search = new URLSearchParams(params).toString();

        return fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    getNews(query) {
        var date = new Date();
        const toDate = date.toISOString().slice(0, 10); // Сегодня в формате 2020-08-03

        date.setDate(date.getDate() - 7);
        const fromDate = date.toISOString().slice(0, 10); // 7 дней назад
        const params = {...this._params, q: query, from: fromDate, to: toDate };

        return this._request(this._baseUrl, params);
    }
}

const newsApi = new NewsApi({
    // baseUrl: 'https://newsapi.org/v2/everything?',
    baseUrl: 'https://nomoreparties.co/news/v2/everything?',
    params: {
        apiKey: '5cd3b37e508846fa9903ccafc3a8a014', // Вынести в .env файл?
        pageSize: 100
    }
});

export default newsApi;