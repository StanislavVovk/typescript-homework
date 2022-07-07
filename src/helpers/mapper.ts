import {IFilm, IPostResponse} from "./post_interface/post";

export function mapper(posts: IPostResponse): IFilm {
    return posts.map(({id, overview, poster_path, backdrop_path, release_date, title}: IFilm) => ({
        id,
        title,
        overview,
        poster_path,
        backdrop_path,
        release_date
    }))
}
