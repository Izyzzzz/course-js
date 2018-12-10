function scroll() {
    //Плавный скрол по сайту при клике по меню

    let linkMenu = document.querySelectorAll('[href^="#"]'),
        speed = 0.7;
    for (let i = 0; i < linkMenu.length; i++) {
        linkMenu[i].addEventListener('click', function (event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.href.replace(/[^#]*(.*)/, '$1'),
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));
                    let rill = r - 70;
                    document.documentElement.scrollTo(0, rill);
                if (rill != widthTop + toBlock) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }

        }, false);
    }
}

module.exports = scroll;