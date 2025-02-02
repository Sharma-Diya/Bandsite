

const comments = [
    {
        posted: "11/02/2023",
        name: "Victor Pinto",
        image: "",
        description:
            "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        posted: "10/28/2023",
        name: "Christina Cabrera",
        image: "",

        description:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        posted: "10/20/2023",
        name: "Isaac Tadesse",
        image: "",

        description:
            "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
];
// get the form from the HTML file
const productForm = document.querySelector(".form");
// get the product list from the HTML file
const productList = document.querySelector(".product-list"); // <ul>

console.log(comments);

function renderComments() {

    productList.innerHTML = "";
    for (let i = 0; i < comments.length; i++) {
        const productListItem = document.createElement("li");
        productListItem.classList.add("product-list__item");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("product-list__left");
        productListItem.appendChild(leftDiv);

        const userImage = document.createElement("div");
        userImage.src = comments[i].image;
        userImage.classList.add("product-list__image");
        leftDiv.appendChild(userImage);


        const rightDiv = document.createElement("div");
        rightDiv.classList.add("product-list__right");
        productListItem.appendChild(rightDiv);

        const topDiv = document.createElement("div");
        topDiv.classList.add("product-list__top");
        rightDiv.appendChild(topDiv);

        const productName = document.createElement("h2");
        productName.innerText = comments[i].name;
        productName.classList.add("product-list__name");
        topDiv.appendChild(productName);

        const productPosted = document.createElement("p");
        productPosted.innerText = comments[i].posted;
        productPosted.classList.add("product-list__posted");
        topDiv.appendChild(productPosted);


        const productDescription = document.createElement("p");
        productDescription.innerText = comments[i].description;
        productDescription.classList.add("product-list__description");
        rightDiv.appendChild(productDescription);

        

        productList.appendChild(productListItem);

    }
}

productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProduct = {
        posted: new Date().toLocaleDateString(),
        // image: event.target.image.value,
        name: event.target.product.value,
        description: event.target.productDescription.value,
    }
    comments.unshift(newProduct);
    console.log(newProduct);
    renderComments();
    event.target.reset();
});

renderComments();
