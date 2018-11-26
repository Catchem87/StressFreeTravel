$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    var flightResults =  JSON.parse(localStorage.getItem('options'));
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

    $('#airlineOne').html(airlines[0])
    $('#destinationOne').html(destinations[0])
    $('#departure-dateOne').html(departures[0])
    $('#return-dateOne').html(returns[0])
        
    $('#airlineTwo').html(airlines[1])
    $('#destinationTwo').html(destinations[1])
    $('#departure-dateTwo').html(departures[1])
    $('#return-dateTwo').html(returns[1])

    $('#airlineThree').html(airlines[2])
    $('#destinationThree').html(destinations[2])
    $('#departure-dateThree').html(departures[2])
    $('#return-dateThree').html(returns[2])


    }

    createVariables();

    

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

    // if(restaurantResults !== 'null'){
    //     $('#restaurantDetailsOne').show()
    //     $('#restaurantDetailsTwo').show()
    //     $('#restaurantDetailsThree').show()
    })
