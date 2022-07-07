import {IMAGE_URL} from "../enums/env_enum";

class RandomMovie {
    public parent_selector: Element

    constructor(public parent_name: string, public overview: string, public title: string, public image_url: string) {
        this.parent_selector = document.querySelector(this.parent_name) as HTMLElement;
        this.overview = overview;
        this.title = title;
        this.image_url = image_url;
    }

    render(): void {
        const random_movie = document.createElement("div")
        const section = document.querySelector("#random-movie") as HTMLElement
        section.style.backgroundImage = `url(${IMAGE_URL + this.image_url})`
        random_movie.classList.add("row", "py-lg-5")
        random_movie.setAttribute("id", 'random-movie')

        random_movie.innerHTML = `
                <div
                    class="col-lg-6 col-md-8 mx-auto"
                    style="background-color: #2525254f">
                    <h1 id="random-movie-name" class="fw-light text-light">${this.title}</h1>
                    <p id="random-movie-description" class="lead text-white">${this.overview}</p>
                </div>
`
        this.parent_selector.append(random_movie)
    }
}

export {RandomMovie}