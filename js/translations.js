const getTranslations = async () => {
	const response = await fetch('https://muteit-web-multi-language-db.maximlitvinov.workers.dev');
	const translations = await response.json();
	return translations;
};

const translations = {
	"presentation-ecosystem-h1": {
		"ru": "Партнер, давайте перевернем экосистемы ESG индустрии климата и семейного здравоохранения",
		"en": "Partner, let's disrupt ESG & family env- healthcare industry ecosystems",
	},
	"presentation-url-content": {
		"ru": "./assets/Unicorn-witnesses-pitch_ru.pdf",
		"en": "./assets/Unicorn-witnesses-pitch_eng.pdf",
	},
	"h2": {
		"ru": "Команда при поддержке Unicorn Witnesses представляет вам экосистему в которую вы можете вступить или с удовольствием вложить 700к$",
		"en": "The teammates, supported by Unicorn Witnesses, brings you an ecosystem that you can join or be happy to invest $700k",
	},
};
