$(document).ready(function () {
    $('#search-button').on("click", function() {
        let city = $("#search-value").val(); 
        searchCityWeather(city);

        $("#search-value").val("");

        searchCityWeather(city);
    });

    $(".history").on("click", "li", function(){
        searchCityWeather($(this).text());
    });

 var API_KEY = "166a433c57516f51dfab1f7edaed8413";

 function makeRow(text) {
    var li = $("<li>").addClass("list-group-item-action");

 }
    function searchCityWeather(city) {
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`,
            datatype: "json",
            success: function(data) { 
                console.log(data);
                $("tw-city_name").text(data["name"])
            } 
        })    
    }

});


 

 
