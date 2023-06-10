const fileInputs = document.querySelectorAll('input[type="file"]');

fileInputs.forEach(input => {
	input.addEventListener('change', () => {
		const file = input.files[0];
		if (file) {
			const fileName = file.name;
			input.previousSibling.textContent = fileName;
			input.parentNode.setAttribute('data-file', fileName);
		}
	});
});
