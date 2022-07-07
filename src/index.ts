import {get_response} from "./requests/default_request";
import {clear_posts} from "./service/clear_posts";
import {API_PATH, IAPI_PATH} from "./enums/api_path_enums";
import {startup} from "./helpers/startup";

const {POPULAR, DETAILS, UPCOMING, RATED, SEARCH} = API_PATH as IAPI_PATH


export async function render(): Promise<void> {
    const upcoming = document.querySelector("#upcoming") as HTMLInputElement,
        popular = document.querySelector("#popular") as HTMLInputElement,
        top_rated = document.querySelector("#top_rated") as HTMLInputElement,
        search = document.querySelector("#search") as HTMLInputElement;

    await startup()
    upcoming.addEventListener('change', (e) => {
        e.preventDefault()
        clear_posts()
        get_response(UPCOMING)
    })

    popular.addEventListener("change", (e) => {
        e.preventDefault()
        clear_posts()
        get_response(POPULAR)
    })
    top_rated.addEventListener("change", (e) => {
        e.preventDefault()
        clear_posts()
        get_response(RATED)
    })

    search.addEventListener("change", () => {
        clear_posts()
        get_response(SEARCH, 1, search.value)
    })
}
