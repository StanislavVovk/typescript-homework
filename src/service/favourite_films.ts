import {liked, unliked} from "../enums/globals";

import {API_PATH, IAPI_PATH} from "../enums/api_path_enums";
import {Request} from "../requests/former";
import {IPostResponse} from "../helpers/post_interface/post";

import {FilmPost} from "../helpers/post_constructor";

const {DETAILS} = API_PATH as IAPI_PATH

const storage = localStorage;

function change_storage(id: string): void {
    const checker: Array<string> | null = JSON.parse(storage.getItem("id") as string);
    if (!checker || checker.length === 0) {
        storage.setItem("id", JSON.stringify([id]))
    } else {
        checker.forEach((element) => {
            if (element === id) {
                const myIndex = checker.indexOf(id);
                if (myIndex !== -1) {
                    checker.splice(myIndex, 1);
                    storage.setItem("id", JSON.stringify(checker))
                }
            } else {
                checker.push(id)
                storage.setItem("id", JSON.stringify(checker))
            }
        })

    }
}


function color_changer(id: string): void {
    const checker: Array<string> | null = JSON.parse(storage.getItem("id") as string);
    checker.forEach((id) => {
        const svgs = document.querySelectorAll(`[data-val='${id}']`)
        svgs.forEach((svg) => {
                    const color: string | null = svg.getAttribute("fill")
            if (color === liked) {
                    svg.setAttribute("fill", unliked)
            } else {
                svg.setAttribute("fill", liked)
            }
                }

            )
    })
}


async function toggleFavouriteFilm(target: string | undefined): Promise<void> {
    const id_array: Array<string> | null = JSON.parse(storage.getItem("id"))

    if (id_array) {
        for (const curr_id of id_array) {
            const request: Request = new Request(target, "en-US", curr_id)
            const posts_response: IPostResponse = await request.create_request()
            new FilmPost('favorite-movies', ["col-12", "p-2"], posts_response.id, posts_response.title, posts_response.poster_path, posts_response.overview, posts_response.release_date).render()
            color_changer(curr_id)
        }
    }

}

export {color_changer, change_storage, toggleFavouriteFilm}