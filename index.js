const makeCircle = (x, y) => {
  const circleColor = "red";
  const circleSize = 20;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  path.setAttribute("r", circleSize);
  path.setAttribute("cx", x);
  path.setAttribute("cy", y);
  path.setAttribute("fill", circleColor);

  return path;
};
const makeSquare = (x, y) => {
  const squareLength = 20;
  const squareColor = "blue";
  const path = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  path.setAttribute("width", squareLength);
  path.setAttribute("height", squareLength);
  path.setAttribute("x", x);
  path.setAttribute("y", y);
  path.setAttribute("fill", squareColor);

  return path;
};
/**
 * Initialize the application
 */
const init = () => {
  const el = document.querySelector("#art");
  el.addEventListener("click", (event) => {
    const { clientX, clientY } = event;
    const { top, left } = event.target.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    el.append(makeCircle(x, y));
    el.append(makeSquare(x, y));
  });
};
window.addEventListener("load", init);
