import {FilmPost} from "../helpers/post_constructor";
import {Request} from "./former";
import {IFilm, IPostResponse} from "../helpers/post_interface/post";
import {mapper} from "../helpers/mapper";



export async function get_response(
    target: string | undefined, page = 1, query = "", lang = "en-US"): Promise<void> {
    const request: Request = new Request(target, lang, query, page)
    const posts_response: IPostResponse = await request.create_request()
    const posts:IPostResponse = mapper(posts_response.results)
    posts.forEach(
        (post:IFilm) => {
            new FilmPost("film-container", post.title, post.poster_path, post.overview, post.release_date, false).render()
        })
}
