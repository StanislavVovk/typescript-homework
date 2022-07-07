import IFilm from "./post_interface/post";

export function mapper(posts: any): IFilm {
    const postsF: IFilm = posts.map(({id, overview, poster_path, backdrop_path, release_date, title}: IFilm) => ({
        id,
        title,
        overview,
        poster_path,
        backdrop_path,
        release_date
    }))
    return postsF
}
