"use strict"

// ============================= Like ===========================
let Like = document.querySelectorAll(".like-comment-share .like");
likeImgs(Like);
function likeOneImg(L) {
   L.addEventListener("click", () => {
      if (!L.classList.contains("LIKE")) {
         L.style.color = "#099BFA";
         L.classList.add("LIKE");
         insertImg(L, "You", "Liked by ");
      }
      else {
         L.style.color = "";
         deleteImg(L, "Kiet Cao", true);
         L.classList.remove("LIKE");
      }
   });
}
function likeImgs(L) {
   L.forEach((item) => {
      item.addEventListener("click", () => {
         if (!item.classList.contains("LIKE")) {
            item.style.color = "#099BFA";
            item.classList.add("LIKE");
            insertImg(item, "Kiet Cao, ");
         }
         else {
            item.style.color = "";
            deleteImg(item, "Kiet Cao, ");
            item.classList.remove("LIKE");
         }
      });
   });
}

function insertImg(el, val, textP = "") {
   const item = el.parentElement.previousElementSibling;
   const myImg = document.createElement("span");
   myImg.innerHTML = `
      <img src="/images/kiritoG.jpg">
   `
   item.insertBefore(myImg, item.lastElementChild);
   // console.log(item.lastElementChild);
   const boldEl = item.lastElementChild.querySelector("b");
   const newText = document.createTextNode(textP);
   item.lastElementChild.insertBefore(newText, boldEl);
   boldEl.textContent = val + boldEl.textContent;
}

function deleteImg(el, val, check = false) {
   const item = el.parentElement.previousElementSibling;
   const boldEl = item.lastElementChild.querySelector("b");
   if (check === true) {
      const pEl = item.lastElementChild;
      pEl.innerHTML = "<b></b>";
   }
   else {
      boldEl.textContent = boldEl.textContent.replace(val, "");
   }
   item.removeChild(item.lastElementChild.previousElementSibling);
}

// ======================================= Comment ==========================
let Comment = document.querySelectorAll(".like-comment-share .comment");
console.log(Array.from(Comment));

function commentFunc(el) {
   Array.from(el).forEach((item) => {
      item.addEventListener("click", () => {
         if (!item.classList.contains("isCOMMENT")) {
            item.classList.add("isCOMMENT");
            item.parentElement.nextElementSibling.style.display = "flex";
         }
         else {
            item.parentElement.nextElementSibling.style.display = "none";
            item.classList.remove("isCOMMENT");
         }
      });
   });
}

function commentPostFunc(item) {
   item.addEventListener("click", () => {
      if (!item.classList.contains("isCOMMENT")) {
         item.classList.add("isCOMMENT");
         item.parentElement.nextElementSibling.style.display = "flex";
      }
      else {
         item.parentElement.nextElementSibling.style.display = "none";
         item.classList.remove("isCOMMENT");
      }
   });
}
commentFunc(Comment);


