let btnSidebar = document.querySelector(".sidebar-toggle");
let sidebarBox = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn")


btnSidebar.addEventListener("click", () => {
    sidebarBox.classList.toggle("barShown");
})

closeBtn.addEventListener("click", () => {
    sidebarBox.classList.remove("barShown");
})