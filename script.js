let btn = document.querySelector(".btn-calc");
let result = document.querySelector(".result");

function calc() {
    let amount = Number(document.querySelector(".value1").value);
    let tip = Number(document.querySelector("select").value);

    if (amount <= 0) {
        result.textContent = "Please enter a valid amount";
        return;
    }

    let total = amount - (amount * tip / 100);
    result.textContent = `Total: $${total.toFixed(2)}`;
}

btn.addEventListener("click", calc);





