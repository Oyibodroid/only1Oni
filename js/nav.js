
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it


function burger() {
    document.getElementById("burger").classList.toggle("open");
}



function myForm() {
    document.getElementById("drop-form").classList.toggle("drop");
}

window.onclick = function (event) {
    if (!event.target.matches('button')) {
        var dropdowns = document.querySelector("#drop-form");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

