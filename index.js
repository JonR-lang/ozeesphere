const container = document.querySelector('.blogs')
const renderPosts = async () => {
    let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
    const response = await fetch(url);
    const posts = await response.json();
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="blogs__blog">
            <h2>${post.title}</h2>
            <p>${(post.body).slice(0, 150)}...</p>
            <a href="./details.html?id=${post.id}">Read more</a>
        </div>
        `
       container.innerHTML = template
        
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderPosts();
})