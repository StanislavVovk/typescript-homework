// todo try to unify this

function clear_posts(): void {
    const posts: NodeList = document.querySelectorAll(".col-lg-3, col-md-4, col-12 p-2");
    posts.forEach((post: Node | HTMLDivElement) => {
        if ("style" in post) {
            post.style.display = "none"
        }
    })
}

function clear_random_post(): void {
    const random_post: HTMLElement | null = document.querySelector(".col-lg-6, col-md-8 mx-auto")
    if (random_post) {
        random_post.style.display = "none"
    }
}

function atribute_remover(buttons:any){
    buttons.forEach(
        (button: HTMLInputElement) => {
            button.removeAttribute("checked")
        }
    )
}

export {clear_posts, clear_random_post, atribute_remover}