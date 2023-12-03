import {
  personArrayInterface, 
  CompaniesArrayInterface, 
  CompanySectionsInterface, 
  WorkFieldsInterface, 
  SportsInterface, 
  StartUpsInterface, 
  LogosInterface, 
  ServicesInterface, 
  ImagesInterface, 
  AboutUsDataInterface,
  PreparationListInterface,
  CardsList
} from "../../types/global";

const countryList: Array<string> = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

const persons: personArrayInterface[] = [
	{
		image: '/static/images/our-team/Personals/a1.png',
		position: 'CEO',
		name: 'Dr.Rasoul Moradimehr',
		linkedIn: '',
		category: 'managers'
	},
	{
		image: '/static/images/our-team/Personals/a2.png',
		position: 'COTB',
		name: 'Dr.Hadi Hasanpour',
		linkedIn: '',
		category: 'managers'
	},
	{
		image: '/static/images/our-team/Personals/a10.png',
		position: 'Manager',
		name: 'Mehrnoosh Heibati',
		linkedIn: '',
		category: 'managers'
	},
	{
		image: '/static/images/our-team/Personals/a11.png',
		position: 'Case Manager',
		name: 'Mahsa Esmaeili',
		linkedIn: '',
		category: 'managers'
	},
	{
		image: '/static/images/our-team/Personals/a3.png',
		position: 'Secretary',
		name: 'Lida Parvizi',
		linkedIn: '',
		category: 'secretary'
	},
	{
		image: '/static/images/our-team/Personals/a4.png',
		position: 'Public Relations Officer',
		name: 'Kholoud Hariri',
		linkedIn: '',
		category: 'public relations officer'
	},
	{
		image: '/static/images/our-team/Personals/a35.jpg',
		position: 'Director of Public Relations',
		name: 'Arash Aryanik',
		linkedIn: '',
		category: 'public relations officer'
	},
	{
		image: '/static/images/our-team/Personals/a5.png',
		position: 'Accountant',
		name: 'Ali Soleimani',
		linkedIn: '',
		category: 'accountant'
	},
	{
		image: '/static/images/our-team/Personals/a6.png',
		position: 'CTO',
		name: 'Iman Nasr',
		linkedIn: '',
		category: 'mentors'
	},
	{
		image: '/static/images/our-team/Personals/a7.png',
		position: 'Full stack',
		name: 'Sajjad Momeni',
		linkedIn: '',
		category: 'mentors'
	},
	{
		image: '/static/images/our-team/Personals/a8.png',
		position: 'Full Stack',
		name: 'Amin Asgarian',
		linkedIn: '',
		category: 'programmers'

	},
	{
		image: '/static/images/our-team/Personals/a9.png',
		position: 'Digital Marketer',
		name: 'Ehsan Aliakbari',
		linkedIn: '',
		category: "digital marketer"
	},
	{
		image: '/static/images/our-team/Personals/a13.png',
		position: 'UX/UI Designer',
		name: 'Ariana Shafie',
		linkedIn: '',
		category: 'designers'
	},
	{
		image: '/static/images/our-team/Personals/a14.png',
		position: 'UX/UI Designer',
		name: 'Arshia Nasiri',
		linkedIn: '',
		category: 'designers'
	},

	{
		image: '/static/images/our-team/Personals/a15.png',
		position: 'Junior Back-end',
		name: 'Fatemeh Safi',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a16.png',
		position: 'Full Stack',
		name: 'Sobhan Emami',
		linkedIn: '',
		category: 'programmers'

	},
	{
		image: '/static/images/our-team/Personals/a17.png',
		position: 'Front-end',
		name: 'Fahimeh Sajjadi',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a18.png',
		position: 'Front-end',
		name: 'Saman Karchegani',
		linkedIn: '',
		category: 'programmers'
	},

	{
		image: '/static/images/our-team/Personals/a19.png',
		position: 'Front-end',
		name: 'Mohsen Kiani',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a20.png',
		position: 'Application Developer',
		name: 'Ali Khavari',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a21.png',
		position: 'Graphic Designer',
		name: 'Hoda Mahdi',
		linkedIn: '',
		category: 'designers'
	},
	{
		image: '/static/images/our-team/Personals/a22.png',
		position: 'Graphic Designer',
		name: 'Aynaz Reisi',
		linkedIn: '',
		category: 'designers'
	},

	{
		image: '/static/images/our-team/Personals/a23.png',
		position: 'Content Creator',
		name: 'Mahtab Hafizi',
		linkedIn: '',
		category: 'content creators'
	},
	{
		image: '/static/images/our-team/Personals/a24.png',
		position: 'UI designer',
		name: 'Saba Mokhtari',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a25.png',
		position: 'Content Creator',
		name: 'Tiam Safarian',
		linkedIn: '',
		category: 'content creators'
	},
	{
		image: '/static/images/our-team/Personals/a26.png',
		position: 'Word Press Developer',
		name: 'Roham Arabloo',
		linkedIn: '',
		category: 'programmers'
	},

	{
		image: '/static/images/our-team/Personals/a27.png',
		position: 'Full Stack',
		name: 'Meraj Bighamian',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a28.png',
		position: 'Front-end',
		name: 'Mahdi Salmanzadeh',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a29.png',
		position: 'Front-end',
		name: 'Mahrokh Lotfi',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a30.png',
		position: 'Front-end',
		name: 'Ramtin Foroozani',
		linkedIn: '',
		category: 'programmers'
	},

	{
		image: '/static/images/our-team/Personals/a31.png',
		position: 'Front-end',
		name: 'Barad Dehghani',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a32.png',
		position: 'Front-end',
		name: 'Matin Janghorbani',
		linkedIn: '',
		category: 'programmers'
	},
	{
		image: '/static/images/our-team/Personals/a33.png',
		position: 'Public Relations Officer',
		name: 'Gelareh Bahrami',
		linkedIn: '',
		category: 'public relations officer'
	},
	{
		image: '/static/images/our-team/Personals/a34.png',
		position: 'Graphic Designer',
		name: 'Faezeh Khani',
		linkedIn: '',
		category: 'designers'
	},
];


