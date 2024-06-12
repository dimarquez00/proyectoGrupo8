var imgPath = document.getElementById("path").attributes.path.value;
var hrefPath = document.getElementById("path").attributes.hrefPath.value;

var cad = `
<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
      <div class="container-fluid" id="barraMenu">
        <a class="navbar-brand headerText pt-0 pb-0" href="../index.html">
          <img src="${imgPath}/logoVialKids.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top headerText">VialKids</a>
        <button id="menuToggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav menu">
                <li class="nav-item">
                  <a  class="nav-link linksMenu" aria-current="page" href="${hrefPath}index.html">Inicio</a>
                </li>
                <li class="nav-item">
                  <a  class="nav-link linksMenu" href="${hrefPath}integrantes.html">Integrantes</a>
                </li>
                <li class="nav-item">
                  <a  class="nav-link linksMenu" href="${hrefPath}avances.html">Avances</a>
                </li>
                <li class="nav-item">
                  <a  class="nav-link linksMenu" href="${hrefPath}juegos.html">Juegos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
`

document.getElementById("idheader").innerHTML = cad; 


var foot = `
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                VialKids
              </h6>
              <p>
                Educación vial para un futuro seguro.
              </p>
            </div>
  
            <hr class="w-100 clearfix d-md-none">
  
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-center">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                Links
              </h6>
              <p>
                <a class="text-white" href="./index.html">Inicio</a>
              </p>
              <p>
                <a class="text-white" href="./integrantes.html">Integrantes</a>
              </p>
              <p>
                <a class="text-white" href="./avances.html">Avances</a>
              </p>
              <p>
                <a class="text-white" href="./juegos.html">Juegos</a>
              </p>
            </div>
  
            <hr class="w-100 clearfix d-md-none">
  
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
              <h6 class="text-uppercase mb-4 font-weight-bold">Integrantes</h6>
              <p>Diego Marquez</p>
              <p>Camila Nani</p>
              <p>Ian Franco Rebuffo</p>
              
            </div>
          </div>
        </section>
  
        <hr class="my-3">

        <div class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-12 col-lg-12 text-center text-md-center">
              <div class="p-2">
                @ Derechos reservados - Sitio desarrollado para uso educativo - Diseño y desarrollo Web - UADE - 2024
              </div>
            </div>
          </div>
        </div>
      </div>
`

document.getElementById("idfooter").innerHTML = foot; 