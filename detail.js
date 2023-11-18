const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')
console.log(id)
const renderPost = async () => {
    const response = await fetch('http://localhost:3000/posts/' + id);
    const blog = await response.json();
    console.log(blog)
    let template = `
    <div class="details__blog">
        <h1>${blog.title}</h1>
        <p>${blog.body}</p>
        <small>Likes: ${blog.likes}</small>
    </div>
    `
    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => {
    renderPost()
})