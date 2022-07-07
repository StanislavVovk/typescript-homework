"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmPost = void 0;
var globals_1 = require("../enums/globals");
var env_enum_1 = require("../enums/env_enum");
var FilmPost = /** @class */ (function () {
    function FilmPost(parent_class, title, poster_image, film_description, createdAt, likedStatus) {
        this.parent_class = parent_class;
        this.title = title;
        this.poster_image = poster_image;
        this.film_description = film_description;
        this.createdAt = createdAt;
        this.likedStatus = likedStatus;
        this.parent = document.querySelector("#".concat(parent_class));
        this.title = title;
        this.poster_image = poster_image;
        this.film_description = film_description;
        this.createdAt = createdAt;
        this.likedStatus = likedStatus;
    }
    ;
    FilmPost.prototype.changer = function () {
        if (this.likedStatus) {
            return globals_1.liked;
        }
        return globals_1.unliked;
    };
    FilmPost.prototype.render = function () {
        var post = document.createElement("div");
        post.classList.add("col-lg-3", "col-md-4", "col-12", "p-2");
        this.poster_image = this.poster_image ? env_enum_1.IMAGE_URL + this.poster_image : globals_1.not_found;
        post.innerHTML = "\n        <div class=\"card shadow-sm\">\n            <img src=".concat(this.poster_image, " alt=").concat(this.title, ">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"red\" fill=").concat(this.changer(), " width=\"50\" height=\"50\" class=\"bi bi-heart-fill position-absolute p-2\" viewBox=\"0 -2 18 22\">\n                                    <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"></path>\n                                </svg>\n            <div class=\"card-body\">\n                <p class=\"card-text truncate\">").concat(this.film_description, "</p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                    <small class=\"text-muted\">").concat(this.createdAt, "</small>\n                </div>\n            </div>\n        </div>\n        ");
        if (this.parent) {
            this.parent.append(post);
        }
        else {
            throw Error;
        }
    };
    return FilmPost;
}());
exports.FilmPost = FilmPost;
