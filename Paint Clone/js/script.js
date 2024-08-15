// Selector
const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  isfillColorChecked = document.querySelector("#fill-color"),
  sizeSlider = document.querySelector("#size-slider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#color-picker"),
  clearBtn = document.querySelector(".clear-canvas"),
  saveBtn = document.querySelector(".save-img");

//Get Canvas contex and variables
let ctx = canvas.getContext("2d"),
  isDraw = false,
  selectedTool = "brush",
  prevMouseX,
  prevMouseY,
  snapshot,
  selectedColor = "#000";

//SET CANVAS BACKGROUND-COLOR
const setCanvasBackgroundColor = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};

//Window Load
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackgroundColor();
});

//DRAWING
const drawing = (e) => {
  if (!isDraw) return;
  ctx.putImageData(snapshot, 0, 0);

  switch (selectedTool) {
    case "eraser":
      ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    case "brush":
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      break;
    case "rectangle":
      drawRectangle(e);
      break;
    case "triangle":
      drawTriangle(e);
      break;
    case "circle":
      drawCircle(e);
      break;
  }
};

//function of drawing shapes
const drawRectangle = (e) => {
  isfillColorChecked.checked
    ? ctx.fillRect(
        e.offsetX,
        e.offsetY,
        prevMouseX - e.offsetX,
        prevMouseY - e.offsetY
      )
    : ctx.strokeRect(
        e.offsetX,
        e.offsetY,
        prevMouseX - e.offsetX,
        prevMouseY - e.offsetY
      );
};

//Draw CIRCLE
const drawCircle = (e) => {
  ctx.beginPath();
  const radius =
    Math.sqrt(Math.pow(prevMouseX - e.offsetX, 2)) +
    Math.pow(prevMouseY - e.offsetY, 2);
  ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
  if (isfillColorChecked.checked) {
    ctx.fillStyle = "black";
    ctx.fill();
  }
  ctx.stroke();
};

const drawTriangle = (e) => {
  ctx.beginPath();
  console.log(prevMouseX, prevMouseY);
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  if (isfillColorChecked.checked) {
    ctx.fillStyle = "black";
    ctx.fill();
  }
  ctx.stroke();
};

//START DRAWING
const startDraw = (e) => {
  isDraw = true;
  ctx.beginPath();
  ctx.lineWidth = sizeSlider.value;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

//END DRAWING
const endDraw = () => {
  isDraw = false;
};

//ADD EVENT LISTENER TO BUTTONS
toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
  });
});

// Add Event to Color Buttons
colorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");
    const bgColor = window
      .getComputedStyle(btn)
      .getPropertyValue("background-color");
    selectedColor = bgColor;
  });
});

colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setCanvasBackgroundColor();
});

saveBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  const dataURL = canvas.toDataURL();
  link.href = dataURL;
  link.click();
});

//ADD EVENT LISTENER TO CANVAS MOVING
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDraw);
