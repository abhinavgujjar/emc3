//var limitResult = 40; //WRONG


var app = angular.module('emcApp', []);

//services
app.value('limitResults', 20);

app.factory('defaults', function() {
	return {
		flag: '7AiQqse.png'
	}
});


app.factory('placesData', function(defaults) {

	var placesVisited = [{
		name: 'USA',
		continent: 'North America',
		population: 300000,
		flag: 'KRLXcPG.png',
		area: 9857306,
		capital: 'Washington D.C',
		description: 'The United States of America (USA or U.S.A.), commonly referred to as the United States (US or U.S.), America, and sometimes the States, is a federal republic[17][18] consisting of 50 states and a federal district. The 48 contiguous states and Washington, D.C., are in central North America between Canada and Mexico. The state of Alaska is the northwestern part of North America and the state of Hawaii is an archipelago in the mid-Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean. At 3.80 million square miles (9.85 million km2)[4] and with around 318 million people, the United States is the world s third - or fourth - largest country by total area and third - largest by population.It is one of the world s most ethnically diverse and multicultural nations, the product of large-scale immigration from many countries.[19] The geography and climate of the United States is also extremely diverse, and it is home to a wide variety of wildlife.'
	}, {
		name: 'Germany',
		continent: 'Europe',
		population: 200000,
		flag: 'GCDY97r.png',
		area: 324504,
		capital: 'Berlin',
		description: 'Germany (Listeni/ˈdʒɜrməni/; German: Deutschland), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland, pronounced [ˈbʊndəsʁepuˌbliːk ˈdɔʏtʃlant] ( listen)),[12] is a federal parliamentary republic in western-central Europe consisting of 16 constituent states, which retain limited sovereignty. Its capital and largest city is Berlin. Germany covers an area of 357,021 square kilometres (137,847 sq mi) and has a largely temperate seasonal climate. With 80.6 million inhabitants, it is the most populous member state in the European Union. Germany is a major economic and political power of the European continent and a historic leader in many cultural, theoretical and technical fields. After the United States, Germany is the second most popular migration destination in the world.[13]'
	}, {
		name: 'Iran',
		continent: 'Asia',
		population: 7000000,
		flag: 'dnlt7Mi.png',
		area: 94322,
		capital: 'Tehran',
		description: 'Germany (Listeni/ˈdʒɜrməni/; German: Deutschland), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland, pronounced [ˈbʊndəsʁepuˌbliːk ˈdɔʏtʃlant] ( listen)),[12] is a federal parliamentary republic in western-central Europe consisting of 16 constituent states, which retain limited sovereignty. Its capital and largest city is Berlin. Germany covers an area of 357,021 square kilometres (137,847 sq mi) and has a largely temperate seasonal climate. With 80.6 million inhabitants, it is the most populous member state in the European Union. Germany is a major economic and political power of the European continent and a historic leader in many cultural, theoretical and technical fields. After the United States, Germany is the second most popular migration destination in the world.[13]'
	}, {
		name: 'India',
		continent: 'Asia',
		population: 140000000,
		flag: 'sY6mBwm.png',
		area: 3287590,
		capital: 'New Delhi',
		description: 'India (Listeni/ˈɪndiə/), officially the Republic of India (Bhārat Gaṇarājya),[12][c] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;[d] China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, Indias Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.'
	}, {
		name: 'Angola',
		continent: 'Africa',
		population: 30000,
		flag: 'QV0omWR.png',
		area: 1246700,
		capital: 'Luanda',
		description: 'Angola /ænˈɡoʊlə/, officially the Republic of Angola (Portuguese: República de Angola pronounced: [ʁɛˈpublikɐ dɨ ɐ̃ˈɡɔlɐ]; Kikongo, Kimbundu, Umbundu: Repubilika ya Ngola), is a country in Southern Africa. It is the seventh largest country in Africa, and is bordered by Namibia on the south, the Democratic Republic of the Congo on the north, and Zambia on the east; its west coast is on the Atlantic Ocean and Luanda is its capital city. The exclave province of Cabinda has borders with the Republic of the Congo and the Democratic Republic of the Congo. The Portuguese were present in some– mostly coastal– points of the territory of what is now Angola, from the 16 th to the 19 th century, interacting in diverse ways with the peoples who lived there.In the 19 th century, they slowly and hesitantly began to establish themselves in the interior.Angola as a Portuguese colony encompassing the present territory was not established before the end of the 19 th century, and "effective occupation", as required by the Berlin Conference(1884) was achieved only by the 1920 s after the Mbunda resistance and abduction of their King, Mwene Mbandu I Lyondthzi Kapova.[5] Independence was achieved in 1975, after a protracted liberation war.After independence, Angola was the scene of an intense civil war from 1975 to 2002. Despite the civil war, areas such as Baixa de Cassanje continue a lineage of kings which have included the former King Kambamba Kulaxingo and current King Dianhenga Aspirante Mjinji Kulaxingo. '
	}, {
		name: 'Egypt',
		continent: 'Africa',
		population: 500000,
		flag: 'mfHutHR.png',
		area: 385596,
		capital: 'Cairo',
		description: 'Egypt (Listeni/ˈiːdʒɪpt/; Arabic: مِصر‎ Miṣr, Egyptian Arabic: مَصر Maṣr) is an Afro-Asiatic transcontinental country spanning the northeast corner of Africa and southwest corner of Asia, via a land bridge formed by the Sinai Peninsula. Most of Egypts territory of 1,010,000 square kilometres (390,000 sq mi) lies within the Nile Valley of North Africa, but it is also considered a Mediterranean country as it is bordered by the Mediterranean Sea to the north. It is also bordered by the Gaza Strip and Israel to the northeast, the Gulf of Aqaba to the east, the Red Sea to the east and south, Sudan to the south and Libya to the west. With over 87 million inhabitants, Egypt is the largest country in North Africa and the Arab World, the third - largest in Africa, and the fifteenth - most populous in the world.The great majority of its people live near the banks of the Nile River, an area of about 40, 000 square kilometres(15, 000 sq mi), where the only arable land is found.The large regions of the Sahara Desert, which constitute most of Egypts territory, are sparsely inhabited.About half of Egypts residents live in urban areas, with most spread across the densely populated centres of greater Cairo, Alexandria and other major cities in the Nile Delta. '
	}, {
		name: 'New Zealand',
		continent: 'Asia',
		population: 600000,
		flag: 'nFlK4pA.png',
		area: 385596,
		capital: 'Wellington',
		description: 'Kiwis, Sheep, and Lord of the Ring.'
	}];

	var service = {
		getPlaces: function() {
			return placesVisited;
		},
		addPlace: function(place) {

			if (!place.flag) {
				place.flag = defaults.flag
			}

			placesVisited.push(place);
		}
	};

	return service;

});