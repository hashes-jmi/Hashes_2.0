// window.$ = document.querySelector.bind(document);
// window.$$ = document.querySelectorAll.bind(document);
// open = false;
//
// let toogle_sidenav = function (){
//     $("nav").classList.toggle("open");
//     $("#sidenav-overlay").classList.toggle("overlay-on");
//     $("#sidenav-btn").classList.toggle("sidenav-btn-change");
//     open = !open;
// };
// let init = function(){
//     console.log("sss");
//     $("#sidenav-btn").addEventListener("click", toogle_sidenav);
//     $("#sidenav-overlay").addEventListener("click", toogle_sidenav);
// };
//
// sidenav.init();
// console.log("ok");
function toggleSidenav() {
  console.log("here");
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("#sidenav-overlay").classList.toggle("overlay-on");
  document.querySelector("#sidenav-btn").classList.toggle("sidenav-btn-change");
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#sidenav-btn").addEventListener("click", toggleSidenav);
  document.querySelector("#sidenav-overlay").addEventListener("click", toggleSidenav);
});
