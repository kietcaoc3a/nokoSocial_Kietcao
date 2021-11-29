// ------------------- Side Bar ----------------
const menuItem = document.querySelectorAll(".menu-item");
const size = menuItem.length;
let check_click = new Boolean(size);
for (let i = 1; i < size; i++) {
   check_click[i] = false;
}
check_click[0] = true;


// Remove active class from all menu items
const RemoveItem = () => {
   for (let i = 0; i < size; i++) {
      menuItem[i].classList.remove("active");
      check_click[i] = false;
   }
};

for (let i = 0; i < size; i++) {
   menuItem[i].addEventListener("click", (e) => {
      if (check_click[i] === false) {
         RemoveItem(); menuItem[i].classList.add("active");
         if (i === 1) {
            check_click[i] = true;
            openExplore();
            e.stopPropagation();
            closeNotification();
         }
         else if (i === 2) {
            check_click[i] = true;
            openNotification();
            e.stopPropagation();
            closeExplore();
         }
         else if (i === 3) {
            openMessages();
            check_click[i] = true;
            closeNotification();
            closeExplore();

         }
         else if (i === 6) {
            openTheme();
            closeNotification();
            closeExplore();
         }
         else {
            closeNotification();
            check_click[i] = true;
            closeExplore();
         }
      }
      else {
         check_click[i] = false;
         menuItem[0].classList.add("active");
         check_click[0] = true;
         if (i === 2) {
            closeNotification();
         }
         else if (i === 1) {
            closeExplore();
         }
      }
      e.stopPropagation();
   });
}

for (let x = 0; x < size; x++) {
   menuItem[x].addEventListener("mouseover", () => {
      menuItem[x].classList.add("active");
   });
   menuItem[x].addEventListener("mouseout", () => {
      if (check_click[x] === false) menuItem[x].classList.remove("active");
   });
}
// ------------------- End Side Bar -----------------------------


// ------------ Notifications Popup ------------
function closeNotification() {
   document.querySelector(".notifications-popup").style.display = "none";
}
function openNotification(e) {
   document.querySelector(".notifications-popup").style.display = "block";
   document.getElementById("notifications").querySelector(".notification-count").style.display = "none";
}
document.querySelector(".notifications-popup").addEventListener("click", (e) => {
   e.stopPropagation();
});
document.querySelector("body").addEventListener("click", () => {
   RemoveItem();
   closeNotification();
   closeExplore();
   check_click[0] = true;
   menuItem[0].classList.add("active");
});
// ------------ End Notifications ------------

// ---------------- Explores Popup ------------------
function closeExplore() {
   document.querySelector(".explores-popup").style.display = "none";
}
function openExplore(e) {
   document.querySelector(".explores-popup").style.display = "block";
}
document.querySelector(".explores-popup").addEventListener("click", (e) => {
   e.stopPropagation();
});

// ---------------- End Explores Popup ------------------


// ----------------------- Messages ------------------------------
function openMessages() {
   document.querySelector(".right .messages").style.boxShadow = "0 0 1rem var(--color-primary)";
   document.getElementById("messages-notifications").querySelector(".notification-count").style.display = "none";
   setTimeout(() => {
      document.querySelector(".right .messages").style.boxShadow = "none";
   }, 2000)
}
// ----------------------- End Messages ------------------------------

// ----------------------- Customize Theme --------------------------------

let Custom_Theme = document.querySelector(".customize-theme");
// console.log(Custom_Theme);
Custom_Theme.addEventListener("click", () => {
});
function openTheme() {
   Custom_Theme.style.display = "grid";
   check_click[6] = true;
};

document.querySelector(".customize-theme").addEventListener("click", (e) => {
   Custom_Theme.style.display = "none";
   check_click[6] = false;
   check_click[0] = true;
   menuItem[0].classList.add("active");
   menuItem[6].classList.remove("active");
});

document.querySelector(".customize-theme .card").addEventListener("click", (e) => {
   e.stopPropagation();
});

// -------------------------- Font Size ------------------------------

let fontSize = document.querySelector(".customize-theme .font-size");
let chooseSize = document.querySelector(".customize-theme .font-size .choose-size")
let n = chooseSize.children.length;
let root = document.querySelector(":root");

// console.log(document.querySelector("html").style.fontSize);
chooseSize.querySelectorAll("span").forEach(MyFunc);

function MyFunc(item, index) {
   item.addEventListener("click", (e) => {
      deleteFont();
      item.classList.add("active");
      if (index === 0) {
         document.querySelector("html").style.fontSize = "10px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "5.4rem");
      }
      else if (index === 1) {
         document.querySelector("html").style.fontSize = "13px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "-7rem");
      }
      else if (index === 2) {
         document.querySelector("html").style.fontSize = "16px";
         root.style.setProperty("--sticky-top-left", "-2rem");
         root.style.setProperty("--sticky-top-right", "-17rem");
      }
      else if (index === 3) {
         document.querySelector("html").style.fontSize = "19px";
         root.style.setProperty("--sticky-top-left", "-5rem");
         root.style.setProperty("--sticky-top-right", "-25rem");
      }
      else if (index === 4) {
         document.querySelector("html").style.fontSize = "22px";
         root.style.setProperty("--sticky-top-left", "-12rem");
         root.style.setProperty("--sticky-top-right", "-35rem");
      }
   });
}


