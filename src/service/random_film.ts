import {Request} from "../requests/former";
import {RandomMovie} from "../helpers/random_film_constructor";
import {mapper} from "../helpers/mapper";
import {IFilm} from "../helpers/post_interface/post";


export async function get_random_movie(
    target: string | undefined, page = 1, query = "", lang = "en-US"): Promise<void> {
    const request: Request = new Request(target, lang, query, page)
    const posts_response: any = await request.create_request()
    const posts: any = mapper(posts_response.results)
    const random_post:IFilm = posts[randomizer(posts.length)]

    new RandomMovie("section", random_post.overview, random_post.title, random_post.backdrop_path).render()
}

function randomizer(number_of_elements: number): number {
    return Math.round(Math.random() * number_of_elements)
}