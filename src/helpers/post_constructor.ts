import {liked, not_found, unliked} from "../enums/globals";
import {IMAGE_URL} from "../enums/env_enum";

class FilmPost {
    public parent: Element | null;

    constructor(public parent_class: string, public title: string, public poster_image: string, public film_description: string, public createdAt: string, public likedStatus: boolean) {
        this.parent = document.querySelector(`#${parent_class}`);
        this.title = title;
        this.poster_image = poster_image;
        this.film_description = film_description;
        this.createdAt = createdAt;
        this.likedStatus = likedStatus;
    };

    changer(): string {
        if (this.likedStatus) {
            return liked
        }
        return unliked
    }

    render(): void {
        const post = document.createElement("div");
        post.classList.add("col-lg-3", "col-md-4", "col-12", "p-2")
        this.poster_image = this.poster_image ? IMAGE_URL + this.poster_image : not_found
        post.innerHTML = `
        <div class="card shadow-sm">
            <img src=${this.poster_image} alt=${this.title}>
            <svg xmlns="http://www.w3.org/2000/svg" stroke="red" fill=${this.changer()} width="50" height="50" class="bi bi-heart-fill position-absolute p-2" viewBox="0 -2 18 22">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                                </svg>
            <div class="card-body">
                <p class="card-text truncate">${this.film_description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${this.createdAt}</small>
                </div>
            </div>
        </div>
        `
        if (this.parent) {
            this.parent.append(post)
        } else {
            throw Error
        }
    }
}

export {FilmPost};