function openProjectPopup(projectId) {
    if (document.getElementsByClassName('window active').length > 0) {
        closeProjectPopup();
    }

    let idClassSelector = `#${projectId}.window`;
    console.log(idClassSelector);
    let popupTemplate = document.querySelectorAll(idClassSelector)[0];
    console.log(popupTemplate);

    let newPopup = document.createElement('div');
    newPopup.setAttribute('class', popupTemplate.getAttribute('class'));
    let popupContent = popupTemplate.content.cloneNode(true);
    newPopup.appendChild(popupContent);

    insertAfter(newPopup, document.getElementsByClassName("portfolio-container")[0]);
    newPopup.setAttribute('class', newPopup.getAttribute('class') + ' active');

    function insertAfter(newNode, afterNode) {
        afterNode.parentNode.insertBefore(newNode, afterNode.nextSibling);
    }
}

function closeProjectPopup() {
    let popup = document.getElementsByClassName('window active')[0];
    popup.parentNode.removeChild(popup);
}