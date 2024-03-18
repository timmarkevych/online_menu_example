const searchElements = document.getElementsByClassName("search");
const searchableArray = document.getElementsByClassName("searchable-element");
const menu_category = document.getElementsByClassName("menu-category");

const close_dropdown = document.getElementById("dropdown-mobile-close");
const dropdown = document.getElementById("language-dropdown");

function dropdownClose(){
    dropdown.classList.remove("show")
}

close_dropdown.addEventListener('click', dropdownClose)

// Iterate over each search element
for (let i = 0; i < searchElements.length; i++) {
    searchElements[i].addEventListener("input", searchResult);
}

function searchResult() {
    const searchValue = this.value.toLowerCase();

    for (let i = 0; i < searchableArray.length; i++) {
        const elementText = searchableArray[i].textContent.toLowerCase();

        if (elementText.includes(searchValue)) {
            searchableArray[i].parentElement.parentElement.parentElement.style.display = "flex";
        } else {
            searchableArray[i].parentElement.parentElement.parentElement.style.display = "none";
        }
    }

    for (let k = 0; k < menu_category.length; k++) {
        let category_children = menu_category[k].children;
        let menu_category_check = 0;

        for (let j = 0; j < category_children.length; j++) {
            if (category_children[j].style.display === 'none') {
                menu_category_check++;
            }
        }

        if (menu_category_check === category_children.length - 1) {
            menu_category[k].style.display = 'none';
        } else {
            menu_category[k].style.display = "flex";
        }
    }
}
