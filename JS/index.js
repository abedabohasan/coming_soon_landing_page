// date counter start
let publishDate = new Date();
publishDate = new Date(
  publishDate.getFullYear() + 1,
  publishDate.getMonth() - 6,
  01
);

let x = setInterval(function () {
  let currentTime = new Date();
  let theRestTime = publishDate - currentTime;

  let months = Math.floor(theRestTime / (1000 * 60 * 60 * 24 * 30));

  let days = Math.floor(
    (theRestTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor(
    (theRestTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((theRestTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((theRestTime % (1000 * 60)) / 1000);

  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
// date counter end
// Email validation start
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// Email validation end
