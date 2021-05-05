canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y= 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://friendlystock.com/wp-content/uploads/2020/04/6-formula-one-racing-car-cartoon-clipart.jpg";
car2_x = 10;
car2_y= 100;

background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";


function add(){
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

car1_imgtag=new Image();
car1_imgtag.onload=uploadcar1;
car1_imgtag.src=car1_image;

car2_imgtag=new Image();
car2_imgtag.onload=uploadcar2;
car2_imgtag.src=car2_image;
}
function uploadBackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
    }

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
    }


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed =e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        car1_up();
        console.log("up");
    }

    if(keyPressed =='40')
    {
        car1_down();
        console.log("down");
    }

    if(keyPressed =='37')
    {
        car1_left();
        console.log("left");
    }

    if(keyPressed =='39')
    {
        car1_right();
        console.log("right");
    }

    if(keyPressed =='87')
    {
        car2_w();
        console.log("w");
    }

    if(keyPressed =='83')
    {
        car2_s();
        console.log("s");
    }

    if(keyPressed =='65')
    {
        car2_a();
        console.log("a");
    }

    if(keyPressed =='68')

    {
        car2_d();
        console.log("d");
    }


  if (car1_x > 700)  {

console.log("car1 won")
document.getElementById("game_status").innerHTML = "CAR 1 WON!!!"
  }

  if (car2_x > 700)  {

    console.log("car2 won")
    document.getElementById("game_status").innerHTML = "CAR 2 WON!!!"
      }
    
}


function  car1_up(){
    if (car1_y >=0)
    {

        car1_y = car1_y -10;
        
        console.log("When up arrow is pressed, x=" + car1_x + " | y ="+ car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
    
    }
    
    function car1_down(){
        if (car1_y <= 500){

           car1_y = car1_y+ 10;
            console.log("When down arrow is pressed, x=" + car1_x + " | y ="+ car1_y);
             uploadBackground();
             uploadcar1();
             uploadcar2();
        }
    }
    
    function car1_left(){
        if (car1_x >= 0){
            car1_x =car1_x - 10;
    
            console.log("When left arrow is pressed, x=" + car1_x + " | y ="+ car1_y);
             uploadBackground();
             uploadcar1();
             uploadcar2();
        }
    }
    
    function  car1_right(){
        if (car1_x <= 700){
            car1_x = car1_x+ 10;
    
            console.log("When right arrow is pressed, x=" + car1_x + " | y ="+ car1_y);
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }


    }

    
function  car2_w(){
    if (car2_y >=0)
    {

        car2_y = car2_y -10;
        
        console.log("When up arrow is pressed, x=" + car2_x + " | y ="+ car2_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
    
    }
    
    function car2_s(){
        if (car2_y <= 500){

           car2_y = car2_y+ 10;
            console.log("When down arrow is pressed, x=" + car2_x + " | y ="+ car2_y);
             uploadBackground();
             uploadcar1();
             uploadcar2();
        }
    }
    
    function car2_a(){
        if (car2_x>= 0){
            car2_x =car2_x - 10;
    
            console.log("When left arrow is pressed, x=" + car2_x + " | y ="+ car2_y);
             uploadBackground();
             uploadcar1();
             uploadcar2();
        }
    }
    
    function  car2_d(){
        if (car2_x <= 700){
            car2_x = car2_x+ 10;
    
            console.log("When right arrow is pressed, x=" + car2_x + " | y ="+ car2_y);
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }


    }