function form() {
    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formCont = document.querySelector('#form'),
        statusMessage = document.createElement('div'),
        popapClose = document.querySelector('.popup-close');

    statusMessage.classList.add('status');


    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            let formInput = elem.getElementsByTagName('input');
            let flag = false;
            for (let i = 0; i < formInput.length; i++) {
                console.log(formInput[i].value.replace(/\D/g, "").length);
                if (formInput[i].value.replace(/\D/g, "").length > 10) {
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                elem.appendChild(statusMessage);

                let input = elem.getElementsByTagName('input');

                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                        request.addEventListener('readystatechange', function () {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4 && request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        });
                        request.send(data);
                    });
                }

                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput);
            } else {
                alert('Слишком мало символов.');
            }

        });
    }

    sendForm(form);
    sendForm(formCont);



    popapClose.addEventListener('click', function () {

        statusMessage.innerHTML = '';

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

    });
}

module.exports = form;