const btnSidebar = document.querySelector(".sidebar-toggle");
const sidebarBox = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn")


btnSidebar.addEventListener("click", () => {
    sidebarBox.classList.toggle("barShown");
})

closeBtn.addEventListener("click", () => {
    sidebarBox.classList.remove("barShown");
})