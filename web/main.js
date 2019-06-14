const clock = document.getElementById("clock");
const date = document.getElementById("date");
const colorChanegeBtn = document.getElementsByClassName("colorChanegeBtn");
const stickyNote = document.getElementById("stickyNote");
const updateBtn = document.getElementById("updateBtn");

const start = () => {
  fetchNote();
  setInterval(displayClockDate, 1000);
  changeTextareaColor();
};

//color changing of sticky
const changeTextareaColor = () => {
  const formControl = document.getElementsByClassName("form-control")[0];
  colorChanegeBtn[0].addEventListener("click", () => {
    formControl.style.background = "#f8e07c";
  });
  colorChanegeBtn[1].addEventListener("click", () => {
    formControl.style.background = "#b2e1f1";
  });
  colorChanegeBtn[2].addEventListener("click", () => {
    formControl.style.background = "#f87bb4";
  });
};

//time & date clock
const displayClockDate = () => {
  const time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let day = time.getDate();
  let month = time.getMonth() + 1; //months from 1-12
  let year = time.getFullYear();
  let en = "AM";

  //correcting clock formation
  en = hrs > 12 ? "PM" : en;
  hrs = hrs > 12 ? hrs - 12 : hrs;
  hrs = hrs > 12 ? hrs - 12 : hrs;
  hrs = hrs == 0 ? 12 : hrs;
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  //updating hard-coded clock and date area
  clock.innerText = hrs + ":" + mins + ":" + secs + " " + en;
  date.innerText = "" + day + "-" + month + "-" + year;
};

const fetchNote = () => {
  eel.fetchNote("Notes Loaded on sticky")(notes => {
    stickyNote.value = notes;
  });
};

const updateNote = () => {
  eel.updateNote(stickyNote.value)(message => {
    console.log(message);
  });
};

//update by clicking update btn
updateBtn.addEventListener("click", e => {
  updateNote();
  e.preventDefault();
});

//update by press enter btn
document.getElementById("stickyNote").addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    updateNote();
    e.preventDefault();
  }
});
