function query (selector) {
    return document.querySelector(selector)
}

function queryAll (selector) {
    return document.querySelectorAll(selector)
}

<script src="script.js"></script>

function markValid(field) {
    clearErrorMsgs(field);
    field.parentNode.classList.remove("input-invalid");
    field.parentNode.classList.add("input-valid");
}