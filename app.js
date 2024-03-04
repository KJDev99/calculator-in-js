let num = document.querySelectorAll(".num1");
let ans = document.querySelector(".num h4");
let clear = document.querySelector(".clear");
let icon = document.querySelectorAll(".icon");
let Acc = document.querySelector(".Acc");
let foiz = document.querySelector(".foiz");
clear.addEventListener("click", () => {
  location.reload();
});
Acc.addEventListener("click", () => {
  ans.innerHTML *= -1;
});
foiz.addEventListener("click", () => {
  ans.innerHTML /= 100;
});
let agent = true;
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", () => {
    ans.innerHTML == 0
      ? (ans.innerHTML = +ans.innerHTML + +num[i].innerHTML)
      : (ans.innerHTML += num[i].innerHTML);
  });
}
let num1 = 0;
let num2 = 0;
let j = 0;
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    if (icon[i].innerHTML != "=") {
      num1 = ans.innerHTML;
      ans.innerHTML = 0;
      j = i;
    } else {
      num2 = ans.innerHTML;
      switch (j) {
        case 0:
          ans.innerHTML = num1 / num2;
          break;
        case 1:
          ans.innerHTML = num1 * num2;
          break;
        case 2:
          ans.innerHTML = num1 - num2;
          break;
        case 3:
          ans.innerHTML = +num1 + +num2;
          break;
      }
    }
  });
}

window.addEventListener("keydown", (e) => {
  for (let i = 9; i >= 0; i--) {
    if (e.keyCode == i + 96) {
      if (ans.innerHTML == "0.") {
        ans.innerHTML += i;
      } else if (ans.innerHTML == 0) {
        ans.innerHTML = +ans.innerHTML + +i;
      } else {
        ans.innerHTML += i;
      }
    }
  }

  switch (e.keyCode) {
    case 8:
      ans.innerHTML = Math.floor(ans.innerHTML / 10);
      break;
    case 27:
      e.preventDefault();
      location.reload();
      break;
  }
  if (
    e.keyCode == 111 ||
    e.keyCode == 106 ||
    e.keyCode == 107 ||
    e.keyCode == 109
  ) {
    num1 = ans.innerHTML;
    ans.innerHTML = 0;
    j = e.keyCode;
  }
  if (e.keyCode == 13) {
    num2 = ans.innerHTML;
    switch (j) {
      case 111:
        ans.innerHTML = num1 / num2;
        break;
      case 106:
        ans.innerHTML = num1 * num2;
        break;
      case 109:
        ans.innerHTML = num1 - num2;
        break;
      case 107:
        ans.innerHTML = +num1 + +num2;
        break;
    }
  }
  if (e.keyCode == 110 && agent) {
    ans.innerHTML += ".";
    console.log(ans.innerHTML);
    console.log("test");
    agent = false;
  }
});
