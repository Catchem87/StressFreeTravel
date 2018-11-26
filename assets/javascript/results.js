$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    var flightResults =  JSON.parse(localStorage.getItem('options'));
    console.log(flightResults)

    var restaurantResults = JSON.parse(localStorage.getItem('restaurants'));
    console.log(restaurantResults)

    function createVariables(){
        var airlines = [];
        var departures = [];
        var returns = [];
        var prices = [];
        var destinationCodes = [];
        var destinations = [];

    for (var i = 0; i < flightResults.length; i++){
        airlines[i] = flightResults[i].airline
        departures[i] = flightResults[i].departure
        returns[i] = flightResults[i].return
        prices[i] = flightResults[i].price
        destinationCodes[i] = flightResults[i].destination
        }

    console.log(airlines)
    console.log(departures)
    console.log(returns)
    console.log(prices)
    console.log(destinationCodes)

    $('#airlineOne').html(airlines[0])
    $('#destinationOne').html(destinationCodes[0])
    $('#departure-dateOne').html(departures[0])
    $('#return-dateOne').html(returns[0])
    $('#priceOne').html('$' + prices[0])
        
    $('#airlineTwo').html(airlines[1])
    $('#destinationTwo').html(destinationCodes[1])
    $('#departure-dateTwo').html(departures[1])
    $('#return-dateTwo').html(returns[1])
    $('#priceTwo').html('$' + prices[1])

    $('#airlineThree').html(airlines[2])
    $('#destinationThree').html(destinationCodes[2])
    $('#departure-dateThree').html(departures[2])
    $('#return-dateThree').html(returns[2])
    $('#priceThree').html('$' + prices[2])
    }

    createVariables();

    // var city = {
    //     search(cityCode){
    
    //         var cityQueryURL = 'https://api.sandbox.amadeus.com/v1.2/location/' + cityCode + '?apikey=wMaXQOdEowMqQ7QJtcHGjjt67AxtGJ6K';
    
    //         $.ajax({
    //             url: cityQueryURL,
    //             method: 'GET',
    //         }).then(function(response){
    //             console.log(response)
    //             if(response.city.state === ''){
    //                 var city = (response.city.name + ', ' + response.city.country)
    //             }else {
    //                 var city = (response.city.name + ', ' + response.city.state)
    //             }
    //             console.log(city)
    
    //             cities[i] = {
    //                 'cityName': city,
    //             }
    //             console.log(cities[i])
    
    //             var cityResults = JSON.stringify(cities[i])
    //             localStorage.setItem('cityResults', cityResults)
    //             console.log(cityResults)
    //         })
    //     }
    // };
    

    if(flightResults !== 'null'){
        $('#resultDetailsOne').show()
        $('#flightDetailsOne').show()
        $('#resultDetailsTwo').show()
        $('#flightDetailsTwo').show()
        $('#resultDetailsThree').show()
        $('#flightDetailsThree').show()
    }else {
        $('resultDetailsOne').show()
    }

    if(restaurantResults !== 'null'){
        $('#restaurantDetailsOne').show()
        $('#restaurantDetailsTwo').show()
        $('#restaurantDetailsThree').show()
    }
})