const roles: Array<string> = [
	'All',
	'Managers',
	'Mentors',
	'Programmers',
	// 'Product Designer',
	"Designers",
	'Content Creators',
	'Accountant',
	'Public Relations',
	'Digital Marketer',
	'Secretary'
];


const companies: CompaniesArrayInterface[] = [
    {
      name: 'LANDA TRIP',
      logo: '1.png',
      link: "https://landatrip.com/"
    },
    {
      name: 'IRIMMIGRATION',
      logo: '2.png',
      link: "https://Irimmigration.ca"
    },
    {
      name: 'ACADEMY',
      logo: '3.png',
      link: 'https://landaholding.com/academy'
    },
    {
      name: 'TOLU ROSHAN',
      logo: '4.png',
      link: '/investment'
    },
    {
      name: 'DIACO',
      logo: '5.png',
      link: 'https://Diacocenter.com',
    },
    {
      name: 'VISION RAFT',
      logo: '6.png',
      link: 'https://Visionraft.com',
    },
    {
      name: 'FARAZAMAN',
      logo: '7.png',
      link: 'https://landaholding.com/acceleration'
    },
    {
      name: 'HANDI CRAFTS',
      logo: '8.png',
      link: '#'
    },
    {
      name: 'FOROUGH',
      logo: '9.png',
      link: '/acceleration'
    },
    {
      name: 'LANDA GENE',
      logo: '10.png',
      link: '#'
    },
];


