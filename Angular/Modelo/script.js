document.querySelector('#file-label').addEventListener('click', function() {
  document.querySelector('#file-input').click();
});

// Add a JavaScript function to show the name of the selected file
const fileInput = document.querySelector('#file-input');
const fileLabel = document.querySelector('#file-label');
fileInput.addEventListener('change', function() {
  fileLabel.setAttribute('data-file', fileInput.files[0].name);
});