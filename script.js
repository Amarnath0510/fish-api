
 document.body.innerHTML=`<section class="specie-container"></section>`;
 async function getAllSpecies(){
    

 const species= await data.json();
 const specieContainer=document.querySelector(".specie-container");
 async function getAllSpecies(){
    
      const data = await fetch (
          "https://www.fishwatch.gov/api/species",
      {
          method:"GET",
     headers:{"Content-type":"application/json"},
      body:JSON.stringify({Habitat:productHabitat})
      }
       const productHabitat= await data.json();
      );      const productHabitat= await data.json();
      const productHabitat= await data.json();
       const specieContainer=document.querySelector(".specie-container");
       specieContainer.innerHTML="";
   species.forEach(specie=>{
       specieContainer.innerHTML+=`
      <div class="specie-container">
      <p>${specie.Habitat}</p>
      </div>
       `;

   }); 
   console.log(species); 
 }
 getAllSpecies();
