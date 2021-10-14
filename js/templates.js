const getTemplate = (data, language) => {
	const t = (tag) => data?.[tag]?.[language];

	const options = [
		`<option value="en" ${language === 'en' ? 'selected' : ''}>EN</option>`,
		`<option value="ru" ${language === 'ru' ? 'selected' : ''}>RU</option>`
	];

	const html = `
	<div class="container">
		<header class="header">
			<div class="row">
			<div class="col-md-1">
							<select class="change-lang mt-2"
								style="color: #fff; background: #000; border: solid #fff 2px ; border-radius: 10px; text-align: right;">
								${options.join()}
							</select>
						</div>
				
			</div>

			<div class="container header-content">
				<div class="row">
					<div class="col-md-12">
						<h1><a style="color:#fff;">${t('presentation-ecosystem-h1')}</a></h1>
					</div>
				</div>
			</div>
		</header>

		<main class="main">
			<section>
				<h2 style="color:#fff;">${t('h2')}</h2>
				<div class="container">
                <iframe src="${t('presentation-url-content')}" 
                    width="100%" height="1200" allowfullscreen>
                </iframe>
            </div>
    </div>
			</section>

			
		</main>

		<footer class="footer row">
			<div class="footer-presentaion">
				<a class="footer-presentaion" href="https://unicornwitnesses.com" target="_blank">unicornwitnesses.com</a>
			</div>
			<div class="col-sm-3">
				<div class="footer-presentaion">
					<a class="bi bi-box-arrow-right text-light p-2" href="http://olianayda.com"
						target="_blank">olianayda.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="http://alexdolbun.com"
						target="_blank">alexdolbun.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://alexandrverevkin.com/"
						target="_blank">alexandrverevkin.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://maximlitvinov.me"
						target="_blank">maximlitvinov.me</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://juliaudovichenko.com"
						target="_blank">juliaudovichenko.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://evgenykhristenko.com"
						target="_blank">evgenykhristenko.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://nikitakhristenko.com"
						target="_blank">nikitakhristenko.com</a>
				</div>
			</div>
			<div class="col-sm-3">
				<a class="bi bi-telegram" href="https://t.me/muteitapp" target="_blank">t.me/muteitapp</a>
			</div>
		</footer>
	</div>

	
	`;

	return html;
};
