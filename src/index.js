import "./styles/_main.scss";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/scrollspy";
import StickyFill from "stickyfilljs";
import $ from "jquery";

const stickyElements = document.querySelectorAll(".sticky");
StickyFill.add(stickyElements);

$("#demand-nav a").click(() => {
  $("#demand-nav").collapse("hide");
});
