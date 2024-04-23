export default (function animatedButton() {
    const homeBtn = document.getElementById("homeButton");
    const homeIcon = document.getElementById("homeIcon");

    homeBtn.addEventListener('mouseover', () =>{
        homeIcon.classList.remove("fa-envelope");
        homeIcon.classList.add("fa-envelope-open");
    });

    homeBtn.addEventListener('mouseout', () =>{
        homeIcon.classList.remove("fa-envelope-open");
        homeIcon.classList.add("fa-envelope");
    });
})();