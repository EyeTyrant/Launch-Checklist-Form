// Write your JavaScript code here!


function updateChecklist(e) {
   e.preventDefault();
   let pilot = document.querySelector("input[name=pilotName]").value;
   let copilot = document.querySelector("input[name=copilotName").value;
   let fuel = document.querySelector('input[name=fuelLevel').value;
   let cargo = document.querySelector('input[name=cargoMass').value;
   let faulty = document.querySelector('#faultyItems');
   let pilotStat = document.getElementById('pilotStatus');
   let copilotStat = document.querySelector('#copilotStatus');
   let fuelStat = document.querySelector('#fuelStatus');
   let cargoStat = document.querySelector('#cargoStatus');
   let status = document.querySelector('#launchStatus');
   
   if (pilot === '' || copilot === '' || fuel === ''|| isNaN(fuel) || cargo === '' || isNaN(cargo)){
      e.preventDefault();
      alert('Please enter valid information.');   
   }

   pilotStat.style.visibility = 'visible';
   pilotStat.innerHTML = `${pilot}`;
   copilotStat.style.visibility = 'visible';
   copilotStat.innerHTML = `${copilot}`;
   
   if (fuel < 10000) {
      fuelStat.style.visibility = 'visible';
      fuelStat.innerHTML = `${fuel} liters of rum is not enough fuel for the journey`;
      status.innerHTML = `Shuttle not ready for launch`;
      status.style.color = 'red';
   } else {
      status.innerHTML = `Shuttle is ready for launch`;
      status.style.color = 'green';
   
   }
   if (cargo > 10000) {
      cargoStat.style.visibility = 'visible';
      cargoStat.innerHTML = `${cargo} kilograms of tequila has too much mass for the journey`;
      status.innerHTML = `Shuttle not ready for launch`;
      status.style.color = 'red';
   } else {
      status.innerHTML = `Shuttle is ready for launch`;
      status.style.color = 'green';
   }


      }

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", updateChecklist);
})





























/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
