var app = function() {


// to write to DOM
 var cat1 = {
  name:  "Spooky",
  favouriteFood:  "Sock Fluff",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
    
 }

var cat2 = {
  name:  "Magic",
  favouriteFood:  "Tuna",
  image:  "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"

 }

var cat3 = {
  name:  "Max",
  favouriteFood:  "Whiskas Temptations",
  image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
 }


  cats = [cat1, cat2, cat3];

  processCats(cats);

};


var processCats = function(cats) {

   for (cat of cats) {
    addCat(cat.name, cat.favouriteFood, cat.image)
   }


}

var addCat = function(catName, favouriteFood, catImage) {

   var section = document.createElement('section');
   section.classList.add('cat');
   
   var nameDiv = document.createElement('div');
   nameDiv.innerText = catName + " ";


   var foodDiv = document.createElement('div');
   foodDiv.innerText = favouriteFood + " ";

   var image = document.createElement('img');
   image.src = catImage;
   image.width = 200;
   

   section.appendChild(nameDiv);
   section.appendChild(foodDiv);
   section.appendChild(image);

   var cats = document.querySelector('#cats');
   cats.appendChild(section);

}


window.onload = app;
