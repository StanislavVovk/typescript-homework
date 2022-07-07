"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleaner = void 0;
function cleaner() {
    var posts = document.querySelectorAll(".col-lg-3, col-md-4, col-12 p-2");
    posts.forEach(function (post) {
        if ("style" in post) {
            post.style.display = "none";
        }
    });
}
exports.cleaner = cleaner;
