let count = 0;

function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = `This paragraph ${count} was added with JavaScript!`;
    const body = document.querySelector("body");
    body.appendChild(paragraph);
    count++;
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    createParagraph()
});