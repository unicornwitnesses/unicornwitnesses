const getTemplate = (data, language) => {
	const [path] = window.location.pathname.slice(1).split('.');

	const t = (tag) => data?.[path]?.[tag]?.[language];

	const options = [
		`<option value="en" ${language === 'en' ? 'selected' : ''}>en</option>`,
		`<option value="ru" ${language === 'ru' ? 'selected' : ''}>ru</option>`
	];

	function checkIfMobileDevice () {
		let check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	};

	/**
	 * @returns ID of our presentation
	 */
	function getPresentationID() {
		if (path === 'OurPresentation') {
			//return different ID depends on device of incoming user
			if (checkIfMobileDevice()) {
				return language === 'ru' ? '1GmAlxxmz4ATW7HLRUrFCXXzQIIhiGy5wqL3APUCWDcA' : '1fxFBcuchbN8JKYm_nYdUt2N5NjdLa8BTdl3DqeUQFVQ';
			} else {
				return language === 'ru' ? '1hYAt7WJp3uKqURfzmZ4Ge6rQVQbtX0IJiEn-mml2oQ8' : '1JIx6MYJza63QV-AWdYLx2jYNxphsebE-DFBcoy-QPSM';
			}
		}

		if (path === 'TranslationSystem') {
			return language === 'ru' ? '1WPz6Cg5IIi1SPI5UXyTs9nx58InfRljx9gs-UGElb5A' : '1E3TLuHTWC6IPtr-RaqXn61n-6Gwuy3bHzvSyRaHthFw'
		}
	}

	function getHeight() {
		if (checkIfMobileDevice()) {
			return 'calc(140vw)'
		}
		return '100%';
	}

	const html = `
	<div class="container">
		<header class="header" style="display:grid;row-gap:30px;">
			<div class="change-land-wrapper" style="text-align:right;float:right;">
				<select class="change-lang">
					${options.join()}
				</select>
			</div>
			<h1><a style="color:#fff;">${t('presentation-ecosystem-h1')}</a></h1>
		</header>

		<main class="main">
			<section>
				<h2 class="subtitle">${t('h2')}</h2>
				<div class="presentation-container" style="height: ${getHeight()};">
                    <iframe style="border-radius:5px;" src="https://docs.google.com/presentation/d/${getPresentationID()}/embed?rm=maximal"
                            frameborder="0"
                            width="100%"
                            height="100%">
                    <p>It appears your web browser doesn't support iframes.</p>
                    </iframe>
        </div>
		</section>
		</main>

		<footer class="footer">
			<div>
				<h2 style="margin: 100px 0 20px 0;font-size: 32px;">With the support of the  <a href="https://unicornwitnesses.com" target="_blank">unicornwitnesses.com</a> community</h2>
			</div>
			<div class="col-sm-3">
				<div class="footer-presentaion">
					<p>CDO (chief visionary officer) Olia Nayda <a class="bi bi-box-arrow-right text-light p-2" href="http://olianayda.com"
						target="_blank">olianayda.com</a></p>
                    <p>Digital product designer Nikita Khristenko CBT psychologist <a class="bi bi-box-arrow-right text-light p-2" href="https://nikitakhristenko.com"
						target="_blank">nikitakhristenko.com</a></p>
                    <p>CVO Chief visionary officer Aleksei Dolgih Scout VC <a class="bi bi-box-arrow-right text-light p-2" href="http://alexdolbun.com"
						target="_blank">alexdolbun.com</a></p>
					<p>Digital product developer Ivan Ushmorov Senior <a class="bi bi-box-arrow-right text-light p-2" href="https://usmrv.com"
						target="_blank">usmrv.com</a></p>
                    <p>Digital product developer Ivan Ushmorov <a class="bi bi-box-arrow-right text-light p-2" href="https://usmrv.com"
						target="_blank">usmrv.com</a></p>
					<p>Digital product developer Aleksandr Verevkin <a class="bi bi-box-arrow-right text-light p-2" href="https://alexandrverevkin.com/"
						target="_blank">alexandrverevkin.com</a></p>
					<p>Digital product developer Maxim Litvinov <a class="bi bi-box-arrow-right text-light p-2" href="https://maximlitvinov.me"
						target="_blank">maximlitvinov.me</a></p>
                    <p>
                    A tribute to those who left us (they stayed in the community but left the core)
                    </p>
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
