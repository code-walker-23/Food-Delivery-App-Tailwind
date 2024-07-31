export const CitiesList = () => {
  const cities = [
    {
      "City": "Abohar",
      "Lat": 30.144533,
      "Long": 74.19552,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Adilabad",
      "Lat": 19.4,
      "Long": 78.31,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Agartala",
      "Lat": 23.836049,
      "Long": 91.279386,
      "country": "India",
      "iso2": "IN",
      "State": "Tripura"
    },
    {
      "City": "Agra",
      "Lat": 27.187935,
      "Long": 78.003944,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Ahmadnagar",
      "Lat": 19.094571,
      "Long": 74.738432,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Ahmedabad",
      "Lat": 23.025793,
      "Long": 72.587265,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Aizawl",
      "Lat": 23.736701,
      "Long": 92.714596,
      "country": "India",
      "iso2": "IN",
      "State": "Mizoram"
    },
    {
      "City": "Ajmer",
      "Lat": 26.452103,
      "Long": 74.638667,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Akola",
      "Lat": 20.709569,
      "Long": 76.998103,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Alappuzha",
      "Lat": 9.494647,
      "Long": 76.331108,
      "country": "India",
      "iso2": "IN",
      "State": "Kerala"
    },
    {
      "City": "Aligarh",
      "Lat": 27.881453,
      "Long": 78.07464,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Alipurduar",
      "Lat": 26.4835,
      "Long": 89.522855,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Allahabad",
      "Lat": 25.44478,
      "Long": 81.843217,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Alwar",
      "Lat": 27.566291,
      "Long": 76.610202,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Ambala",
      "Lat": 30.360993,
      "Long": 76.797819,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Amaravati",
      "Lat": 20.933272,
      "Long": 77.75152,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Amritsar",
      "Lat": 31.622337,
      "Long": 74.875335,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Asansol",
      "Lat": 23.683333,
      "Long": 86.983333,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Aurangabad",
      "Lat": 19.880943,
      "Long": 75.346739,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Aurangabad",
      "Lat": 24.752037,
      "Long": 84.374202,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Bakshpur",
      "Lat": 25.894283,
      "Long": 80.792104,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Bamanpuri",
      "Lat": 28.804495,
      "Long": 79.040305,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Baramula",
      "Lat": 34.209004,
      "Long": 74.342853,
      "country": "India",
      "iso2": "IN",
      "State": "Jammu and Kashmir"
    },
    {
      "City": "Barddhaman",
      "Lat": 23.255716,
      "Long": 87.856906,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Bareilly",
      "Lat": 28.347023,
      "Long": 79.421934,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Belgaum",
      "Lat": 15.862643,
      "Long": 74.508534,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Bellary",
      "Lat": 15.142049,
      "Long": 76.92398,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Bengaluru",
      "Lat": 12.977063,
      "Long": 77.587106,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Bhagalpur",
      "Lat": 25.244462,
      "Long": 86.971832,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Bharatpur",
      "Lat": 27.215251,
      "Long": 77.492786,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Bharauri",
      "Lat": 27.598203,
      "Long": 81.694709,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Bhatpara",
      "Lat": 22.866431,
      "Long": 88.401129,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Bhavnagar",
      "Lat": 21.774455,
      "Long": 72.152496,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Bhilai",
      "Lat": 21.209188,
      "Long": 81.428497,
      "country": "India",
      "iso2": "IN",
      "State": "Chhattisgarh"
    },
    {
      "City": "Bhilwara",
      "Lat": 25.347071,
      "Long": 74.640812,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Bhiwandi",
      "Lat": 19.300229,
      "Long": 73.058813,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Bhiwani",
      "Lat": 28.793044,
      "Long": 76.13968,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Bhopal",
      "Lat": 23.254688,
      "Long": 77.402892,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Bhubaneshwar",
      "Lat": 20.272411,
      "Long": 85.833853,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Bhuj",
      "Lat": 23.253972,
      "Long": 69.669281,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Bhusaval",
      "Lat": 21.043649,
      "Long": 75.785058,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Bidar",
      "Lat": 17.913309,
      "Long": 77.530105,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Bijapur",
      "Lat": 16.827715,
      "Long": 75.718988,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Bikaner",
      "Lat": 28.017623,
      "Long": 73.314955,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Bilaspur",
      "Lat": 22.080046,
      "Long": 82.155431,
      "country": "India",
      "iso2": "IN",
      "State": "Chhattisgarh"
    },
    {
      "City": "Brahmapur",
      "Lat": 19.311514,
      "Long": 84.792903,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Budaun",
      "Lat": 28.038114,
      "Long": 79.126677,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Bulandshahr",
      "Lat": 28.403922,
      "Long": 77.857731,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Calicut",
      "Lat": 11.248016,
      "Long": 75.780402,
      "country": "India",
      "iso2": "IN",
      "State": "Kerala"
    },
    {
      "City": "Chanda",
      "Lat": 19.950758,
      "Long": 79.295229,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Chandigarh",
      "Lat": 30.736292,
      "Long": 76.788398,
      "country": "India",
      "iso2": "IN",
      "State": "Chandigarh"
    },
    {
      "City": "Chennai",
      "Lat": 13.084622,
      "Long": 80.248357,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Chikka Mandya",
      "Lat": 12.545602,
      "Long": 76.895078,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Chirala",
      "Lat": 15.823849,
      "Long": 80.352187,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Coimbatore",
      "Lat": 11.005547,
      "Long": 76.966122,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Cuddalore",
      "Lat": 11.746289,
      "Long": 79.764362,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Cuttack",
      "Lat": 20.522922,
      "Long": 85.78813,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Daman",
      "Lat": 20.414315,
      "Long": 72.83236,
      "country": "India",
      "iso2": "IN",
      "State": "Daman and Diu"
    },
    {
      "City": "Davangere",
      "Lat": 14.469237,
      "Long": 75.92375,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "DehraDun",
      "Lat": 30.324427,
      "Long": 78.033922,
      "country": "India",
      "iso2": "IN",
      "State": "Uttarakhand"
    },
    {
      "City": "Delhi",
      "Lat": 28.651952,
      "Long": 77.231495,
      "country": "India",
      "iso2": "IN",
      "State": "Delhi"
    },
    {
      "City": "Dhanbad",
      "Lat": 23.801988,
      "Long": 86.443244,
      "country": "India",
      "iso2": "IN",
      "State": "Jharkhand"
    },
    {
      "City": "Dibrugarh",
      "Lat": 27.479888,
      "Long": 94.90837,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Dindigul",
      "Lat": 10.362853,
      "Long": 77.975827,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Dispur",
      "Lat": 26.135638,
      "Long": 91.800688,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Diu",
      "Lat": 20.715115,
      "Long": 70.987952,
      "country": "India",
      "iso2": "IN",
      "State": "Daman and Diu"
    },
    {
      "City": "Faridabad",
      "Lat": 28.411236,
      "Long": 77.313162,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Firozabad",
      "Lat": 27.150917,
      "Long": 78.397808,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Fyzabad",
      "Lat": 26.775486,
      "Long": 82.150182,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Gangtok",
      "Lat": 27.325739,
      "Long": 88.612155,
      "country": "India",
      "iso2": "IN",
      "State": "Sikkim"
    },
    {
      "City": "Gaya",
      "Lat": 24.796858,
      "Long": 85.003852,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Ghandinagar",
      "Lat": 23.216667,
      "Long": 72.683333,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Ghaziabad",
      "Lat": 28.665353,
      "Long": 77.439148,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Gopalpur",
      "Lat": 26.735389,
      "Long": 83.38064,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Gulbarga",
      "Lat": 17.335827,
      "Long": 76.83757,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Guntur",
      "Lat": 16.299737,
      "Long": 80.457293,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Gurugram",
      "Lat": 28.460105,
      "Long": 77.026352,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Guwahati",
      "Lat": 26.176076,
      "Long": 91.762932,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Gwalior",
      "Lat": 26.229825,
      "Long": 78.173369,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Haldia",
      "Lat": 22.025278,
      "Long": 88.058333,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Haora",
      "Lat": 22.576882,
      "Long": 88.318566,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Hapur",
      "Lat": 28.729845,
      "Long": 77.780681,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Haripur",
      "Lat": 31.463218,
      "Long": 75.986418,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Hata",
      "Lat": 27.592698,
      "Long": 78.013843,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Hindupur",
      "Lat": 13.828065,
      "Long": 77.491425,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Hisar",
      "Lat": 29.153938,
      "Long": 75.722944,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Hospet",
      "Lat": 15.269537,
      "Long": 76.387103,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Hubli",
      "Lat": 15.349955,
      "Long": 75.138619,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Hyderabad",
      "Lat": 17.384052,
      "Long": 78.456355,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Imphal",
      "Lat": 24.808053,
      "Long": 93.944203,
      "country": "India",
      "iso2": "IN",
      "State": "Manipur"
    },
    {
      "City": "Indore",
      "Lat": 22.717736,
      "Long": 75.85859,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Itanagar",
      "Lat": 27.102349,
      "Long": 93.692047,
      "country": "India",
      "iso2": "IN",
      "State": "Arunachal Pradesh"
    },
    {
      "City": "Jabalpur",
      "Lat": 23.174495,
      "Long": 79.935903,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Jaipur",
      "Lat": 26.913312,
      "Long": 75.787872,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Jammu",
      "Lat": 32.735686,
      "Long": 74.869112,
      "country": "India",
      "iso2": "IN",
      "State": "Jammu and Kashmir"
    },
    {
      "City": "Jamshedpur",
      "Lat": 22.802776,
      "Long": 86.185448,
      "country": "India",
      "iso2": "IN",
      "State": "Jharkhand"
    },
    {
      "City": "Jhansi",
      "Lat": 25.458872,
      "Long": 78.579943,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Jodhpur",
      "Lat": 26.26841,
      "Long": 73.005943,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Jorhat",
      "Lat": 26.757509,
      "Long": 94.203055,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Kagaznagar",
      "Lat": 19.331589,
      "Long": 79.466051,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Kakinada",
      "Lat": 16.960361,
      "Long": 82.238086,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Kalyan",
      "Lat": 19.243703,
      "Long": 73.135537,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Karimnagar",
      "Lat": 18.436738,
      "Long": 79.13222,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Karnal",
      "Lat": 29.691971,
      "Long": 76.984483,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Karur",
      "Lat": 10.960277,
      "Long": 78.076753,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Kavaratti",
      "Lat": 10.566667,
      "Long": 72.616667,
      "country": "India",
      "iso2": "IN",
      "State": "Lakshadweep"
    },
    {
      "City": "Khammam",
      "Lat": 17.247672,
      "Long": 80.143682,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Khanapur",
      "Lat": 21.273716,
      "Long": 76.117376,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Kochi",
      "Lat": 9.947743,
      "Long": 76.253802,
      "country": "India",
      "iso2": "IN",
      "State": "Kerala"
    },
    {
      "City": "Kohima",
      "Lat": 25.674673,
      "Long": 94.110988,
      "country": "India",
      "iso2": "IN",
      "State": "Nagaland"
    },
    {
      "City": "Kolar",
      "Lat": 13.137679,
      "Long": 78.129989,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Kolhapur",
      "Lat": 16.695633,
      "Long": 74.231669,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Kolkata",
      "Lat": 22.562627,
      "Long": 88.363044,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Kollam",
      "Lat": 8.881131,
      "Long": 76.584694,
      "country": "India",
      "iso2": "IN",
      "State": "Kerala"
    },
    {
      "City": "Kota",
      "Lat": 25.182544,
      "Long": 75.839065,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Krishnanagar",
      "Lat": 23.405761,
      "Long": 88.490733,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Krishnapuram",
      "Lat": 12.869617,
      "Long": 79.719469,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Kumbakonam",
      "Lat": 10.959789,
      "Long": 79.377472,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Kurnool",
      "Lat": 15.828865,
      "Long": 78.036021,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Latur",
      "Lat": 18.399487,
      "Long": 76.584252,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Lucknow",
      "Lat": 26.839281,
      "Long": 80.923133,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Ludhiana",
      "Lat": 30.912042,
      "Long": 75.853789,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Machilipatnam",
      "Lat": 16.187466,
      "Long": 81.13888,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Madurai",
      "Lat": 9.917347,
      "Long": 78.119622,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Mahabubnagar",
      "Lat": 16.75,
      "Long": 78,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Malegaon Camp",
      "Lat": 20.569974,
      "Long": 74.515415,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Mangalore",
      "Lat": 12.865371,
      "Long": 74.842432,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Mathura",
      "Lat": 27.503501,
      "Long": 77.672145,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Meerut",
      "Lat": 28.980018,
      "Long": 77.706356,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Mirzapur",
      "Lat": 25.144902,
      "Long": 82.565335,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Moradabad",
      "Lat": 28.838931,
      "Long": 78.776838,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Mumbai",
      "Lat": 18.987807,
      "Long": 72.836447,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Muzaffarnagar",
      "Lat": 29.470914,
      "Long": 77.703324,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Muzaffarpur",
      "Lat": 26.122593,
      "Long": 85.390553,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Mysore",
      "Lat": 12.292664,
      "Long": 76.638543,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Nagercoil",
      "Lat": 8.177313,
      "Long": 77.43437,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Nalgonda",
      "Lat": 17.05,
      "Long": 79.27,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Nanded",
      "Lat": 19.160227,
      "Long": 77.314971,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Nandyal",
      "Lat": 15.477994,
      "Long": 78.483605,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Nasik",
      "Lat": 19.999963,
      "Long": 73.776887,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Navsari",
      "Lat": 20.85,
      "Long": 72.916667,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Nellore",
      "Lat": 14.449918,
      "Long": 79.986967,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "New Delhi",
      "Lat": 28.6,
      "Long": 77.2,
      "country": "India",
      "iso2": "IN",
      "State": "Delhi"
    },
    {
      "City": "Nizamabad",
      "Lat": 18.673151,
      "Long": 78.10008,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Ongole",
      "Lat": 15.503565,
      "Long": 80.044541,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Pali",
      "Lat": 25.775125,
      "Long": 73.320611,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Panaji",
      "Lat": 15.498289,
      "Long": 73.824541,
      "country": "India",
      "iso2": "IN",
      "State": "Goa"
    },
    {
      "City": "Panchkula",
      "Lat": 30.691512,
      "Long": 76.853736,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Panipat",
      "Lat": 29.387471,
      "Long": 76.968246,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Parbhani",
      "Lat": 19.268553,
      "Long": 76.770807,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Pathankot",
      "Lat": 32.274842,
      "Long": 75.652865,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Patiala",
      "Lat": 30.336245,
      "Long": 76.392199,
      "country": "India",
      "iso2": "IN",
      "State": "Punjab"
    },
    {
      "City": "Patna",
      "Lat": 25.615379,
      "Long": 85.101027,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Pilibhit",
      "Lat": 28.631245,
      "Long": 79.804362,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Porbandar",
      "Lat": 21.641346,
      "Long": 69.600868,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Port Blair",
      "Lat": 11.666667,
      "Long": 92.75,
      "country": "India",
      "iso2": "IN",
      "State": "Andaman and Nicobar Islands"
    },
    {
      "City": "Proddatur",
      "Lat": 14.7502,
      "Long": 78.548129,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Puducherry",
      "Lat": 11.933812,
      "Long": 79.829792,
      "country": "India",
      "iso2": "IN",
      "State": "Puducherry"
    },
    {
      "City": "Pune",
      "Lat": 18.513271,
      "Long": 73.849852,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Puri",
      "Lat": 19.798254,
      "Long": 85.824938,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Purnea",
      "Lat": 25.776703,
      "Long": 87.473655,
      "country": "India",
      "iso2": "IN",
      "State": "Bihar"
    },
    {
      "City": "Raichur",
      "Lat": 16.205459,
      "Long": 77.35567,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Raipur",
      "Lat": 21.233333,
      "Long": 81.633333,
      "country": "India",
      "iso2": "IN",
      "State": "Chhattisgarh"
    },
    {
      "City": "Rajahmundry",
      "Lat": 17.005171,
      "Long": 81.777839,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Rajapalaiyam",
      "Lat": 9.451111,
      "Long": 77.556121,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Rajkot",
      "Lat": 22.291606,
      "Long": 70.793217,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Ramagundam",
      "Lat": 18.45,
      "Long": 79.28,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Rampura",
      "Lat": 26.884682,
      "Long": 75.789336,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Ranchi",
      "Lat": 23.347768,
      "Long": 85.338564,
      "country": "India",
      "iso2": "IN",
      "State": "Jharkhand"
    },
    {
      "City": "Ratlam",
      "Lat": 23.330331,
      "Long": 75.040315,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Raurkela",
      "Lat": 22.224964,
      "Long": 84.864143,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Rohtak",
      "Lat": 28.894473,
      "Long": 76.589166,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Saharanpur",
      "Lat": 29.967896,
      "Long": 77.545221,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Saidapur",
      "Lat": 27.598784,
      "Long": 80.75089,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Saidpur",
      "Lat": 34.318174,
      "Long": 74.457093,
      "country": "India",
      "iso2": "IN",
      "State": "Jammu and Kashmir"
    },
    {
      "City": "Salem",
      "Lat": 11.651165,
      "Long": 78.158672,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Samlaipadar",
      "Lat": 21.478072,
      "Long": 83.990505,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Sangli",
      "Lat": 16.856777,
      "Long": 74.569196,
      "country": "India",
      "iso2": "IN",
      "State": "Maharashtra"
    },
    {
      "City": "Saugor",
      "Lat": 23.838766,
      "Long": 78.738738,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Shahbazpur",
      "Lat": 27.874116,
      "Long": 79.879327,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Shiliguri",
      "Lat": 26.710035,
      "Long": 88.428512,
      "country": "India",
      "iso2": "IN",
      "State": "West Bengal"
    },
    {
      "City": "Shillong",
      "Lat": 25.573987,
      "Long": 91.896807,
      "country": "India",
      "iso2": "IN",
      "State": "Meghalaya"
    },
    {
      "City": "Shimla",
      "Lat": 31.104423,
      "Long": 77.166623,
      "country": "India",
      "iso2": "IN",
      "State": "Himachal Pradesh"
    },
    {
      "City": "Shimoga",
      "Lat": 13.932424,
      "Long": 75.572555,
      "country": "India",
      "iso2": "IN",
      "State": "Karnataka"
    },
    {
      "City": "Sikar",
      "Lat": 27.614778,
      "Long": 75.138671,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Silchar",
      "Lat": 24.827327,
      "Long": 92.797868,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Silvassa",
      "Lat": 20.273855,
      "Long": 72.996728,
      "country": "India",
      "iso2": "IN",
      "State": "Dadra and Nagar Haveli"
    },
    {
      "City": "Sirsa",
      "Lat": 29.534893,
      "Long": 75.028981,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Sonipat",
      "Lat": 28.994778,
      "Long": 77.019375,
      "country": "India",
      "iso2": "IN",
      "State": "Haryana"
    },
    {
      "City": "Srinagar",
      "Lat": 34.085652,
      "Long": 74.805553,
      "country": "India",
      "iso2": "IN",
      "State": "Jammu and Kashmir"
    },
    {
      "City": "Surat",
      "Lat": 21.195944,
      "Long": 72.830232,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Tezpur",
      "Lat": 26.633333,
      "Long": 92.8,
      "country": "India",
      "iso2": "IN",
      "State": "Assam"
    },
    {
      "City": "Thanjavur",
      "Lat": 10.785233,
      "Long": 79.139093,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Tharati Etawah",
      "Lat": 26.758236,
      "Long": 79.014875,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Thiruvananthapuram",
      "Lat": 8.485498,
      "Long": 76.949238,
      "country": "India",
      "iso2": "IN",
      "State": "Kerala"
    },
    {
      "City": "Tiruchchirappalli",
      "Lat": 10.815499,
      "Long": 78.696513,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Tirunelveli",
      "Lat": 8.725181,
      "Long": 77.684519,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Tirupati",
      "Lat": 13.635505,
      "Long": 79.419888,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Tiruvannamalai",
      "Lat": 12.230204,
      "Long": 79.072954,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Tonk",
      "Lat": 26.168672,
      "Long": 75.786111,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Tuticorin",
      "Lat": 8.805038,
      "Long": 78.151884,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Udaipur",
      "Lat": 24.57951,
      "Long": 73.690508,
      "country": "India",
      "iso2": "IN",
      "State": "Rajasthan"
    },
    {
      "City": "Ujjain",
      "Lat": 23.182387,
      "Long": 75.776433,
      "country": "India",
      "iso2": "IN",
      "State": "Madhya Pradesh"
    },
    {
      "City": "Vadodara",
      "Lat": 22.299405,
      "Long": 73.208119,
      "country": "India",
      "iso2": "IN",
      "State": "Gujarat"
    },
    {
      "City": "Valparai",
      "Lat": 10.325163,
      "Long": 76.955299,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Varanasi",
      "Lat": 25.31774,
      "Long": 83.005811,
      "country": "India",
      "iso2": "IN",
      "State": "Uttar Pradesh"
    },
    {
      "City": "Vellore",
      "Lat": 12.905769,
      "Long": 79.137104,
      "country": "India",
      "iso2": "IN",
      "State": "Tamil Nadu"
    },
    {
      "City": "Vishakhapatnam",
      "Lat": 17.704052,
      "Long": 83.297663,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Vizianagaram",
      "Lat": 18.11329,
      "Long": 83.397743,
      "country": "India",
      "iso2": "IN",
      "State": "Andhra Pradesh"
    },
    {
      "City": "Warangal",
      "Lat": 17.978423,
      "Long": 79.600209,
      "country": "India",
      "iso2": "IN",
      "State": "Telangana"
    },
    {
      "City": "Jorapokhar",
      "Lat": 23.7,
      "Long": 86.41267,
      "country": "India",
      "iso2": "IN",
      "State": "Jharkhand"
    },
    {
      "City": "Brajrajnagar",
      "Lat": 21.82,
      "Long": 83.92,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    },
    {
      "City": "Talcher",
      "Lat": 20.95,
      "Long": 85.23,
      "country": "India",
      "iso2": "IN",
      "State": "Odisha"
    }
  ]
  return cities;
};
