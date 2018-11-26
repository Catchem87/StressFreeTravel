var countries = {
    name: ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Virgin Islands", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Hong Kong, SAR China", "Macao, SAR China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo, (Kinshasa)", "Cook Islands", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia, Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint-Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint-Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic (Syria)", "Taiwan, Republic of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "US Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic)", "Viet Nam", "Virgin Islands, US", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
    code: ["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BIH", "BWA", "BVT", "BRA", "VGB", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "HKG", "MAC", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "ANT", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"],
}

var airportList = {
    name: [],
    code: []
}

var numberOfFlights = 3;
var numberOfHotels = 5;
var numberOfRestaurantsDay = 1;
var options = [];
var cities = [];
// map front-end buttons
const btnSearch = document.getElementById("searchFlight")


// map front-end input fields
const inputOrigin = document.getElementById("origin-input")
const inputDestination = document.getElementById("destination-input")
const inputStartDate = document.getElementById("start-date-input")
const inputEndDate = document.getElementById("end-date-input")
const inputOneWay = document.getElementById("one-way-input")
const inputDuration = document.getElementById("duration-input")
const inputDirectFlight = document.getElementById("direct-flight-input")
const inputMaxPrice = document.getElementById("max-price-input")
const inputAggregation_mode = document.getElementById("aggregation_mode_input")

const inputCitySearch = document.getElementById('city-search-input')

// Retrieve data from local storage

inputOrigin.value = localStorage.getItem("city");
inputStartDate.value = localStorage.getItem("startDate");
inputOneWay.value = (localStorage.getItem("oneWay") === true) ? 'One-Way' : 'Round-Trip';
inputDuration.value = localStorage.getItem("duration");
inputDirectFlight.value = (localStorage.getItem("direct") === true) ? 1 : 2;
inputMaxPrice.value = localStorage.getItem("max_price");

// Flight Inspiration Search Parameters

const api = {
    flight: {
        'key': 'wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K',
        'url': 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?',
    },
    airport: {
        'key': 'wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K',
        'url': 'https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?',
    },
  
    restaurant: {
        'key': "3af23862d3e820bbb9145cf83841a6c1",
        'url': "https://developers.zomato.com/api/v2.1/search?",
    },
    city: {
        'key': "3af23862d3e820bbb9145cf83841a6c1",
        'url': "https://developers.zomato.com/api/v2.1/cities?",
    }
}

var flight = {
    param: {
        'origin': "",
        'destination': "", //IATA Code
        'departure_date': "", //IATA Code
        'oneWay': false,
        'duration': "", //in days. It must be null if one-way is true
        'direct': false,
        'maxPrice': "", // Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
        'aggregationMode': "COUNTRY", //Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.
    },
    search() {
        flight.search.city = inputOrigin.value
        flight.search.origin = inputOrigin.value.substr(-4, 3);
        flight.search.departureDate = inputStartDate.value
        flight.search.oneWay = (inputOneWay.value === 1) ? true : false;
        flight.search.duration = inputDuration.value
        flight.search.direct = (inputDirectFlight.value === 1) ? true : false;
        flight.search.max_price = inputMaxPrice.value


        //set localstorage

        localStorage.setItem("city", flight.search.city);
        localStorage.setItem("startDate", flight.search.departureDate);
        localStorage.setItem("oneWay", flight.search.oneWay);
        localStorage.setItem("duration", flight.search.duration);
        localStorage.setItem("direct", flight.search.direct);
        localStorage.setItem("max_price", flight.search.max_price);

        // console.log(inputOrigin.value);
        var queryURL = api.flight.url + '&apikey=' +
            api.flight.key + '&origin=' + flight.search.origin

        // add the start day in the query
        if (flight.search.departureDate !== '') {
            queryURL += '&departure_date=' + flight.search.departureDate
        }

        // add the one-way option in the query
        if (flight.search.oneWay === true) {
            queryURL += '&one-way=' + true
        }

        // add the duration in the query
        if (flight.search.duration !== '') {
            queryURL += '&duration=' + flight.search.duration
        }

        // add the direct option in the query
        if (flight.search.direct === true) {
            queryURL += '&direct=' + true
        }

        // add the max price in the query
        if (flight.search.max_price !== "") {
            queryURL += '&max_price=' + flight.search.max_price
        }

        if (flight.param.aggregationMode !== "") {
            queryURL += '&aggregation_mode=' + flight.param.aggregationMode
        }

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)
            var apiCurrency = response.currency;
            var apiOrigin = response.origin;

            var length = response.results.length;

            if (length < numberOfFlights) { numberOfFlights = length };

            for (let i = 0; i < numberOfFlights; i++) {
                let apiDestination = response.results[i].destination
                let apiDepartureDate = response.results[i].departure_date
                let apiReturnDate = response.results[i].return_date
                let apiPrice = response.results[i].price
                let apiAirline = response.results[i].airline

                options.originAirport = flight.search.origin
                options.originCity = flight.search.city

                options[i] = {
                    'destination': apiDestination,
                    'departure': apiDepartureDate,
                    'return': apiReturnDate,
                    'price': apiPrice,
                    'airline': apiAirline
                }

                var optionList = JSON.stringify(options)

                localStorage.setItem('options', optionList)


                // console.log(apiDestination)
                city.search(apiDestination, i)
            }
        })
    },
};



