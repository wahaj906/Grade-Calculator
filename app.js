let gradecheck = document.querySelector("#grade_check");
let totalmarks = document.querySelector("#total_marks");
let obtainmarks = document.querySelector("#obtain_marks");
let showgrade = document.querySelector("#result");

gradecheck.addEventListener("submit", (event) => {
  event.preventDefault();

  let user_totalmarks = totalmarks.value;
  let user_obtainmarks = obtainmarks.value;
  let percentage = (user_obtainmarks / user_totalmarks) * 100;
  if (percentage >= 80) {
    showgrade.innerText = "Congratulations ! Your Grade is A+ ";
  } else if (percentage >= 70) {
    showgrade.innerText = "Congratulations ! Your Grade is A ";
  } else if (percentage >= 60) {
    showgrade.innerText = "Your Grade is B";
  } else if (percentage >= 50) {
    showgrade.innerText = "Your Grade is C";
  } else if (percentage >= 40) {
    showgrade.innerText = "Your Grade is D ";
  } else {
    showgrade.innerText = "You are Fail ";
  }
});