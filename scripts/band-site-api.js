export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    };

    async getComments() {
        const response = await axios.get(
            this.baseUrl + "/comments?api_key=" + this.apiKey
        );
        const comments = response.data;
        comments.sort(function (a, b) {
            return b.timestamp - a.timestamp;
        });
        return comments;
    };

    async postComments(comment) {
        const response = await axios.post(
            this.baseUrl + "/comments?api_key=" + this.apiKey, comment
        );
        const comments = response.data;
        return comments;

    }

    async getShow() {
        const response = await axios.get(
            this.baseUrl + "/showdates?api_key=" + this.apiKey
        );
        const shows = response.data;
        return shows;
    }
}
