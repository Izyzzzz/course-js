function calk() {
    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        ratio = 1;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {
        (/^[0-9]*?$/.test(this.value)) ? this.defaultValue = this.value: this.value = this.defaultValue;
    });
    restDays.addEventListener('input', function () {
        (/^[0-9]*?$/.test(this.value)) ? this.defaultValue = this.value: this.value = this.defaultValue;
    });

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000 * ratio;

        if (restDays.value == '' || personsSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            animateValue("total", 0, total, 500);
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000 * ratio;

        if (persons.value == '' || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            animateValue("total", 0, total, 500);
        }
    });

    place.addEventListener('change', function () {
        ratio = this.options[this.selectedIndex].value;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;

            let totalA = a * ratio;
            animateValue("total", 0, totalA, 500);
        }
    });

    function animateValue(id, start, end, duration) {
        let current = start;
        let increment = 50;
        let timer = setInterval(function () {
            current += increment;
            document.getElementById(id).innerHTML = current;
            if (current == end || current > end) {
                clearInterval(timer);
            }
        }, 3);
    }
}

module.exports = calk;