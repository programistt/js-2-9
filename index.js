let id = document.querySelector(".id");
let pass = document.querySelector(".pass");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (id.value === "70198" && pass.value === "46190") {
        alert("Siz Mars IT School ga kirdingiz")
    } else {
        alert("ID Yoki Password nototo'g'ri")
    }
});