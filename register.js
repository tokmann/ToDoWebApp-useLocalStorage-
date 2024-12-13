document.getElementById("choose_log_in").addEventListener("click", () => {
  document.getElementsByClassName("display_choose")[0].style.display = "none";
  document.getElementsByClassName("display_log_in")[0].style.display = "flex";
});

document.getElementById("choose_sign_up").addEventListener("click", () => {
  document.getElementsByClassName("display_choose")[0].style.display = "none";
  document.getElementsByClassName("display_sign_up")[0].style.display = "flex";
});

document.getElementsByClassName("back_button_log_in")[0].addEventListener("click", () => {
  document.getElementsByClassName("display_log_in")[0].style.display = "none";
  document.getElementsByClassName("display_choose")[0].style.display = "flex";
});

document.getElementsByClassName("back_button_sign_up")[0].addEventListener("click", () => {
  document.getElementsByClassName("display_sign_up")[0].style.display = "none";
  document.getElementsByClassName("display_choose")[0].style.display = "flex";
});
