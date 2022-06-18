
//fetch JSON data from file
fetch('./data/data.json')
          .then(function (response) {
              return response.json();
          })
          //address JSON data here
          .then(function (data) {
              appendData(data);
          })
          //catch error if fail to load
          .catch(function (err) {
              console.log('error: ' + err);
          });
//insert JSON data, pass to cards
function appendData(data) {
const cards = data;
//hook to body of HTML
const container = document.querySelector('#template-hook');
  // Loop through all elements of the list
 let cardList = cards.map(function(el) {
    // Build HTML code
  let list = document.createElement('div');
//create template literal card
    list.innerHTML =
   `


    <div class="col-sm-6 col-lg-4 arrayz">
     <div class="card card-overlay-bottom card-image-scale">
       <!-- Card Image -->
       <img src=${el.pic} alt=${el.title}>
       <!-- Card Image overlay -->
       <div class="card-img-overlay d-flex flex-column p-3 p-md-4">
           <div class="w-100 mt-auto">
           <!-- Card title -->
           <h4 class="text-white"><a href=${el.link} class="btn-link text-reset stretched-link">${el.title}</a></h4>
           <!-- Card info -->
</div>
</div>
</div>
</div>

    `;
    // Insert HTML into page
    container.append(list);
});
}
