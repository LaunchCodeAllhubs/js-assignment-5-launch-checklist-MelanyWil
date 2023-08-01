// Write your JavaScript code here!


window.addEventListener("load", function() {

    
    const launchStatus = document.getElementById('launchStatus');


    document.addEventListener('submit', function(event) {
        event.preventDefault();
        const pilot = document.querySelector('input[name=pilotName]').value;
        const copilot = document.querySelector('input[name=copilotName]').value;
        const fuel = document.querySelector('input[name=fuelLevel]').value;
        const cargo = document.querySelector('input[name=cargoMass]').value;
        const list = document.getElementById("faultyItems");
        
        formSubmission(document, list, pilot, copilot, fuel, cargo);
        

    });


    
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});