import {get_response} from "../requests/default_request";
import {API_PATH, IAPI_PATH} from "../enums/api_path_enums";
import {clear_posts, clear_random_post} from "../service/clear_posts";
import {get_random_movie} from "../service/random_film";

const {POPULAR} = API_PATH as IAPI_PATH

export async function startup(): Promise<void> {
    clear_posts()
    clear_random_post()
    await get_random_movie(POPULAR)
    await get_response(POPULAR);
}