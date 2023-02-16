let profileMenu = document.getElementById("profileMenu");
// console.log(profileMenu);
function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

let sidebarActivity = document.getElementById("sidebar-activity");
let showMoreLink = document.getElementById("showMoreLink");
function toggleActivity() {
  sidebarActivity.classList.toggle("open-activity");
  if (sidebarActivity.classList.contains("open-activity")) {
    showMoreLink.innerHTML = "show less <b>-</b>";
  } else {
    showMoreLink.innerHTML = "show more <b>+</b>";
  }
}
