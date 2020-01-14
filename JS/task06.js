const input = document.querySelector("#validation-input");
input.onblur = function() {
  if (String(input.value.length) === input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove('invalid')
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid")
  }
};