const navbar = document.querySelector('.nav-bar');

navbar.innerHTML = `
       <div class="d-lg-block d-none ">
            <div>
                <nav class="navbar navbar-expand-md fixed-top navbar-color pt-3">
                    <div class="container-fluid">
                        <a class="navbar-brand  mx-auto" href="index.html">
                            <span class="ico"><i class="ico-color bi bi-joystick fs-1 me-1 "></i></span>
                            <p class="d-inline-block logo">GAMES4U</p>
                        </a>
                    </div>
            </div>
            </nav>
        </div>
        <div class="d-lg-none d-block">
            <nav class="navbar navbar-dark text-info fixed-top" style="background-color:#381754ff ;">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="index.html"> <span><i class="ico-color bi bi-joystick display-5 "
                                style="font-size: 1.9em;"></i></span>
                        <div class="d-inline-block logo-footer display-5 " style="color: #cc08a2ff;">GAMES4U</div>
                    </a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header bg-dark">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><a class="navbar-brand"
                                    href="index.html"> <span><i class="ico-color bi bi-joystick display-5 "
                                            style="font-size: 1.9em;"></i></span>
                                    <div class="d-inline-block logo-footer display-5 " style="color: #cc08a2ff;">GAMES4U
                                    </div>
                                </a></h5>
                            <button type="button" class="btn-close  text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body bg-dark">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active text-info" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="spelgenres.html">Spelgenres</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="spellen.html">Spellen</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="overons.html">Over ons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Contact.html">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
`