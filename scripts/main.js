const login_header = document.querySelector("#login-header");
const login_block = document.querySelector(".login-block");

// To display the Login tab
function display_login_tab() {
  login_block.classList.toggle("display-login-tab");
  login_header.querySelector("a").classList.toggle("login-button-active");
}

login_header.addEventListener("click", () => {
  display_login_tab();
});
setTimeout(display_login_tab, 3000);

// Carousell effect for the quotations

window.onload = function() {
  setTimeout(move_quotes, 10000);
};

const carousel = document.querySelector(".quote-wrapper");
const quotes = Array.from(carousel.children);
const quote_width = quotes[0].getBoundingClientRect().width;

// Set each Slide/quotes Position dynamically
quotes.forEach((quote, index) => {
  quote.style.left = quote_width * index + "px";
});

//moving to the next slides/quotes

const move_to_quote = (carousel, current_quote, target_quote) => {
  carousel.style.transform = "translateX(-" + target_quote.style.left + ")";
  current_quote.classList.remove("current-quote");
  target_quote.classList.add("current-quote");
};
function move_quotes() {
  let current_quote = carousel.querySelector(".current-quote");
  let next_quote = current_quote.nextElementSibling;
  if (next_quote === null) next_quote = carousel.querySelector(".first-slide");
  move_to_quote(carousel, current_quote, next_quote);
  setTimeout(move_quotes, 10000);
}

// below: functionality for buttons that move quotes

// slide_dots.addEventListener("click", e => {
//   const target_dot = e.target.closest("button");

//   if (!target_dot) return;

//   const current_quote = carousel.querySelector(".current-quote");
//   const current_dot = slide_dots.querySelector(".current-dot");
//   const targetIndex = dots.findIndex(dot => dot === target_dot);
//   const target_quote = quotes[targetIndex];

//   move_to_quote(carousel, current_quote, target_quote);
// });
