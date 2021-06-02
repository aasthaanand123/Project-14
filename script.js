const hamburger = document.querySelector(".hamburger__li");
const body = document.querySelector("body");
const mobilemenu = document.querySelector(".mobile__menu");
const cross = document.querySelector(".cross__li");
const back = document.querySelector(".back");
const overlay = document.querySelector(".overlay");
const thanks__modal = document.querySelector(".success__modal");
const gotit = document.querySelector(".modal__btn");
const bookmark = document.querySelector(".book");
const texttwo = document.querySelector(".text__two");
const textoone = document.querySelector(".text__on");
const path = document.querySelector("path");
const bg = document.querySelector("circle");
const articleselect = document.querySelectorAll(".select");
const modalselect = document.querySelector(".selection__modal");
const modalbutton = document.querySelectorAll(".button_article");
const success = document.querySelector(".success__modal");
const successbtn = document.querySelector(".modal__btn");
const checklist = document.querySelectorAll("[name='select']");
const cross_selection = document.querySelector(".img__cross");
const cont = document.querySelectorAll(".selection_btn");
const check = document.querySelectorAll(".checked");
const selection_article = document.querySelectorAll(".selection__article");
const complete = document.querySelectorAll(".complete");
const collected = document.querySelector(".pledge_collected");
const number_input = document.querySelectorAll("input[type='number']");
const backers = document.querySelector(".backers");
const progress_bar = document.querySelector("#progress");
// function for mobile menu toggle
const toggle = function () {
  mobilemenu.classList.toggle("transition");
  overlay.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  body.classList.toggle("none");
};
hamburger.addEventListener("click", toggle);
cross.addEventListener("click", toggle);

// when bookmarked
bookmark.addEventListener("click", function () {
  texttwo.classList.toggle("hidden");
  textoone.classList.toggle("hidden");
  path.classList.toggle("toggle_path");
  bg.classList.toggle("toggle_circle");
});
// thanks for your support modal
gotit.addEventListener("click", function () {
  thanks__modal.classList.remove("flex");
  thanks__modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
// main modal
articleselect.forEach((select) => {
  select.addEventListener("click", function () {
    modalselect.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
modalbutton.forEach((btn) => {
  btn.addEventListener("click", function () {
    success.classList.remove("hidden");
    success.classList.add("flex");

    modalselect.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});
successbtn.addEventListener("click", function () {
  success.classList.add("hidden");
  success.classList.remove("flex");
});
cross_selection.addEventListener("click", function () {
  modalselect.classList.add("hidden");
  overlay.classList.add("hidden");
});
back.addEventListener("click", function () {
  modalselect.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
cont.forEach((c) => {
  c.addEventListener("click", function () {
    overlay.classList.remove("hidden");
    selection_article.forEach((selection) => {
      selection.style.borderColor = "#e4e4e4";
    });
    complete.forEach((c) => {
      c.classList.add("none_selection");
    });
    check.forEach((d) => {
      if (d.checked) {
        let text = collected.innerText.replace(",", "");
        let val_two = backers.innerText.replace(",", "");
        let num_two = Number(val_two);
        let val_progress = progress_bar.getAttribute("value");
        let val_three = Number(val_progress);
        let num = Number(text);
        if (
          d.parentElement.parentElement.parentElement.parentElement.children[1]
            .children[1]
        ) {
          let val_one = Number(
            d.parentElement.parentElement.parentElement.parentElement
              .children[1].children[1].children[0].value
          );
          if (val_one <= 1000) {
            num += val_one;
            if (val_three == 100) {
              val_three = 70;
            }
            val_three += 10;
          }
        }

        num_two += 1;
        collected.innerText = num;
        backers.innerText = num_two;
        progress_bar.setAttribute("value", String(val_three));
      }

      d.checked = false;
    });
    number_input.forEach((n) => {
      n.value = "";
    });
  });
});
check.forEach((c) => {
  c.addEventListener("input", function () {
    if (this.checked) {
      let parent = c.parentElement.parentElement.parentElement.parentElement;
      parent.children[1].classList.remove("none_selection");
      parent.nextElementSibling.children[0].classList.add("flex_selection");
      parent.style.borderColor = "hsl(176, 50%, 47%)";
    }
  });
});
