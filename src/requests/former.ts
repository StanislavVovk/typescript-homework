import {API_URL, API_KEY, MOVIE_DOMAIN} from "../enums/env_enum";

class Request {
    public API_URL: string;
    private readonly _API_KEY: string;
    private readonly _subdomain: string;

    constructor(
        public target: string | undefined, public lang: string = "en-US", public query: string = "", public page: number = 1) {
        this.API_URL = API_URL;
        this.target = target;
        this._API_KEY = API_KEY;
        this._subdomain = MOVIE_DOMAIN;
        this.lang = lang;
        this.query = query;
        this.page = page;
    }

    async http<T>(
        request: RequestInfo
    ): Promise<T> {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }

    async create_request<T>(): Promise<T> {
        if (this.query) {
            return this.http(`${this.API_URL + this.target + this._subdomain}?api_key=${this._API_KEY}&language=en-US&query=${this.query}&page=${this.page}`)
        }
        return this.http(`${this.API_URL + this._subdomain + this.target}?api_key=${this._API_KEY}&language=en-US&page=${this.page}`)
    }
}

export {Request}