const items: personArrayInterface[] = [
    {
      image: '/static/images/our-team/Personals/a3.png',
      position: 'Secretary',
      name: 'Lida Parvizi',
      linkedIn: '',
      category: 'secretary',
    },
    {
      image: '/static/images/our-team/Personals/a6.png',
      position: 'CTO',
      name: 'Iman Nasr',
      linkedIn: '',
      category: 'mentor',
    },
    {
      image: '/static/images/our-team/Personals/a33.png',
      position: 'Public Relations Officer',
      name: 'Gelareh Bahrami',
      linkedIn: '',
      category: 'public relations officer',
    },
    {
      image: '/static/images/our-team/Personals/a7.png',
      position: 'Full stack',
      name: 'Sajjad Momeni',
      linkedIn: '',
      category: 'mentor',
    },
    {
      image: '/static/images/our-team/Personals/a5.png',
      position: 'Accountant',
      name: 'Ali Solaimani',
      linkedIn: '',
      category: 'accountant',
    },
    {
      image: '/static/images/our-team/Personals/a13.png',
      position: 'UX/UI Designer',
      name: 'Ariana Shafie',
      linkedIn: '',
      category: 'designer',
    },
    {
      image: '/static/images/our-team/Personals/a9.png',
      position: 'Digital Marketer',
      name: 'Ehsan Aliakbari',
      linkedIn: '',
      category: 'digital marketer',
    },
    {
      image: '/static/images/our-team/Personals/a21.png',
      position: 'Graphic Designer',
      name: 'Hoda Mahdi',
      linkedIn: '',
      category: 'designer',
    },
];


const cardData: CompanySectionsInterface[] = [
    {
      title: 'Investment',
      text: 'At Landa Investment Center, we typically focus on investing in innovative, scalable startups with international market potential and the valuation of up to $5 million. We are a group of angel investors who can help you build your team, define your business model, and increase the value of your startup in global markets. With initial investment, capital raising, and access to a network of global investors, we will assist you in achieving success and increasing your business development.',
      reverse: false,
      show: true,
      index: 1,
      link: '/investor-registration',
      addedClass: '',
      images: [
        {
          src: '/static/images/Home main/2.jpg',
          alt: 'Investment',
        },
        {
          src: '/static/images/Home main/1.jpg',
          alt: 'Investment',
        },
      ],
    },
    {
      title: 'Acceleration',
      text: 'At Landa Acceleration Center, entrepreneurs are provided with a dynamic and nurturing environment designed to foster creativity and collaboration. The acceleration center boasts useful facilities, cutting-edge resources, experienced mentors, and professional experts, which will all help individuals to accelerate their own businesses and expand their new creative startups. Landa Holding understand that the challenges startups face. Therefore, we offer comprehensive programs that address business development, and market expansion.',
      reverse: true,
      show: true,
      index: 2,
      link: '/acceleration',
      addedClass: '',
      images: [
        {
          src: '/static/images/Home main/3.jpg',
          alt: 'Acceleration Center',
        },
        {
          src: '/static/images/Home main/4.jpg',
          alt: 'Acceleration Center',
        },
      ],
    },
    {
      title: 'Academy',
      text: 'At Landa Academy, we provide individuals with a nurturing place to discover and grow their interests and skills efficiently. Our academy operates as a dynamic place that identifies and evaluates the potential of talented individuals, particularly youth, and invests in their development and creative ideas. By providing comprehensive programs and resources and through a combination of mentoring, skill-building workshops, and exposure to various opportunities, Landa Academy equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.',
      reverse: false,
      show: false,
      index: 3,
      link: '#',
      addedClass: '',
      images: [
        {
          src: '/static/images/Home main/5.jpg',
          alt: 'Academy',
        },
        {
          src: '/static/images/Home main/6.jpg',
          alt: 'Academy',
        },
      ],
    },
];


