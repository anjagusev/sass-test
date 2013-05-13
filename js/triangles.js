$(document).ready(function(){
   window.onload = function () {
            var Paper = Raphael(document.getElementById("triangle"), 400, 400);
          var r = Raphael(document.getElementById("testT"));
 var path = Paper.path("M 0 287 l 159 -287 l 159 287 z");

  //<path d="M0 0 L100 100 L200 0 Z" />
 var pathy = r.path("M 150 0 L314 287 L478 0 z");
  var path3 = r.path("M 800 0 L964 290 L1130 0 z");
  var y = r.path("M 910 424 L374 424 L638 -50 z");
path.attr({fill: 'white'});
path3.attr({fill: 'black'});
pathy.attr({fill:'url("apple.png")'});
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


}});