function deleteFont() {
   for (let i = 0; i < n; i++) {
      chooseSize.children[i].classList.remove("active");
   }
}
// -------------------------- End Font Size ------------------------------


// ----------------------------- Color --------------------------------
let listColor = document.querySelector(".customize-theme .color .choose-color");
// let Custom_Card = document.querySelector(".customize-theme .card");
// Custom_Card.style.boxShadow = "0 0 1rem var(--color-primary)";

for (let i = 0; i < listColor.children.length; i++) {
   listColor.children[i].addEventListener("click", () => {
      removeActive();
      if (listColor.children[i].classList.contains("color-1")) {
         root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-2")) {
         root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-3")) {
         root.style.setProperty("--color-primary", "hsl(0, 95%, 65%)");
      }
      else if (listColor.children[i].classList.contains("color-4")) {
         root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-5")) {
         root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)");
      }
      listColor.children[i].classList.add("active");
   });
}

function removeActive() {
   for (let i = 0; i < listColor.children.length; i++) {
      listColor.children[i].classList.remove("active");
   }
}
// ----------------------------- End Color --------------------------------

// -------------------------------- Background ---------------------------------
let backgroundList = document.querySelectorAll(".customize-theme .card .background .choose-bg div");
// console.log(backgroundList);
backgroundList.forEach(changeBg);
function changeBg(item, index) {
   item.addEventListener("click", () => {
      deleteBg();
      if (index === 0) {
         root.style.setProperty("--dark-color-lightness", "17%");
         root.style.setProperty("--white-color-lightness", "100%");
         root.style.setProperty("--light-color-lightness", "95%");
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "";
         document.querySelector(".middle .create-post .para").style.color = "var(--color-dark)";
      }
      else if (index === 1) {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "20%");
         root.style.setProperty("--light-color-lightness", "15%");
         document.querySelector(".middle .create-post .your-post .card .add-post").style.border = "2px solid #7C86E8";
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "#D0D2E5";
         document.querySelector(".middle .create-post .para").style.color = "white";
      }
      else if (index === 2) {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "10%");
         root.style.setProperty("--light-color-lightness", "0%");
         document.querySelector(".middle .create-post .your-post .card .add-post").style.border = "2px solid #7C86E8";
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "#D0D2E5";
         document.querySelector(".middle .create-post .your-post .card .heading-card").style.borderBottom = "3px solid #7C86E8";
         document.querySelector(".middle .create-post .para").style.color = "white";
      }
      item.classList.add("active");
      document.querySelector(".middle .create-post .para").addEventListener("mouseenter", (e) => {
         if (index === 1 || index === 2) {
            e.target.style.background = "#6167A8";
         }
         else {
            e.target.style.background = "#EBEAE7";
         }
      });
      document.querySelector(".middle .create-post .para").addEventListener("mouseleave", (e) => {
         e.target.style.background = "";
      });
   });
}

function deleteBg() {
   for (let i = 0; i < backgroundList.length; i++) {
      backgroundList[i].classList.remove("active");
   }
}
// -------------------------------- End Background ---------------------------------

// ---------------------------------- Category Messages -----------------------------
let categoryActive = document.querySelectorAll(".right .messages .category h6");
categoryActive.forEach((item, index) => {
   item.addEventListener("click", (e) => {
      deleteCategory();
      item.classList.add("active");
      RemoveItem();
      if (index === 0) {
         document.querySelectorAll(".right .messages .message").forEach((item1) => {
            item1.style.display = "flex";
         });
         check_click[3] = true;
         menuItem[3].classList.add("active");
         e.stopPropagation();
      }
      else if (index === 2) {
         document.querySelector(".right .friend-requests").style.display = "block";
         check_click[3] = true;
         menuItem[3].classList.add("active");
         e.stopPropagation();
      }
      else {
         check_click[3] = true;
         menuItem[3].classList.add("active");
         e.stopPropagation();
      }
   });
});
console.log(categoryActive);

function deleteCategory() {
   for (let i = 0; i < categoryActive.length; i++) {
      categoryActive[i].classList.remove("active");
   }
   document.querySelector(".right .friend-requests").style.display = "none";
   document.querySelectorAll(".right .messages .message").forEach((item1) => {
      item1.style.display = "none";
   });
}
document.querySelector(".right .messages").addEventListener("click", (e) => {
   RemoveItem();
   closeExplore();
   closeNotification();
   check_click[3] = true;
   menuItem[3].classList.add("active");
   openMessages();
   e.stopPropagation();
});
// ---------------------------------- End Category Messages -----------------------------

// ------------------------------------- Stories ----------------------------
let storyList = document.querySelectorAll(".middle .stories .story");
// console.log(storyList);
// storyList.forEach((item, index) => {
//    item.addEventListener("mouseenter", (e) => {
//       item.classList.add("active");
//    });
// });
// ------------------------------------- End Stories ----------------------------

