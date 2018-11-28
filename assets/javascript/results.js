$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
})


var results = localStorage.getItem('fullResults')
var resultsParse = JSON.parse(results)
console.log(resultsParse)

var airlines = [];
var departures = [];
var returns = [];
var prices = [];
var cities = [];
var countries = [];
var restaurants = [];

// function createVariables(){
//         console.log('start func')

// }

// function showFlights(){

for (var i = 0; i < resultsParse.length; i++) {
    airlines[i] = resultsParse[i].airline
    departures[i] = resultsParse[i].departure
    returns[i] = resultsParse[i].return
    prices[i] = resultsParse[i].price
    cities[i] = resultsParse[i].city
    // countries[i] = resultsParse[i].country
    restaurants[i] = resultsParse[i].restaurants

    if (restaurants.length > 0) {
        // console.log(restaurants[i])

        $('#airlineOne').html(airlines[0])
        $('#destinationOne').html(cities[0])
        $('#departure-dateOne').html(departures[0])
        $('#return-dateOne').html(returns[0])
        $('#priceOne').html('$' + prices[0])

        $('#airlineTwo').html(airlines[1])
        $('#destinationTwo').html(cities[1])
        $('#departure-dateTwo').html(departures[1])
        $('#return-dateTwo').html(returns[1])
        $('#priceTwo').html('$' + prices[1])

        $('#airlineThree').html(airlines[2])
        $('#destinationThree').html(cities[2])
        $('#departure-dateThree').html(departures[2])
        $('#return-dateThree').html(returns[2])
        $('#priceThree').html('$' + prices[2])

        if (airlines !== '') {
            $('#resultDetailsOne').show()
            $('#flightDetailsOne').show()
            $('#resultDetailsTwo').show()
            $('#flightDetailsTwo').show()
            $('#resultDetailsThree').show()
            $('#flightDetailsThree').show()
        } else {
            $('resultDetailsOne').show()
        }

        if (restaurants !== '') {
            $('#restaurantDetailsOne').show()
            $('#restaurantDetailsTwo').show()
            $('#restaurantDetailsThree').show()
        }
    }
}

['One', 'Two', 'Three'].forEach(function(destinationNumber, j){
    if(restaurants[j] !== undefined){
        for (var g = 0; g < restaurants[j].length; g++){
            var p = $('<p>')
            p.html("Recommendation: <span class='restaurant-display'>" + restaurants[j][g].name + "</span>")
            $('#restaurantDetails' + destinationNumber).append(p)
        }
    }else {
        var p = $('<p>')
        p.html("Sorry No Restaurant Recommendations Available")
        $('#restaurantDetails' + destinationNumber).append(p)
    } 
})



// }


// var number = restaurants[i].length

// for (let j = 0; j < number; j++) {
//     console.log(restaurants[i][j].name)
// }


// if(restaurants !== 'null'){
//     // restaurants.forEach((item)=>{
//     //     // var p = $('<p>')
//     //     // p.html("'Name'" + "<span id='restaurantOne-results'>" + item.name + "</span>")
//     //     // $('#restaurantDetailsOne').append(p)
//     //     console.log(restaurants)
//     //     console.log(item)
	
//     // })
//     // $('#restaurantDetailsOne').show()
//     // $('#restaurantDetailsTwo').show()
//     // $('#restaurantDetailsThree').show()
// }

// createVariables();
// showFlights();

