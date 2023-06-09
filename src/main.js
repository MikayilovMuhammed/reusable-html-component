let headerA = document.querySelectorAll("header ul a");
let h2 = document.querySelector("h2");

headerA.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
    h2.textContent = e.target.textContent;
  })
);
