import { BandSiteApi } from './band-site-api.js';

const commentForm = document.querySelector(".form");
const apiKey = "9f3187be-cf12-43b4-89d1-cfdc2094e8cb";
const bandsiteApi = new BandSiteApi(apiKey);
const commentList = document.querySelector(".comment-list"); 

async function getAllComments() {
    const comments = await bandsiteApi.getComments();
    commentList.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        const commentListItem = document.createElement("li");
        commentListItem.classList.add("comment-list__item");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("comment-list__image-wrapper");
        commentListItem.appendChild(leftDiv);

        const userImage = document.createElement("div");
        userImage.src = comments[i].image;
        userImage.classList.add("comment-list__image");
        leftDiv.appendChild(userImage);

        const rightDiv = document.createElement("div");
        rightDiv.classList.add("comment-list__comment-wrapper");
        commentListItem.appendChild(rightDiv);

        const topDiv = document.createElement("div");
        topDiv.classList.add("comment-list__top");
        rightDiv.appendChild(topDiv);

        const commentName = document.createElement("h2");
        commentName.innerText = comments[i].name;
        commentName.classList.add("comment-list__name");
        topDiv.appendChild(commentName);

        const commentPosted = document.createElement("p");
        const date = new Date(comments[i].timestamp);
        commentPosted.innerText = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        });
        commentPosted.classList.add("comment-list__posted");
        topDiv.appendChild(commentPosted);

        const commentDescription = document.createElement("p");
        commentDescription.innerText = comments[i].comment;
        commentDescription.classList.add("comment-list__description");
        rightDiv.appendChild(commentDescription);

        commentList.appendChild(commentListItem);
    }
}
commentForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const newComment = {
        name: event.target.name.value,
        comment: event.target.comment.value,
    }
    await bandsiteApi.postComments(newComment);
    await getAllComments();
    getAllComments();
    event.target.reset();
});
getAllComments();
