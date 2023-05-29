fetch('data.json').then(response=>response.json()).then(allaccordion=>
  {
  // console.log(allaccordion)
  const accordion = document.querySelector(".accordion");
let maxFaq = 0;
let currentIndex = 5; // Initial index to show accordions

// Initially show five accordions
// console.log(allaccordion.slice(0, currentIndex))
createFaq(allaccordion.slice(0, currentIndex));

function createFaq(allaccordion) 
{
  // console.log(allaccordion["allaccordion"]);
  for (let i = 0; i < allaccordion.length; i++) 
  {
    let accord = allaccordion[i];
    // console.log(accord)
    let accordCon = document.createElement("div");

    accordCon.innerHTML = `
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" id="${accord.id}" type="button" data-toggle="collapse" data-target="#collapse${accord.id}" aria-expanded="true" aria-controls="collapse${accord.id}">
          ${accord.Question}
        </button>
      </h2>
      <div id="collapse${accord.id}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
          ${accord.Answer}
        </div>
      </div>
    `;
    accordion.append(accordCon);
  }
maxFaq+=allaccordion.length;
}

// Add event listener to show additional accordions on click
accordion.addEventListener('click', function(e) 
{
  let area=e.target.getAttribute("aria-expanded")
  console.log(area);
  if((area=="true")&&(maxFaq<20)){
  
     let start=maxFaq;
     let end=start+3;
     console.log(start,end)
    createFaq(allaccordion.slice(start,end)  )                                        
  }

});
  })