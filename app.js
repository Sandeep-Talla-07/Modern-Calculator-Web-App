const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

let exp = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;

    if (value === "clearAll") {
      exp = "";
      result.innerHTML = "";
    } else if (value == "delete") {
      exp = exp.slice(0, -1);
      result.innerHTML = exp;
    } else if (value === "calculate") {
      try {
        exp = eval(exp).toString();
        result.innerHTML = exp;
      } catch {
        result.innerHTML = "Error";
        exp = "";
      }
    } else {
      exp += value;
      result.innerHTML = exp;
    }
  });
});
