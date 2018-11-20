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


// Flight Inspiration Search Parameters


const api = {
    flight: {
        'key': 'wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K',
        'url': 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?',
        'method': 'GET',
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
        'aggregationMode': "", //Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.
    },

    search() {

        flight.search.origin = inputOrigin.value
        flight.search.destination = inputDestination.value
        flight.search.startDate = inputStartDate.value //start date for the departure range period
        flight.search.endDate = inputEndDate.value //end date for the departure range period
        flight.search.departureDate = (flight.search.endDate !== "") ?
            flight.search.startDate + '--' + flight.search.endDate :
            flight.search.startDate;
        flight.search.oneWay = inputOneWay.checked
        flight.search.duration = inputDuration.value
        flight.search.direct = inputDirectFlight.checked
        flight.search.max_price = inputMaxPrice.value


        // console.log(inputOrigin.value);
        var queryURL = api.flight.url + '&apikey=' +
            api.flight.key + '&origin=' + flight.search.origin

        // add the destination in the query
        if (flight.search.destination !== '') {
            queryURL += '&destination=' + flight.search.destination
        }

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
        console.log(flight.search.max_price)
        if (flight.search.max_price !== "") {
            queryURL += '&max_price=' + flight.search.max_price
        }

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: api.flight.method,
        }).then(function (response) {
            console.log(response)
            var apiCurrency = response.currency;
            var apiOrigin = response.origin;

            var length = response.results.length;

            var numberOfResults = 10 // configurable

            console.log('from:' + apiOrigin + '. Found ' + length + ' results')

            for (let i = 0; i < numberOfResults; i++) {
                let apiDestination = response.results[i].destination
                let apiDepartureDate = response.results[i].departure_date
                let apiReturnDate = response.results[i].return_date
                let apiPrice = response.results[i].price
                let apiAirline = response.results[i].airline

                console.log(apiAirline + " | " + apiDestination + ' ' + apiDepartureDate + ' ' + apiReturnDate + ':' + apiCurrency + apiPrice)

            }
        })
    },
};





btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    flight.search();
});
