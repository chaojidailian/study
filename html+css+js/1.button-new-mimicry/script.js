let box = document.querySelector(".box");
box.style.setProperty("--move","20px");
let btns = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",function(e) {
    // 弊端：只能实现两个按钮移动，第三个按钮之后会向右移动20px+150%。
    // 解决：判断i是否是最后一个元素，否则固定右移距离；相反判断i是否是第一个元素，否则固定左移。
    box.style.setProperty("--move",`calc(20px + ${i * 50}%)`);
    // 弊端：需要重新为元素添加类名。
    // 解决：为特定点击元素添加active和移除之前的元素的active
    resetBtn(btns);
    setTimeout(() => {
      e.target.classList.add("active");
    }, 500);
    box.style.setProperty("--rotate",`${i === 0? -10: 10}deg`);
    box.classList.add("box-rotate");
    setTimeout(() => {
      box.classList.remove("box-rotate");
    }, 500);
  },false)
}
function resetBtn(btns) {
  for (let i = 0; i < btns.length; i++) {
    setTimeout(() => {
      btns[i].className = "btn"
    }, 100);
  }
}