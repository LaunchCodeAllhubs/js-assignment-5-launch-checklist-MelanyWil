// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let testInputNum = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInputNum)) {
        return "Not a Number";
    } else if (isNaN(testInputNum) === false) {
        return "Is a Number";
    }
   
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
  
    

    console.log(pilot);
    console.log(copilot);
    console.log(fuelLevel);
    console.log(cargoLevel);
    console.log(launchStatus.innerHTMl)
    

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
        
    }  else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Enter valid information for each field")
    
    } else {
        list.style.visibility = 'visible';
       
        pilotStatus.innerHTMl = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTMl = `Co-pilot ${copilot} is ready for launch`
        if (fuelLevel < 10000 && cargoLevel < 10000) {
            launchStatus.innerHTMl = 'Status not Ready For Launch';
            launchStatus.style.color = '#C7254E';
            fuelStatus.innerHTMl = 'Fuel level too low for launch';
            cargoStatus.innerHTMl = 'Cargo mass low enough for launch';
    } else if (fuelLevel > 10000 && cargoLevel > 10000) {
        launchStatus.style.color = '#C7254E';
        launchStatus.innerHTMl = 'Status not Ready For Launch';
        fuelStatus.innerHTMl = 'Fuel level high enough for launch';
        cargoStatus.innerHTMl = 'Cargo mass too heavy for launch';

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatus.style.color = '#C7254E';
        launchStatus.innerHTMl = 'Status not Ready For Launch';
        fuelStatus.innerHTMl = 'Fuel level too low for launch';
        cargoStatus.innerHTMl = 'Cargo mass too heavy for launch';

    } else {
        launchStatus.style.color = '#419F6A';
        launchStatus.innerHTMl = 'Shuttle is Ready for Launch';
        fuelStatus.innerHTMl = 'Fuel level high enough for launch';
        cargoStatus.innerHTMl = 'Cargo mass low enough for launch';
    }
        

    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
