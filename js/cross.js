  $(document).ready(function(){
   window.onload = function () {
 
             //var Paper = Raphael(document.getElementById("triangle"), 400, 400);
          //var r = Raphael(document.getElementById("testT"));
 //var path = Paper.path("M 0 287 l 159 -287 l 159 287 z");
          var r = Raphael(document.getElementById("testT"), 400, 400);
 //var path = Paper.path("M 0 287 l 159 -287 l 159 287 z");

var w = 920;
var h = 450

r.setViewBox(0,0,w,h,true);

// ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
var svg = document.querySelector("svg");
svg.removeAttribute("width");
svg.removeAttribute("height");


   var x = r.path("M 0 0 L460 225 L920 0 z");
    
  var y = r.path("M 920 450 L460 225 L920 0 z");
    var z = r.path("M 0 0 L460 225 L 0 450 z");
    
    var l = r.path("M 0 450 L460 225 L 920 450 z");
   

 /*   var x = r.path("M 0 0 L200 187 L420 0 z");
    

    
  var y = r.path("M 420 350 L200 187 L420 0 z");
    var z = r.path("M 0 0 L200 187 L 0 350 z");
    
    var l = r.path("M 0 350 L200 187 L 420 350 z");*/
  
   //x.attr({fill:'url("images/triangletop_hover.png")', stroke:'none'});
     y.attr({fill:'url("images/triangleright_hover.png")', stroke:'none'});
   l.attr({fill:'url("images/trianglebottom_hover.png")', stroke:'none'});
     z.attr({fill:'url("images/triangleleft_hover.png")', stroke:'none'});


//x.mouseout(function(){this.attr({fill:'url("images/triangletop_hover.png")'})});
y.mouseout(function(){this.attr({fill: 'url("images/triangleright_hover.png")'})});
z.mouseout(function(){this.attr({fill: 'url("images/triangleleft_hover.png")'})});
l.mouseout(function(){this.attr({fill: 'url("images/trianglebottom_hover.png")'})});


//x.mouseover(function(){this.attr({fill:'url("images/triangletop.png")'})});
y.mouseover(function(){this.attr({fill: 'url("images/triangleright.png")'})});
z.mouseover(function(){this.attr({fill: 'url("images/triangleleft.png")'})});
l.mouseover(function(){this.attr({fill: 'url("images/trianglebottom.png")'})});

}});
