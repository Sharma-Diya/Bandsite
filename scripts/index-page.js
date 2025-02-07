import { BandSiteApi } from './band-site-api.js';

const productForm = document.querySelector(".form");
const apiKey = "9f3187be-cf12-43b4-89d1-cfdc2094e8cb";
const bandsiteApi = new BandSiteApi(apiKey);
const productList = document.querySelector(".comment-list"); 

async function getAllComments() {
    const comments = await bandsiteApi.getComments();
    productList.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        const productListItem = document.createElement("li");
        productListItem.classList.add("comment-list__item");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("comment-list__image-wrapper");
        productListItem.appendChild(leftDiv);

        const userImage = document.createElement("div");
        userImage.src = comments[i].image;
        userImage.classList.add("comment-list__image");
        leftDiv.appendChild(userImage);

        const rightDiv = document.createElement("div");
        rightDiv.classList.add("comment-list__comment-wrapper");
        productListItem.appendChild(rightDiv);

        const topDiv = document.createElement("div");
        topDiv.classList.add("comment-list__top");
        rightDiv.appendChild(topDiv);

        const productName = document.createElement("h2");
        productName.innerText = comments[i].name;
        productName.classList.add("comment-list__name");
        topDiv.appendChild(productName);

        const productPosted = document.createElement("p");
        const date = new Date(comments[i].timestamp);
        productPosted.innerText = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        });
        productPosted.classList.add("comment-list__posted");
        topDiv.appendChild(productPosted);

        const productDescription = document.createElement("p");
        productDescription.innerText = comments[i].comment;
        productDescription.classList.add("comment-list__description");
        rightDiv.appendChild(productDescription);

        // const deleteButton = document.createElement("button");
        // deleteButton.innerText = "DELETE";
        // deleteButton.classList.add("form__button");
        // rightDiv.appendChild(deleteButton);

        // deleteButton.addEventListener("click", async () => {
        //     await bandsiteApi.deleteComment(comments[i].id);
        //     productListItem.remove(); // Remove from DOM
        // });
        productList.appendChild(productListItem);
    }
}
productForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const newComment = {
        name: event.target.product.value,
        comment: event.target.productDescription.value,
    }
    await bandsiteApi.postComments(newComment);
    await getAllComments();
    getAllComments();
    event.target.reset();
});
getAllComments();
