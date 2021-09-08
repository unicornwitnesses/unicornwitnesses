window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('#nav');
	const button = document.querySelector('#nav-toggle');

	const toggle = () => {
		const isExpanded = menu.getAttribute('aria-expanded');
		if (isExpanded) {
			menu.removeAttribute('aria-expanded');
		} else {
			menu.setAttribute('aria-expanded', 'true');
		}
	};

	button.addEventListener('click', toggle);
});
