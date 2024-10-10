export class SplitText {
  chars = [];
  words = [];

  constructor(selector) {
    const element =
      typeof selector === "object"
        ? selector
        : document.querySelector(selector);

    const words = element.innerText.split(/(\s+)/);

    if (element) {
      element.innerText = "";

      words.forEach((word) => {
        const wordElement = document.createElement("span");

        // wordElement.style.display = "inline-block";

        const chars = word.split("");

        chars.forEach((char) => {
          const charElement = document.createElement("span");
          charElement.textContent = char;

          if (!!char.trim()) {
            wordElement.style.display = "inline-block";
            charElement.style.display = "inline-block";
          }

          this.chars.push(charElement);
          wordElement.appendChild(charElement);
        });

        this.words.push(wordElement);
        element.appendChild(wordElement);
      });
    }
  }
}