// ------------------------------------ Create Post -------------------------
// console.log(document.querySelector(".middle .create-post .your-post"));
document.querySelector(".middle .para").addEventListener("click", (e) => {
   document.querySelector(".middle .create-post .your-post").style.display = "grid";
});

document.querySelector(".middle .create-post .your-post").addEventListener("click", (e) => {
   e.target.style.display = "none";
});
document.querySelector(".middle .create-post .your-post .card").addEventListener("click", (e) => {
   e.stopPropagation();
});

document.querySelector(".middle .create-post .your-post .card .heading-card .close-btn").addEventListener("click", (e) => {
   document.querySelector(".middle .create-post .your-post").style.display = "none";
});
// ------------------------------------ End Create Post -------------------------

// --------------------------------------- Upload Image ----------------------------

let isOpen = false;
let preCard = document.querySelector(".middle .create-post .your-post .card .images-preview");
let btlClose = document.querySelector(".middle .create-post .your-post .card .images-preview .close-btn");

preCard.addEventListener("mouseover", (e) => {
   if (isOpen) {
      preCard.classList.add("nohover");
   }
});

btlClose.addEventListener("mouseenter", (e) => {
   preCard.classList.add("nohover");
});

btlClose.addEventListener("mouseleave", (e) => {
   preCard.classList.remove("nohover");
});

let imgFile = document.querySelector("#file-input");
let preImage = document.querySelector(".middle .create-post .card .images-preview .image-input");
document.querySelector(".middle .create-post .your-post .card .add-post .icon-input .iconInput1").addEventListener("click", (e) => {
   preCard.style.display = "grid";
   imgFile.disabled = false;

});


imgFile.addEventListener("change", function (e) {
   let file = e.target.files[0];
   if (file) {

      const reader = new FileReader();
      document.querySelector("#image-preview-default1").style.display = "none";
      document.querySelector("#image-preview-default2").style.display = "none";
      document.querySelector("#icon1").style.display = "none";

      preImage.style.display = "block";

      reader.addEventListener("load", function () {
         preImage.setAttribute("src", this.result);
      });

      reader.readAsDataURL(file);
      isOpen = true;
   }
});

imgFile.addEventListener("click", (e) => {
   if (isOpen) {
      imgFile.disabled = true;
   }
});

// ---------------------- Close ImageUpload --------------------
document.querySelector(".middle .create-post .your-post .card .images-preview .close-btn").addEventListener("click", (e) => {
   document.querySelector(".middle .create-post .your-post .card .images-preview").style.display = "none";
   imgFile.disabled = true;

   preImage.setAttribute("src", "");
   imgFile.value = null;

   preImage.style.display = "none";

   document.querySelector("#image-preview-default1").style.display = "block";
   document.querySelector("#image-preview-default2").style.display = "block";
   document.querySelector("#icon1").style.display = "block";
   isOpen = false;

});
// ---------------------- End Close ImageUpload --------------------

// -------------------------- Drag Image -------------------------

// document.querySelector(".middle .create-post .your-post .card .images-preview").addEventListener("dragenter", (e) => {

//    document.querySelector("#image-preview-default1").style.display = "none";
//    document.querySelector("#image-preview-default2").style.display = "none";
//    document.querySelector("#icon1").style.display = "none";

//    preImage.style.display = "block";
// });
// -------------------------- End Drag Image -------------------------

// ------------------------- Adding and Delete Friend Requests --------------------

const RequestList = document.querySelector(".right .friend-requests");

document.querySelectorAll(".right .friend-requests .request .action").forEach(item => {
   item.querySelectorAll("button").forEach((item1, index) => {
      index === 0 && item1.classList.add("accept");
      index === 1 && item1.classList.add("decline");
   })
});
const buttonList = document.querySelectorAll(".right .friend-requests .request .action ");
console.log(buttonList);

buttonList.forEach(item => {
   item.querySelectorAll("button").forEach(item1 => {
      item1.addEventListener("click", () => {
         if (item1.classList.contains("accept")) {
            const source = item.previousElementSibling.children[0].firstElementChild.src;
            const textH5 = item.previousElementSibling.children[1].firstElementChild.textContent;
            const textP = item.previousElementSibling.children[1].lastElementChild.textContent;

            creteNewFriends(source, textH5, textP);
         }
         RequestList.removeChild(item1.parentElement.parentElement);
      });
   });
});

function creteNewFriends(source, textH5, textP) {
   const Message = document.createElement("div");
   Message.className = "message";

   const ProfilePhoto = document.createElement("div");

   Message.innerHTML = `
      <div class="profile-photo">
         <img src="" alt="">
         <div class="active"></div>
      </div>

      <div class="message-body">
         <h5></h5>
         <p class="text-muted"></p>
      </div>
   `
   Message.querySelector("img").src = source;
   Message.querySelector("h5").textContent = textH5;
   Message.querySelector("p").textContent = textP;
   // console.log(Message);
   document.querySelector(".right .messages").insertBefore(Message, RequestList);
   Message.style.display = "none";
}
