/*   
  Hi Hanna! Hope that you have a great summer! I've really loved 
  having you as a teacher, and hopefully I will get to take another 
  one of your classes next year. 

  - reece 
*/    
 
class ColorBlock {
  constructor(color) {
    this.color = color; 
  }

  render() {
    let box = $("<div></div>").addClass("clr-box"); 

    box.css("background-color", this.color);  
    box.attr("data-color", this.color);

    $("#colorPanel").append(box); 
  }
}




let reeceFruits = [{
    fruit: "apple", 
    color: "green",
    image: "./public/apple.png",
    desc: "Apples are tasty and grow on trees!"
  },

  {
    fruit: "pear", 
    color: "green",
    image: "./public/pear.png",  
    desc: "Pears are green when they are ripe, and delicious!" 
  },
  {
    fruit: "mango", 
    color: "red",  

    image: "./public/mango.png", 
    desc: "Mangoes are juicy and super awesome!"
    
  }];



class Fruit {

  constructor(fruit, color, image, desc) {
    this.fruit = fruit; 

    this.color = color;
    this.image = image; 
    this.desc = desc;
  }

  render() {
    let card = $("<section></section>").addClass("fruit-card");
    card.attr("data-color", this.color); 
  
    card.append($("<h4></h4>").text(this.fruit));
    card.append($("<img>").attr("src", this.image)); 

    card.append("<p>" + this.desc + "</p>"); 

    card.hide();
    $("#fruitDesc").append(card);
  }   

}


let done = [];    
reeceFruits.forEach(function (f) {
  if (!done.includes(f.color)) {
    done.push(f.color);

    new ColorBlock(f.color).render();

  } 
}
);   

for (let f of reeceFruits) { 
  let fr = new Fruit(f.fruit, f.color, f.image, f.desc);
  
  fr.render(); 

}  
  

$("#colorPanel").on("click", ".clr-box", function () {
  let c = $(this).data("color"); 

  $(".clr-box").css("box-shadow", "none");  

  $(this).css("box-shadow", "0 0 10px 3px black");
  $(".fruit-card").hide();  

  $(".fruit-card").each(function () {

    if ($(this).data("color") == c) { 
      $(this).show(); 
  } 
  }
); 
});




