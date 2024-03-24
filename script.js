const nativeCheckbox = document.querySelector("#native-input");
const customCheckbox = document.querySelector("#custom-input");

const toggleButton = document.querySelector("#toggle-button");

nativeCheckbox.addEventListener("change", () => {
    customCheckbox.checked = nativeCheckbox.checked;
});
customCheckbox.addEventListener("change", () => {
    nativeCheckbox.checked = customCheckbox.checked;
});

toggleButton.addEventListener("click", () => {
    nativeCheckbox.classList.toggle("visible");
});
