

const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement("div");
    entryDiv.className = "single-entry"
    if (entryTextbox.value) {
        entryDiv.innerText = entryTextbox.value;

        entryDiv.style.display = "none";
        entriesSection.appendChild(entryDiv);
        entryTextbox.value = "";

        const displayEntryButton = document.createElement("button");
        displayEntryButton.className = "display-entry-button";
        displayEntryButton.innerText = count;
        entriesNav.appendChild(displayEntryButton);
        count++
        displayEntryButton.addEventListener("click", function () {
            entryDiv.style.display = "block"

        })
    }

}

entryForm.addEventListener("submit", addEntryToDom)