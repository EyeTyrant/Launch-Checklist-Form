// Write your JavaScript code here!

window.addEventListener('load', function() {
   let form = document.querySelector('form');
   form.addEventListener('submit', function(e){
      let pilot = document.querySelector('input[name=pilotName]').value;
      let copilot = document.querySelector('input[name=copilotName').value;
      let fuel = document.querySelector('input[name=fuelLevel').value;
      let cargo = document.querySelector('input[name=cargoMass').value;
      
      if (pilot === '' || copilot === ''){
         e.preventDefault();
         alert('Please enter a valid names for Pilot and Co-pilot.');   
      }
      if (fuel === ''|| isNaN(fuel) || cargo === '' || isNaN(cargo)){
         e.preventDefault();
         alert('Please enter a valid number for Fuel Level and Cargo Mass.')
      }
   });



});




























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
