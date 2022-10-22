var canvas = document.getElementById("c1");
var painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(0, 0, 400, 400);//x, y, w, h

painter.fillStyle = "#FF0000";

for (var i = 0; i < 13; ++i ){
painter.fillRect (10+60*i,10,20,20);
painter.fillRect (40+60*i,40,20,20);
painter.fillRect (10+60*i,70,20,20);
painter.fillRect (40+60*i,100,20,20);
painter.fillRect (10+60*i,130,20,20);
painter.fillRect (40+60*i,160,20,20);
painter.fillRect (10+60*i,190,20,20);
painter.fillRect (40+60*i,220,20,20);
painter.fillRect (10+60*i,250,20,20);
painter.fillRect (40+60*i,280,20,20);
painter.fillRect (10+60*i,310,20,20);
painter.fillRect (40+60*i,340,20,20);
painter.fillRect (10+60*i,370,20,20);
painter.fillRect (40+60*i,400,20,20);
}

var canvas = document.getElementById("c2");
var painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(0, 0, 400, 400);//x, y, w, h

painter.fillStyle = "#FF0000";

for (var i = 0; i < 3; ++i){
    painter.fillRect (190,190,20,20);
    painter.fillRect (160+30*i,220,20,20);

for (var d = 0; d < 5; ++d){
        painter.fillRect (130+30*d,250,20,20);
        
for (var e = 0; e < 7; ++e){
    painter.fillRect (100+30*e,280,20,20)

    for (var f = 0; f < 9; ++f){
        painter.fillRect (70+30*f,310,20,20)
    
for (var g = 0; g < 11; ++g){  
    painter.fillRect (40+30*g, 340, 20, 20)
}
for (var h = 0; h < 13; ++h){  
    painter.fillRect (10+30*h, 370, 20, 20)
    }}}}}
