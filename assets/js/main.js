/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 



var a = document.querySelectorAll("a:not(.cerrar)");
if(a && a.length > 0){ //Validación 
  /*
  Una vez que tenemos todo nuestro Array del querySelector, procedemos a iterarlo.
  Le asignamos el evento onclick a cada elemento iterado.
  Dentro del evento verificamos la existencia de la clase; seleccion, en dado caso de NO encontrarla, entonces le agregamos esa clase mediante la propiedad className. Ahora como método alternativo (y por si algo ocurriera) si ya tiene la clase selección, entonces la reemplazamos por nada,vacio, etc. Y al final ejecutamos la funcion llamada z.
  */ 
  a.forEach((aa)=>{ aa.onclick = ()=> ( aa.className =  aa.className.search(/seleccion/g) <0 ? aa.className+" seleccion" : aa.className.replace(/seleccion/g,"") )&&z() });
}
//Esta funcion z
function z(){
  // Buscamos el elemento a con la clase .cerrar
  var x = document.querySelector("a.cerrar");
  if(x){ //Validación
    //Ahora buscamos todos los elementos que tengan la clase; seleccion. 
    var b = document.querySelectorAll(".seleccion");
    /*Le agregamos el evento click e iteramos los array, al final vamos a reemplazar la clase seleccion por un vacio.*/
    x.onclick = () => (
      b.forEach((aa) =>{
        aa.className = aa.className.replace(/seleccion/g,"")
      })
    );
  }

  
}
