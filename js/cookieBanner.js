window.addEventListener('DOMContentLoaded', () => {
	if (window.document.cookie.includes('cookie-accepted=true')) {
		return;
	}

	const cookieBanner = document.createElement('div');
	cookieBanner.classList.add('cookie-banner');
	cookieBanner.innerHTML = `
		<div class="cookie-banner__container">
			<p class="cookie-banner__text">
				We use cookies for analytics and software improvements. By continuing to use the site, you agree to the Cookie Policy, Personal Data Processing and Privacy Policy.
				<a href="#">Learn more</a>
			</p>
			<button class="cookie-banner__button">Accept</button>
		</div>
	`;

	window.document.body.append(cookieBanner);

	const cookieBannerButton = cookieBanner.querySelector('.cookie-banner__button');

	cookieBannerButton.addEventListener('click', () => {
		cookieBanner.remove();
		window.document.cookie = 'cookie-accepted=true; max-age=31536000';
	});
});
