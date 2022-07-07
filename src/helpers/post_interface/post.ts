interface IFilm {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string
}

interface IPostResponse {
    [key: string]: any
}

export {IFilm, IPostResponse}