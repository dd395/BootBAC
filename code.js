$(document).ready(
    function () {

        //add event handlers
        $("#calcButton").click(calculateBac);


        //add program logic

        function calculateBac()
        {

            //get data from form
            var numBeers = parseFloat($("#myBeers").val());
            var numWine = parseFloat($("#myWine").val());
            var numShots = parseFloat($("#myShots").val());
            var numWeight = parseFloat($("#myWeight").val());
            var numHours = parseFloat($("#myHours").val());

            //parse to numbers
            //do the math
            //1 beer = 0.54 liquid ounces of alcohol
            //1 glass of wine =0.6 liquid ounces of alcohol
            //1 shot = 0.6 liquid ounces of alcohol
            //average alcohol absorption rate = total liquid ounces of alcohol consumed*7.5
            //bac = average alcohol absorption rate/weight(lbs)
            //recRate = (hours since last drink *0.015)
            //BAC= bac-recRate(round to 3 decimal places)

            //Calculate alcohol content in consumed beers(liquid ounces)
            var alcBeers = numBeers * 0.54;

            //Calculate alcohol content in consumed wine(liquid ounces)
            var alcWine = numWine * 0.6;

            //Calculate alcohol content in consumed shots(liquid ounces)
            var alcShots = numShots * 0.6;

            //Calculate average alcohol consumption  rate
            var alcConRate = (alcBeers + alcWine + alcShots) * 7.5;

            //Calculate the absorb rate
            var bac = alcConRate / numWeight;

            //Recovery
            var recRate = (numHours * 0.015);

            //BAC= bac-recRate(round to 3 decimal places)

            var alcBac = bac- recRate;


            //put results in spans
            $("#alcOutput").text(alcBac.toFixed(3));
            $("p.output").show();
        }
    }
);
