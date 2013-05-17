$(document).ready(function(){
	
	  //var r = Raphael(document.getElementById("triangle"), 400, 400);
 

           // var Paper = Raphael(document.getElementById("triangle"), 400, 400);
          //var r = Raphael(10, 50, 320, 200); 
          //(250 wide X 500 HIGH)
          var r = Raphael(document.getElementById("canvas1"),250,300);
 var path = r.path("M 150 0 L 0 250 L 300 250 z");

var w = 300;
var h = 300;

r.setViewBox(0,0,w,h,true);
var svg = document.querySelector("svg");
svg.removeAttribute("width");
svg.removeAttribute("height");
//"M 0 0 L460 225 L920 0 z");
 //window.onload = function () {
/*var w = 800;
var h = 300;

r.setViewBox(0,0,w,h,true);

var w = 287;
var h = 287;
var svg = document.querySelector("svg");
svg.removeAttribute("width");
svg.removeAttribute("height");
r.setViewBox(0,0,w,h,true);
*/
// ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
/*var svg = document.querySelector("svg");
svg.removeAttribute("width");
svg.removeAttribute("height");
//<path d="M0 0 L100 100 L200 0 Z" />
 var pathy = r.path("M 150 0 L314 287 L478 0 z");
  var path3 = r.path("M 800 0 L964 290 L1130 0 z");
  var y = r.path("M 910 424 L374 424 L638 0 z");
path.attr({fill: 'white'});
path3.attr({fill: 'black'});
pathy.attr({fill:'green', stroke:'none'});
y.attr({fill:'url("apple.png")'});

r.print(300, 100, "Test string", r.getFont("Times", 800), 30);
r.text(300, 100, "Raphaël\nkicks\nbutt!");
//pathy.transform("s0.25,0.25,0,0");
//y.attr({fill:'black'});

pathy.mouseover(function(){this.attr({fill: 'white', text: 'moonkey'})});
y.mouseout(function(){this.attr({fill: 'white'})});
path.mouseover(function(){this.attr({fill: '#FFF6F1'})});
path.mouseout(function(){this.attr({fill: 'white'})});
pathy.mouseover(function(){this.attr({fill: '#FFF6F1'})});
pathy.mouseout(function(){this.attr({fill: 'url("apple.png")'})});


}*/});