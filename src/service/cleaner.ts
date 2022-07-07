export function cleaner(): void {
    const posts: NodeList = document.querySelectorAll(".col-lg-3, col-md-4, col-12 p-2");
    posts.forEach((post: Node | HTMLDivElement) => {
        if ("style" in post) {
            post.style.display = "none"
        }
    })
}