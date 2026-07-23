const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

{/* <i class="uis uis-heart"></i> */}

const postContainer = document.getElementById("post-container")

function renderPosts() {
    let postHTML = ""
    posts.forEach(post => {
        postHTML += `
        <section class="post" id="post-container">
                <div class="post-header">
                    <img src="${post.avatar}" alt="Post User Avatar" class="post-user-avatar">
                    <div class="post-user-info">
                        <h2 class="post-username">${post.name}</h2>
                        <p class="post-user-country">${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" alt="Post Image" class="post-image">
                <div class="post-actions">
                    <button type="button" class="like-button">
                        <img src="images/icon-heart.png" alt="Like Icon" class="action-icon like-icon">
                    </button>
                    <button type="button" class="comment-button">
                        <img src="images/icon-comment.png" alt="Comment Icon" class="action-icon comment-icon">
                    </button>
                    <button type="button" class="share-button">
                        <img src="images/icon-dm.png" alt="Share Icon" class="action-icon share-icon">
                    </button>
                </div>
                <div class="post-likes">
                    <p>${post.likes} likes</p>
                </div>
                <div class="post-comments">
                    <p><span class="comment-username">${post.username}</span> ${post.comment}</p>
                </div>
                <div class="separator"></div>
        </section>
        `
    })
    postContainer.innerHTML = postHTML
}

renderPosts()