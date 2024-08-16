const makeCircle = (x, y, brushSize, color) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  path.setAttribute("r", (brushSize/2));
  path.setAttribute("cx", x);
  path.setAttribute("cy", y);
  path.setAttribute("fill", color);

  return path;
};
const makeSquare = (x, y, brushSize, color) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  path.setAttribute("width", brushSize);
  path.setAttribute("height", brushSize);
  path.setAttribute("x", x);
  path.setAttribute("y", y);
  path.setAttribute("fill", color);

  return path;
};
const makeCanvas = () => {
  const canvas = document.querySelector("#art");
  canvas.addEventListener("click", (event) => {
    let brush = "";
    const { clientX, clientY } = event;
    const { top, left } = event.target.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const brushType = document.querySelector("#shape input:checked").value;
    const brushSize = document.querySelector("#size input").value;
    const brushColor = document.querySelector("#color input").value;
    if (brushType === "circle") {
      brush = makeCircle(x, y, brushSize, brushColor);
    } else {
      brush = makeSquare(x, y, brushSize, brushColor);
    }
    canvas.append(brush);
  });
};
/**
 * Initialize the application
 */
const init = () => {
  makeCanvas();
};
window.addEventListener("load", init);
