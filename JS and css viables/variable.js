	const  inputs = document.querySelectorAll('.controls input');

	function changes(){
		const suffix = this.dataset.sizing ||  '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}

	inputs.forEach(input => input.addEventListener('change',changes));
	inputs.forEach(input => input.addEventListener('mousemove',changes));