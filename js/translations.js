const getTranslations = async () => {
	const response = await fetch('https://muteit-web-multi-language-db.maximlitvinov.workers.dev');
	const translations = await response.json();
	return translations;
};

const translations = {
	"presentation-ecosystem-h1": {
		"ru": "Свидетели Единорога преглашает партнеров для захвата международного рынка, мы привлекаем фондирование с которым перевернем экосистемы ESG индустрии климата и семейного здравоохранения",
		"en": "Unicorn Witnesses invites partners to capture the international market, we attract funding with which to reshape the ESG ecosystem of the climate and family healthcare industry",
	},
	"presentation-url-content": {
		"ru": "./assets/Unicorn-witnesses-pitch_ru.pdf",
		"en": "./assets/Unicorn-witnesses-pitch_eng.pdf",
	},
	"h2": {
		"ru": "Команда при поддержке Unicorn Witnesses представляет вам экосистему в которую вы можете вступить или с удовольствием вложить 750.000$ за 5% при оценке в 15m$",
		"en": "The teammates, supported by Unicorn Witnesses, brings you an ecosystem that you can join or be happy to invest $750,000 for 5% at a $15m valuation",
	},
};
