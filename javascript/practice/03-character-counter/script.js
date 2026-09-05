const textInput = document.getElementById('textInput');
const characterCount = document.getElementById('characterCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    const count = text.length;
    characterCount.textContent = `Character Count: ${count}`;
});
