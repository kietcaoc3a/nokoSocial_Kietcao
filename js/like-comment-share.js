"use strict"
let Like = document.querySelectorAll(".like-comment-share .like");
likeImgs();
// let divImgs = document.querySelectorAll(".feeds .feed .liked-by");
function likeImgs() {
   Like.forEach((item) => {
      item.addEventListener("click", () => {
         if (!item.classList.contains("LIKE")) {
            item.style.color = "#099BFA";
            item.classList.add("LIKE");
            insertImg(item);
         }
         else {
            item.style.color = "var(--color-black)";
            deleteImg(item);
            item.classList.remove("LIKE");
         }
      });
   });
}

function insertImg(el) {
   const item = el.parentElement.previousElementSibling;
   const myImg = document.createElement("span");
   myImg.innerHTML = `
      <img src="/images/kiritoG.jpg">
   `
   item.insertBefore(myImg, item.lastElementChild);
   const boldEl = item.lastElementChild.querySelector("b");
   boldEl.textContent = "Kiet Cao, " + boldEl.textContent;
}

function deleteImg(el) {
   const item = el.parentElement.previousElementSibling;
   const boldEl = item.lastElementChild.querySelector("b");
   boldEl.textContent = boldEl.textContent.replace("Kiet Cao, ", "");
   item.removeChild(item.lastElementChild.previousElementSibling);
}
