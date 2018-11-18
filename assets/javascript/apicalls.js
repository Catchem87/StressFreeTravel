// map front-end buttons
const btnSearch = document.getElementById("searchFlight")

// map front-end input fields
const inputOrigin = document.getElementById("origin-input")
const inputDestination = document.getElementById("destination-input")
const inputStartDate = document.getElementById("start-date-input")
const inputOneWay = document.getElementById("one-way-input")
const inputDuration = document.getElementById("duration-input")
const inputDirectFlight = document.getElementById("direct-flight-input")
const inputMaxPrice = document.getElementById("max-price-input")


// Flight Inspiration Search Parameters


const api = {
    flight : {
        'key': 'wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K',
        'url': 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?',
        'method': 'GET',
    }
}

var param = {
    flight : {
        'origin':"",
        'destination':"", //IATA Code
        'departure_date':"", //IATA Code
        'oneWay':false,
        'duration':"", //in days. It must be null if one-way is true
        'direct':false,
        'maxPrice': "", // Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
        'aggregationMode': "", //Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.
    }
};

var search = {
    flight() {



    // param.flight.origin = inputOrigin.value
    // param.flight.destination = inputDestination.value
    // param.flight.departureDate = inputStartDate.value
    // param.flight.oneWay = inputOneWay.value
    // param.flight.duration = inputDuration.value
    // param.flight.direct = inputDirectFlight.value
    // param.flight.max_price = inputMaxPrice.value

    // console.log(inputOrigin.value);
    var queryURL = api.flight.url + '&apikey=' + 
    api.flight.key + '&origin=' + inputOrigin.value
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: api.flight.method,
    }).then(function(response){
        console.log(response)
    });
   
}
}


btnSearch.addEventListener("click", function(e){
    e.preventDefault();
    search.flight();
});
