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

    
    function sendForm(elem, numElem) {
        let input = elem.getElementsByTagName('input');
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            let formInputTwo = elem.getElementsByTagName('input');
            let flag = false;
            
                if (formInputTwo[numElem].value.replace(/\D/g, "").length > 10 ) {
                    flag = true;
                }  else {
                    flag = false;
                }

            if (flag) {
                elem.appendChild(statusMessage);                

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

        popapClose.addEventListener('click', function () {

            statusMessage.innerHTML = '';
    
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
    
        });
    }

    sendForm(form, 0);
    sendForm(formCont, 1);



    
}

module.exports = form;