const cardData1: WorkFieldsInterface[] = [
    {
      titleEN: 'Artificial Intelligence',
      titleFA: 'هوش مصنوعی',
      image: '/static/images/Home/Priority/vr-glasses 2.png',
    },
    {
      titleEN: 'Virtual Reality',
      titleFA: 'واقعیت مجازی',
      image: '/static/images/Home/Priority/system 2.png',
    },
    {
      titleEN: 'Renewable Energy',
      titleFA: 'انرژی های تجدید پذیر',
      image: '/static/images/Home/Priority/online-shop 1.png',
    },
    {
      titleEN: 'The Environment',
      titleFA: 'محیط زیست',
      image: '/static/images/Home/Priority/planet-earth 1.png',
    },
    {
      titleEN: 'Entertainment',
      titleFA: 'سرگرمی',
      image: '/static/images/Home/Priority/ai 2.png',
    },
    {
      titleEN: 'Biomedical Engineering',
      titleFA: 'مهندسی پزشکی',
      image: '/static/images/Home/Priority/man 2.png',
    },
    {
      titleEN: 'Services for Teenagers',
      titleFA: 'خدمات برای نوجوانان',
      image: '/static/images/Home/Priority/process 2.png',
    },
    {
      titleEN: 'Tourism Services',
      titleFA: 'خدمات گردشگری',
      image: '/static/images/Home/Priority/world 2.png',
    },
];


const cardData2: SportsInterface[] = [
    {
      title: 'Benefits of Spa Treatments',
      image: '/static/images/Home/Magazine/annie-spratt-hWJsOnaWTqs-unsplash 1.png',
      type: 'Acceleration',
      date: 'apr 27',
    },
    {
      title: 'Fitness Center',
      image: '/static/images/Home/Magazine/remy_loz-3S0INpfREQc-unsplash (1) 1.png',
      type: 'Investment',
      date: 'apr 27',
    },
    {
      title: 'Benefits of Spa Treatments',
      image: '/static/images/Home/Magazine/emile-perron-xrVDYZRGdw4-unsplash 1.png',
      type: 'Investment',
      date: 'apr 27',
    },
];


const cardData3: StartUpsInterface[] = [
    {
      image: '/static/images/Home/Startups/trip.png',
      titleEN: 'LANDA TRIP',
      titleFA: 'لاندا تریپ',
      descriptionEN: 'Landa trip is an innovative start-up company that creates, promotes, and runs useful educational courses for all interested people and businesses.',
      descriptionFA: 'لاندا تریپ یک شرکت نوآور نوآور است که دوره های آموزشی مفیدی را برای همه افراد علاقه مند و کسب و کار ایجاد، ترویج و اجرا می کند',
      link: 'https://landatrip.com/',
    },

    {
      image: '/static/images/Home/Startups/diaco.png',
      titleEN: 'DIACO',
      titleFA: 'دیاکو',
      descriptionEN: 'Diaco is an open innovation platform which acts as an intermediary between technology seekers and providers to fulfill their technological demands.',
      descriptionFA: 'دیاکو یک پلتفرم نوآوری باز است که به عنوان یک واسطه بین جویندگان فناوری و ارائه دهندگان برای برآورده کردن خواسته های فناوری آنها عمل می کند',
      link: 'https://irdiaco.ca/',
    },
    {
      image: '/static/images/Home/Startups/vision-raft.png',
      titleEN: 'VISION RAFT',
      titleFA: 'ویژن رفت',
      descriptionEN: 'This is Vision Raft, a VR platform focused on education and entertainment of the young ones which acts to enhance their learning quality.',
      descriptionFA: 'این ویژن رفت است، یک پلتفرم واقعیت مجازی با تمرکز بر آموزش و سرگرمی جوانان که کیفیت یادگیری آنها را افزایش می دهد',
      link: 'https://invigorated-drop-231359.framer.app',
    },
];


const logosLeft: LogosInterface[] = [
    {
      number: 2,
      alt: 'azad university',
    },
    {
      number: 3,
      alt: 'nekeoi',
    },
    {
      number: 4,
      alt: 'evimo',
    },
    {
      number: 5,
      alt: 'evimo',
    },
    {
      number: 6,
      alt: 'evimo',
    },
    {
      number: 7,
      alt: 'evimo',
    },
    // {
    //   number: 8,
    //   alt: 'evimo',
    // },
];


