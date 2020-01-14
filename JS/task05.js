const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', handleInputChange )

function handleInputChange(event) {
 if (event.currentTarget.value.length > 0) {
      output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "незнакомец";
  }}