populateHamburgerMenu();

function openProjectPopup(projectId) {
    if (document.getElementsByClassName('window active').length > 0) {
        closeProjectPopup();
    }

    let idClassSelector = `#${projectId}.window`;
    let popupTemplate = document.querySelectorAll(idClassSelector)[0];

    let newPopup = document.createElement('div');
    newPopup.setAttribute('class', popupTemplate.getAttribute('class'));
    let popupContent = popupTemplate.content.cloneNode(true);
    newPopup.appendChild(popupContent);

    insertAfter(newPopup, document.getElementsByClassName('portfolio-container')[0]);
    newPopup.setAttribute('class', newPopup.getAttribute('class') + ' active');

    function insertAfter(newNode, afterNode) {
        afterNode.parentNode.insertBefore(newNode, afterNode.nextSibling);
    }
}

function closeProjectPopup() {
    let popup = document.getElementsByClassName('window active')[0];
    popup.parentNode.removeChild(popup);
}

function populateHamburgerMenu() {
    const horizontalMenu = document.getElementsByClassName('navbar__menu--horizontal')[0];
    let verticalMenu = document.getElementsByClassName('navbar__menu--vertical')[0];
    const homeItemIndex = horizontalMenu.children.length-1;
    const homeItemCone = horizontalMenu.children[horizontalMenu.children.length-1].cloneNode(true);
    verticalMenu.appendChild(homeItemCone);
    for (let menuItemIndex = 0; menuItemIndex < homeItemIndex; menuItemIndex++) {
        const menuItemCone = horizontalMenu.children[menuItemIndex].cloneNode(true);
        verticalMenu.appendChild(menuItemCone);
    }
}