const logosRight: LogosInterface[] = [
    {
      number: 1,
      alt: 'evimo',
    },
    {
      number: 9,
      alt: 'evimo',
    },
    {
      number: 10,
      alt: 'evimo',
    },
    {
      number: 11,
      alt: 'evimo',
    },
    {
      number: 12,
      alt: 'evimo',
    },
    // {
    //   number: 13,
    //   alt: 'evimo',
    // },
    {
      number: 14,
      alt: 'evimo',
    },
    // {
    //   number: 15,
    //   alt: 'evimo',
    // },
    // {
    //   number: 16,
    //   alt: 'evimo',
    // },
];


const partners1: LogosInterface[] = [
    {
      number: 1,
      alt: 'evimo',
    },
    {
      number: 2,
      alt: 'azad',
    },
    {
      number: 3,
      alt: 'nekoei',
    },
    {
      number: 4,
      alt: 'evimo',
    },
    {
      number: 5,
      alt: 'evimo',
    },
    {
      number: 6,
      alt: 'evimo',
    },
];



const partners2: LogosInterface[] = [
    {
      number: 7,
      alt: 'evimo',
    },
    {
      number: 8,
      alt: 'evimo',
    },
    {
      number: 9,
      alt: 'evimo',
    },
    {
      number: 10,
      alt: 'evimo',
    },
    {
      number: 11,
      alt: 'evimo',
    },
];


const partners3: LogosInterface[] = [
    {
      number: 12,
      alt: 'evimo',
    },
    {
      number: 13,
      alt: 'evimo',
    },
    {
      number: 14,
      alt: 'evimo',
    },
    {
      number: 15,
      alt: 'evimo',
    },
];


const servicesEN: ServicesInterface[] = [
    {
      "title": 'Pitch deck preparation',
      "image": '1.png',
    },
    {
      "title": 'Mentoring',
      "image": '2.png',
    },
    {
      "title": 'Networking with suitable individuals',
      "image": '3.png',
    },
    {
      "title": 'Initial financing',
      "image": '4.png',
    },
    {
      "title": 'MVP development',
      "image": '5.png',
    },
    {
      "title": 'Research and development',
      "image": '6.png',
    },
    {
      "title": 'Website design',
      "image": '7.png',
    },
    {
      "title": 'Business plan creation',
      "image": '8.png',
    },
    {
      "title": 'Idea brainstorming and development',
      "image": '9.png',
    },
    {
      "title": 'Cooperative workspace',
      "image": '10.png',
    },
    {
      "title": 'Patent registration',
      "image": '11.png',
    },
    {
      "title": 'Organizing startup presentation events',
      "image": '12.png',
    },
];

const servicesFA: ServicesInterface[] = [
  {
    "title": "آماده سازی فایل ارايه",
    "image": '1.png',
  },
  {
    "title": "منتورینگ",
    "image": "2.png",
  },
  {
    "title": "شبکه سازی با افراد مناسب",
    "image": "3.png",
  },
  {
    "title": "تامین مالی اولیه",
    "image": "4.png",
  },
  {
    "title": "توسعه MVP",
    "image": "5.png",
  },
  {
    "title": "تحقیق و توسعه",
    "image": "6.png",
  },
  {
    "title": "طراحی وب سایت",
    "image": "7.png",
  },
  {
    "title": "ایجاد طرح کسب و کار",
    "image": "8.png",
  },
  {
    "title": "طوفان فکری و توسعه ایده",
    "image": "9.png",
  },
  {
    "title": "فضای کار تعاونی",
    "image": "10.png",
  },
  {
    "title": "ثبت اختراع",
    "image": "11.png",
  },
  {
    "title": "برگزاری رویدادهای ارائه استارتاپ",
    "image": "12.png",
  },
];

