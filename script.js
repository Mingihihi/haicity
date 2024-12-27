// preload all the shit
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const additionalMessage = document.querySelector(".additional-message");

setTimeout(() => {
  document.body.classList.add('animation');
}, 250);



// func

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tới công chuyện với bà mày rồi =)))))";
  gif.src =
    "assets/image/gif2.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.min(Math.max(Math.floor(Math.random() * maxX), 0), maxX);
  const randomY = Math.min(Math.max(Math.floor(Math.random() * maxY), 0), maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
