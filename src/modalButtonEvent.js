function openTaskModal() {
    console.log("MODAL BUTTON CLICKED");
    const modalContainer = document.getElementById("modalContainer");

    if(modalContainer.style.display === "none" || modalContainer.style.display === ""){
        modalContainer.style.display = "flex";
    }
}

function closeTaskModal(){
    console.log("CLOSE BUTTON CLICKED");
    const modalContainer = document.getElementById("modalContainer");
    const modalContent = document.querySelector(".modal-content");

    if(modalContainer.style.display === "flex"){
        modalContainer.style.display = "";
        clearForumInput();
    }
}

function clearForumInput(){
    const titleInput = document.getElementById("fTitle");
    const descInput = document.getElementById("fDesc");

    titleInput.value = "";
    descInput.value = "";
}

export {openTaskModal, closeTaskModal, clearForumInput};