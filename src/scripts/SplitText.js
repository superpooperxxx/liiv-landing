export class SplitText {
  chars = [];

  constructor(selector) {
    const element = document.querySelector(selector);
    const initialText = element.innerText.split("");

    element.innerText = "";

    if (element) {
      initialText.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;

        this.chars.push(span);
        element.appendChild(span);
      });
    }
  }
}
