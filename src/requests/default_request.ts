import {FilmPost} from "../helpers/post_constructor";
import {Request} from "./former";


export async function get_response(
    target: string | undefined, page = 1, query = "", lang = "en-US"): Promise<void> {
    const request: Request = new Request(target, lang, query, page)
    const posts: any = await request.create_request()
    posts.results.forEach(
        ({title, overview, poster_path, release_date}) => {
            new FilmPost("film-container", title, poster_path, overview, release_date, false).render()
        })
}
