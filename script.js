$.ajax({
    url: 'https://data.cityofnewyork.us/resource/ia2d-e54m.json',
    dataType: 'json',
    success: function(data) {
        document.write("<h1> Water Consumption in New York City (1979 - 2019)");
        var year = Math.floor(prompt("Please input a year in between 1978 and 2020"));
           if(year <= 1978){
                document.write("<br>There is no data for the year " + year +"!");
            } else if(year >= 2020){
                document.write("<br>There is no data for the year " + year +"!");
            }
        for(i = 0; i < data.length; i++){
            var Array = [];
            Array.push(data[i].year + ", " + data[i].new_york_city_population + ", " + data[i].nyc_consumption_million_gallons_per_day);
            if(year == data[i].year){
                document.write("<br>");
                document.write("<br>");
                document.write("Year: " + data[i].year);
                document.write("<br>");
                document.write("<br>");
                document.write("Population in New York City: " + Math.floor(data[i].new_york_city_population).toLocaleString() + " people");
                document.write("<br>");
                document.write("<br>");
                document.write(" Water Consumption: " + Number(data[i].nyc_consumption_million_gallons_per_day).toLocaleString() + " gallons of water per person per day");
            }

        }

    }
});
