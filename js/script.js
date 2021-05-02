let form = document.querySelector(".js-form");
let formAmount = document.querySelector(".js-form__amount");
let formCurrency = document.querySelector(".js-form__currency");
let buttonSubmit = document.querySelector(".js-form__buttonSubmit");
let buttonReset = document.querySelector(".js-form__buttonReset");
let formResult = document.querySelector(".js-from__result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let EUR = 4.56;
    let USD = 3.76;
    let GBP = 5.23;

    let amountPLN = formAmount.value;
    let currency = formCurrency.value;
    let result;

    switch (currency) {
        case "EUR":
            result = (amountPLN / EUR);
            currencyName = "EUR";
            break;

        case "USD":
            result = (amountPLN / USD);
            currencyName = "USD";
            break;

        case "GBP":
            result = (amountPLN / GBP);
            currencyName = "GBP";
            break;
    }

    formResult.innerText = `${result.toFixed(2)} ${currencyName}.`;
});

form.addEventListener("reset", () => {

    console.log('Formularz został zresetowany');

});