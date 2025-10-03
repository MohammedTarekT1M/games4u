const footer = document.querySelector('.footer');

footer.innerHTML = `
<div class="d-none d-lg-block">
<footer class="navbar-color fixed-bottom p-2 fonts size">
                <div class="container-fluid">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col  text-white " >
                            Tinwerf 16 | 06 12345678 | <a class="text-decoration-none text-white onhover"
                                HREF="mailto:example@gmail.com">example@gmail.com</a> | <a href="contact.html"
                                class="text-white text-decoration-none onhover">Contact</a>
                        </div>
                        <div class="col text-end me-5">
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row text-white">
                        <div class="col">&copy; SuperNova team</div>
                        <div class="col text-end me-3 mb-3"> <a href="index.html">
                                <span><i class="ico-color bi bi-joystick display-5 fs-5"></i></span>
                                <div class="d-inline-block logo-footer display-5 fs-5">GAMES4U</div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
             </div>`;

const footer2 = document.querySelector('.footer2');

footer2.innerHTML = `

 <div class="d-block d-lg-none fonts size">
        <footer class="navbar-color p-3">
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="col-12  text-white">
                        Tinwerf 16 | 06 12345678 | <a class="text-decoration-none text-white onhover"
                            HREF="mailto:example@gmail.com">example@gmail.com</a> | <a href="contact.html"
                            class="text-white text-decoration-none onhover">Contact</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row text-center mt-3">
                    <div class="col-6 text-white">&copy; SuperNova team</div>
                    <div class="col-6"> <a href="index.html">
                            <span><i class="ico-color bi bi-joystick display-5 fs-5"></i></span>
                            <div class="d-inline-block logo-footer display-5 fs-5">GAMES4U</div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

`