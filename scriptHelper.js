// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">
  `
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
    const launchStatus = document.getElementById('launchStatus');
  
    

    console.log(pilot);
    console.log(copilot);
    console.log(fuelLevel);
    console.log(cargoLevel);
    

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
        
    }  else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Enter valid information for each field")
    
    } else {
        list.style.visibility = 'visible';
       
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
        if (fuelLevel < 10000 && cargoLevel < 10000) {
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = '#C7254E';
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    } else if (fuelLevel > 10000 && cargoLevel > 10000) {
        launchStatus.style.color = '#C7254E';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatus.style.color = '#C7254E';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';

    } else {
        launchStatus.style.color = '#419F6A';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }
        

    }

}

async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planetsReturned = await response.json();
    
    return planetsReturned;
    
}


function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
