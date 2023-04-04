//메뉴 마우스오버 효과
// const item = document.querySelector(".item");
// const itemContents = document.querySelector(".item__contents");

// let subToggle = true;
// function show_sub() {
//   if (subToggle) {
//     itemContents.style.height = "120px";
//     subToggle = !subToggle;
//   } else {
//     itemContents.style.height = "0px";
//     subToggle = !subToggle;
//   }
// }

// item.addEventListener("onmouseover", show_sub);

//마우스 hover img src 변경하기
const imgArea = document.querySelector(".special__section-main-thumb > img");
const itemHover = document.querySelectorAll(
  ".special__section-main-content__list > li"
);

itemHover.forEach((el, index) => {
  el.onmouseover = () => {
    imgArea.src = `./images/special_${index + 1}.png`;
  };
});
