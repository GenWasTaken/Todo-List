import animatedButton from './homeButtonAnimation.js';

export default (function toggleSidebar() {
    const content = document.querySelector(".content");
    const sidebar = document.getElementById("sidebar");
    const sidebarContent = document.getElementById("sidebarContent");
    const button = document.getElementById("sidebarButton");

    sidebarContent.style.display = "none";
    button.addEventListener('click', () => {
        if (sidebar.style.width === "0%" || sidebar.style.width === "") {
            sidebar.style.width = "100%";
            content.style.gridTemplateColumns = "1fr 4fr";
            sidebarContent.style.display = "flex";
        } else {
            sidebar.style.width = "0%";
            content.style.gridTemplateColumns = "0fr 4fr";
            sidebarContent.style.display = "none";
        }
    });
})();
