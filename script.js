let name = document.querySelector("#name");
let nameText = name.value.trim()

function markValid (field) {
    clearErrorMsgs(field)
    field.parentNode.classList.remove('input-invalid')
    field.parentNode.classList.add('input-valid')
  }
  
  function markInvalid (field, errorMsg) {
    field.parentNode.classList.remove('input-valid')
    field.parentNode.classList.add('input-invalid')
  }

  if (nameText === "") {
      markInvalid (nameText)
  }

  query("#parking-form").addEventListener("submit", function(event)) {
      document.querySelector("#parking-form")
  }