const images: ImagesInterface[] = [
    {
      src: '/static/images/Academy/gallery/all/1.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/2.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/3.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/4.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/5.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/6.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/7.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/8.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/9.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/10.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/11.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/12.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/13.png',
    },
    {
      src: '/static/images/Academy/gallery/all/14.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/15.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/16.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/17.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/18.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/19.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/20.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/21.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/22.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/23.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/24.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/25.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/26.png',
    },
    {
      src: '/static/images/Academy/gallery/all/27.jpg',
    },
    {
      src: '/static/images/Academy/gallery/all/28.jpg',
    },
];


const cardsDataEN: AboutUsDataInterface[] = [
    {
      image: '/static/images/our-team/Personals/a1.png',
      name: 'Rasoul Moradimehr',
      position: ' CEO',
      links: {
        linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
        whatsapp: 'wa.me/+989134233863',
        email: 'mailto:rasoulmoradimehr@gmail.com',
        website: 'https://moradimehr.com/',
        instagram: 'https://instagram.com/dr.moradimehr.rasoul?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/about/mjafari.jpg',
      name: 'MORTEZA JAFARI',
      position: 'International Relations',
      links: {
        linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
        whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
        email: 'mailto:morteza_jafari49@yahoo.com',
        website: 'https://mortezajafari.ca/',
        instagram: 'https://instagram.com/jafari.irimmigration.ca?igshid=MzRlODBiNWFlZA==',
      },
    },
    {
      image: '/static/images/our-team/Personals/a2.png',
      name: 'Hadi Hasanpour',
      position: 'COTB',
      links: {
        linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
        whatsapp: 'https://wa.me/+12892693933',
        email: 'mailto:hadihasanpor@gmail.com',
        website: 'https://www.hadihasanpour.ca/',
        instagram: 'https://instagram.com/dr.hadihasanpour?igshid=MzRlODBiNWFlZA==',
      },
    },
];

const cardsDataFA: AboutUsDataInterface[] = [
  {
    image: '/static/images/our-team/Personals/a1.png',
    name: 'رسول مرادیمهر',
    position: ' مدیر عامل',
    links: {
      linkedin: 'https://www.linkedin.com/in/rasoul-moradi-mehr/',
      whatsapp: 'wa.me/+989134233863',
      email: 'mailto:rasoulmoradimehr@gmail.com',
      website: 'https://moradimehr.com/',
      instagram: 'https://instagram.com/dr.moradimehr.rasoul?igshid=MzRlODBiNWFlZA==',
    },
  },
  {
    image: '/static/images/about/mjafari.jpg',
    name: 'مرتضی جعفری',
    position: 'ارتباطات بین الملل',
    links: {
      linkedin: 'https://www.linkedin.com/in/morteza-jafari-5b40b63a',
      whatsapp: 'https://api.whatsapp.com/send?phone=+14705199691',
      email: 'mailto:morteza_jafari49@yahoo.com',
      website: 'https://mortezajafari.ca/',
      instagram: 'https://instagram.com/jafari.irimmigration.ca?igshid=MzRlODBiNWFlZA==',
    },
  },
  {
    image: '/static/images/our-team/Personals/a2.png',
    name: 'هادی حسن پور',
    position: 'COTB',
    links: {
      linkedin: 'https://www.linkedin.com/in/hadi-hasanpour',
      whatsapp: 'https://wa.me/+12892693933',
      email: 'mailto:hadihasanpor@gmail.com',
      website: 'https://www.hadihasanpour.ca/',
      instagram: 'https://instagram.com/dr.hadihasanpour?igshid=MzRlODBiNWFlZA==',
    },
  },
];


const preparationStatsOption: PreparationListInterface[] = [
  { value: 'basicPrinciple', label: 'The basic principle has been observed.' },
  { value: 'technologyConcept', label: 'The technology concept has been formulated.' },
  { value: 'exprimentalProof', label: 'Experimental proof of concept.' },
  { value: 'confirmedTechnologyLab', label: 'The confirmed technology in laboratory.' },
  { value: 'confirmedTechnologyEnv', label: 'The confirmed technology in the environmental conditions' },
  { value: 'presentedTechnologyEnv', label: 'The presented technology in the environmental conditions' },
  { value: 'systemPrototypeInMvp', label: 'Show the system prototype in the mvp operating environment.' },
  { value: 'realisticSystem', label: 'The proved realistic system in the operating environment.' },
  { value: 'qualifiedSystem', label: 'A complete and qualified system.' },
];


const cards: CardsList[] = [
  {
    title: 'Investment Center',
    text: 'We assist startups by providing their investments to help them grow and transition their businesses into the business markets to expand them internationally. We collaborate with a group of international investors who invest in various projects and businesses based on their investment priorities. At Landa Investment Center, all the required investments for starting and developing your business will be provided, allowing you to prosper and achieve profitability as soon as possible.',
    image: '/static/images/About/card1.png',
    reverse: true,
    link: '/investor-registration',
  },
  {
    title: 'Acceleration Center',
    text: 'After completing the mentioned stages, the Landa Acceleration Center comes into action. This center has been established with the aim of accelerating your startup. The purpose of founding this center is to undertake all necessary actions for the growth and acceleration of your business until reaching ultimate success. One of the initial steps of the Landa Acceleration Center is analyzing and checking competitors. One of our initiatives at Landa Academy is creating a co-working space for both internal and external startups. Our co-working space is designed to foster teamwork, allowing startups to collaborate directly with existing startups and also hold brainstorming sessions together for projects.',
    image: '/static/images/About/card2.png',
    reverse: false,
    link: '/StartupsForm',
  },
  {
    title: 'Academy',
    text: "The first step after joining the Landa Academy is to discover each individual's interests. We believe that in order to progress, every person should take steps in their interested field because pursuing one's passions always brings better results. With the help of our experienced and specialized staff, we can identify each person's interests and train them according to their passion. The most up-to-date method of education in the world is mentoring. This method of education is both theoretical and practical, providing specialized training to individuals based on their skills and interests. By selecting the best mentors, we offer the best education to teenagers. Additionally, after assessing their interests, teenagers can actively participate and gain experience in the relevant profession within our organization.",
    image: '/static/images/About/card3.png',
    reverse: true,
    link: '/academy',
  },
];

const acceleratorProcessItemsEN = [
  "1. Idea generation for innovative business creation",
  "2. Idea nurturing",
  "3. Creating a pitch deck",
  "4. Financial modelling",
  "5. Mentorship programs",
  "6. Networking",
  "7. Cooperative workspace",
  "8. Digital marketing",
  "9. Consultation for necessary permits",
  "10. Seed investment",
  "11. Market share expansion",
  "12. Marketing and sales strategy",
  "13. Business development",
  "14. Preparation and valuation of business plans",
]

const acceleratorProcessItemsFA = [
  "تولید ایده برای ایجاد کسب و کار نوآورانه",
  "پرورش دادن ایده",
  "ساختن یک فایل ارايه",
  "مدل سازی مالی",
  "برنامه های منتورینگ",
  "شبکه سازی",
  "فضای کار تعاونی",
  "بازاریابی دیجیتال",
  "مشاوره جهت اخذ مجوزهای لازم",
  "سرمایه گذاری در مرحله ایده",
  "گسترش سهم بازار",
  "استراتژی بازاریابی و فروش",
  "توسعه تجاری",
  "تهیه و ارزیابی طرح های تجاری",
]


export {
	countryList,
	persons, 
	roles, 
	companies, 
	cardData, 
	items, 
	cardData1, 
	cardData2, 
	cardData3, 
	logosLeft, 
	logosRight,
	partners1,
	partners2,
	partners3,
	servicesEN,
  servicesFA,
	images,
	cardsDataEN,
  cardsDataFA,
  preparationStatsOption,
  cards,
  acceleratorProcessItemsEN
}