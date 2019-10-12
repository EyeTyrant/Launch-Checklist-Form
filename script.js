// Write your JavaScript code here!

function updateChecklist(e) {
   e.preventDefault();
   let pilot = document.querySelector("input[name=pilotName]").value;
   let copilot = document.querySelector("input[name=copilotName").value;
   let fuel = document.querySelector('input[name=fuelLevel').value;
   let cargo = document.querySelector('input[name=cargoMass').value;
   // let faulty = document.querySelector('#faultyItems');
   let pilotStat = document.getElementById('pilotStatus');
   let copilotStat = document.querySelector('#copilotStatus');
   let fuelStat = document.querySelector('#fuelStatus');
   let cargoStat = document.querySelector('#cargoStatus');
   let status = document.querySelector('#launchStatus');
   let notReadyMsg = `Shuttle not ready for launch`;
   let readyMsg = `Shuttle ready for launch, LET'S LIGHT THIS CANDLE!`;
   let ready = 0;
   let charVal = /^[a-z\s]+$/ig;
   let numVal = /^[0-9]+$/ig;
   
   if (pilot.match(charVal)){
      pilotStat.style.visibility = 'visible';
      pilotStat.innerHTML = `${pilot}`;
      ready += 1;
   } else {
      pilotStat.style.visibility = 'hidden';
      pilot = '';
      e.preventDefault();
      alert('Please enter valid pilot name.');
   }
   
   if (copilot.match(charVal)){
      copilotStat.style.visibility = 'visible';
      copilotStat.innerHTML = `${copilot}`;
      ready += 1;
   } else {
      copilotStat.style.visibility = 'hidden';
      copilot = '';
      e.preventDefault();
      alert('Please enter valid co-pilot name.');
   }
   
   if (fuel.match(numVal)){
      if (fuel < 10000){
         fuelStat.innerHTML = `Sadly ${pilot}, ${fuel} liters of rum is not enough fuel for the journey.`;
         fuelStat.style.visibility = 'hidden';
      } else {
         fuelStat.style.visibility = 'visible';
         fuelStat.innerHTML = `${fuel} liters of rum is plenty for the journey ${pilot}.`;
         ready += 1;
      }
   } else {
      fuelStat.style.visibility = 'hidden';
      e.preventDefault();
     alert('Please enter valid fuel information.');
   }  

   if (cargo.match(numVal)){
      if (cargo > 10000) {
         cargoStat.innerHTML = `Unfortunately ${copilot}, ${cargo} kilograms of tequila has too much mass for the journey.`;
         cargoStat.style.visibility = 'hidden';
      } else {
         cargoStat.innerHTML = `${cargo} kilograms of tequila is just enough to make the trip ${copilot}`;
         cargoStat.style.visibility = 'visible';
         ready += 1;
      } 
   } else {
      cargoStat.style.visibility = 'hidden';
      e.preventDefault();
      alert('Please enter valid cargo information.');
   }
   
   if (ready === 4){
      status.innerHTML = `${readyMsg}`;
      status.style.color = 'green';
   } else {
      status.innerHTML = `${notReadyMsg}`;
      status.style.color = 'red';
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
