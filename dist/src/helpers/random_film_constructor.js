"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomMovie = void 0;
var RandomMovie = /** @class */ (function () {
    function RandomMovie(parent_name, overview, title, image_url) {
        if (parent_name === void 0) { parent_name = 'main'; }
        this.parent_name = parent_name;
        this.overview = overview;
        this.title = title;
        this.image_url = image_url;
        this.parent_selector = document.querySelector(this.parent_name);
        this.overview = overview;
        this.title = title;
        this.image_url = image_url;
    }
    RandomMovie.prototype.render = function () {
        var random_movie = document.createElement("section");
        random_movie.classList.add("py-5", "text-center", "container-fluid");
        random_movie.setAttribute("id", 'random-movie');
        random_movie.style.backgroundImage = "url(".concat(this.image_url, ")");
        random_movie.innerHTML = "\n            <div class=\"row py-lg-5\">\n                <div\n                    class=\"col-lg-6 col-md-8 mx-auto\"\n                    style=\"background-color: #2525254f\">\n                    <h1 id=\"random-movie-name\" class=\"fw-light text-light\">".concat(this.title, "</h1>\n                    <p id=\"random-movie-description\" class=\"lead text-white\">").concat(this.overview, "</p>\n                </div>\n            </div>\n");
        this.parent_selector.append(random_movie);
    };
    return RandomMovie;
}());
exports.RandomMovie = RandomMovie;
