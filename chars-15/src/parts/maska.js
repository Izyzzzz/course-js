function maska() {
        //Maska

        let input = document.querySelectorAll('input[type="tel"]'),
        maska = "+7 (___) ___-____";

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", mask);
    }


    function mask() {
        let i = 0,
            constant = maska.replace(/\D/g, ""),
            inputValue = this.value.replace(/\D/g, "");

        if (constant.length >= inputValue.length) {inputValue = constant;}

        this.value = maska.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < inputValue.length ? inputValue.charAt(i++) : i >= inputValue.length ? "" : a;
        });

    }
}

module.exports = maska;