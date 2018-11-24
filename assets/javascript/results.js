$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    var flightResults =  JSON.parse(localStorage.getItem('flightResults'));
    console.log(flightResults)

    function createVariables(){
        var airlines = [];
        var departures = [];
        var returns = [];
        var prices = [];
        var destinations = [];

    for (var i = 0; i < flightResults.length; i++){
        airlines[i] = flightResults[i].airline
        departures[i] = flightResults[i].departure
        returns[i] = flightResults[i].return
        prices[i] = flightResults[i].price
        destinations[i] = flightResults[i].destination
        }
    console.log(airlines)
    console.log(departures)
    console.log(returns)
    console.log(prices)
    console.log(destinations)
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