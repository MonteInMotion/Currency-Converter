{
    const calculatorResult = (amountPLN, currency) => {

        const EUR = 4.56;
        const USD = 3.76;
        const GBP = 5.23;

        switch (currency) {
            case "EUR":
                return (amountPLN / EUR);

            case "USD":
                return (amountPLN / USD);

            case "GBP":
                return (amountPLN / GBP);
        }
    };

    const updateResultText = (result, currencyName) => {
        const formResult = document.querySelector(".js-form__result");
        formResult.innerText = `${result.toFixed(2)} ${currencyName}.`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const formAmount = document.querySelector(".js-form__amount");
        const formCurrency = document.querySelector(".js-form__currency");

        const amountPLN = formAmount.value;
        const currency = formCurrency.value;
        const currencyName = formCurrency.value

        const result = calculatorResult(amountPLN, currency);
        updateResultText(result, currencyName);
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

    //Function reset is not working for the js-form__result class.

    const resetForm = () => {
        const resetResult = "."

        form.addEventListener("reset", (updateResultText) => {
            updateResultText.innerText = `${resetResult}`;
            console.log('Formularz został zresetowany');
        });

        resetForm();
    };
}