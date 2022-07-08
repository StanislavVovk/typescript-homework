import {FilmPost} from "../helpers/post_constructor";
import {Request} from "./former";
import {IFilm, IPostResponse} from "../helpers/post_interface/post";
import {mapper} from "../helpers/mapper";

export async function get_response(
    target: string | undefined, page = 1, query = "", lang = "en-US", parent_class="film-container", element_class=["col-lg-3", "col-md-4", "col-12", "p-2"]): Promise<void> {
    const request: Request = new Request(target, lang, query, page)
    const posts_response: IPostResponse = await request.create_request()
    const posts:IPostResponse = mapper(posts_response.results)
    posts.forEach(
        (post:IFilm) => {
            new FilmPost(parent_class, element_class, post.id, post.title, post.poster_path, post.overview, post.release_date, false).render()
        })
}
