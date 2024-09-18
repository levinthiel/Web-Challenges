console.clear();

// Exercise:
// Use document.createElement() and append another social media post to the body.

const createPost = document.createElement("article");
createPost.classList.add("post");
document.body.append(createPost);

const createP = document.createElement("p");
createP.classList.add("post__content");
createP.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
createPost.append(createP);

const createFooter = document.createElement("footer");
createFooter.classList.add("post__footer");
createPost.append(createFooter);

const createSpan = document.createElement("span");
createSpan.classList.add("post__username");
createSpan.textContent = "@username";
createFooter.append(createSpan);

const createLikeBtn = document.createElement("button");
createLikeBtn.setAttribute('type', 'button');
createLikeBtn.classList.add("post__button");
createLikeBtn.setAttribute('data-js', 'like-button');
createLikeBtn.textContent = " ♥ Like ";
createFooter.append(createLikeBtn);


function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

document.body.addEventListener("click", function (event) {
  if (event.target.matches('[data-js="like-button"]')) {
    handleLikeButtonClick(event);
  }
});