var airport = {
    param: {
        'term': "",
        'country': "",
        'all_airports': false,
    },
    search() {
        airport.search.city = inputOrigin.value

        var airportQueryURL = api.airport.url + '&apikey=' +
            api.airport.key + '&term=' + inputOrigin.value

        $.ajax({
            url: airportQueryURL,
            method: 'GET',
        }).then(function (response) {
            airportList.name = [],
                airportList.code = [],

                response.forEach((item) => {
                    let city = item.label
                    airportList.name.push(item.label)
                    airportList.code.push(item.value)

                });
            // console.log(airportList.name)
            airportListFunc(document.getElementById("origin-input"), airportList.name);
        })
    }
}

var city = {
    search(cityCode, i) {

        var cityQueryURL = 'https://api.sandbox.amadeus.com/v1.2/location/' + cityCode + '?apikey=wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K';

        $.ajax({
            url: cityQueryURL,
            method: 'GET',
        }).then(function (response) {

            // console.log(response)
            options[i].city = response.city.name,
                options[i].state = response.city.state,
                options[i].lat = response.city.location.latitude,
                options[i].lon = response.city.location.longitude,
            
            city.detail(options[i].lat, options[i].lon, i)
            city.restaurants(options[i].lat, options[i].lon, i)
        })
    },
    restaurants(lat, lon, i) {

        var qty = flight.search.duration

        var queryRestaurantURL = api.restaurant.url +
            '&lat=' + lat +
            '&lon=' + lon +
            '&count=' + qty

        console.log(queryRestaurantURL)
        $.ajax({
            url: queryRestaurantURL,
            method: 'GET',
            headers: {
                'user-key': api.restaurant.key
            }
        }).then(function (response) {
            console.log(response)
            options[i].restaurants = [],
                response.restaurants.forEach(item => {
                    options[i].restaurants.push({
                        'name': item.restaurant.name,
                        'address': item.restaurant.location.address,
                        'city': item.restaurant.location.city,
                        'locality': item.restaurant.location.locality,
                        'localityVerbose': item.restaurant.location.locality_verbose,
                        'zipcode': item.restaurant.location.zipcode,
                        'cuisine': item.restaurant.cuisine,
                        'average_cost_for_two': item.restaurant.average_cost_for_two,
                        'currency': item.restaurant.currency,
                        'featured_image': item.restaurant.featured_image,
                        'menu': item.restaurant.menu_url,
                        'photo_url': item.restaurant.photo_url,
                        'thumb': item.restaurant.thumb,
                        'url': item.restaurant.thumb
                    })
                });
        })

      

    },

    detail(lat, lon, i) {
        var queryCityURL = api.city.url +
            '&lat=' + lat +
            '&lon=' + lon
        // console.log(lat + " " + lon)

        $.ajax({
            url: queryCityURL,
            method: 'GET',
            headers: {
                'user-key': api.restaurant.key
            }
        }).then(function (response) {
            // console.log(response)
            options[i].country = response.location_suggestions[0].country_name;
            options[i].country_flag_url = response.location_suggestions[0].country_flag_url;
            options[i].state_code = response.location_suggestions[0].state_code;
            options[i].state_name = response.location_suggestions[0].state_name;
        })

    }
};

btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    flight.search();
    window.location = "results.html"
});

inputOrigin.addEventListener("keydown", function (e) {
    var charNum = inputOrigin.value.length

    airportList.name = [],
        airportList.code = []

    airport.search()

});

function airportListFunc(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", showList);

    function showList() {

        var a, b, i, val = this.value;

        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);

        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            b.innerHTML = arr[i];
  
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/


            b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
    };
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
            //   getCountryCode(); // CUSTOM INSERCTION FOR OUR PROJECT
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
