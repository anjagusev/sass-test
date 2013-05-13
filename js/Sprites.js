var Sprite = function(){
	this.stage;
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
	this.alpha = 1;
	this.visible = true;
	this.uid = Stage.getUniqueID();
	this.mouseColor = Stage.getMouseColor();
	this.mouseString = this.mouseColor.toStringCSS();
	this.mouseEnabled = false;
	this.children = [];
	this.mother;

	this.render = function(context, mouse){
		if(!this.stage || !this.visible) return;

		// Save context state
		context.save();
		context.translate(this.x, this.y);
		context.scale(this.scaleX, this.scaleY);
		context.rotate(this.rotation * (Math.PI / 180));

		// Draw sprite
		if(mouse){
			if(this.mouseEnabled) this.mouseDraw(context);
		} else {
			context.globalAlpha *= this.alpha;
			this.draw(context);
		}

		// Draw children
		for(var i = 0; i < this.children.length; i++){
			this.children[i].render(context, mouse);
		}

		// Restore context
		this.afterDraw(context);
		context.restore();
	}

	this.setStage = function(stage){
		if(stage && !this.stage){
			stage.addMouseColor(this);
		} else if(!stage && this.stage){
			this.stage.removeMouseColor(this);
		}

		this.stage = stage;
		for(var i = 0; i < this.children.length; i++){
			var child = this.children[i];
			child.setStage(stage);
		}
	}

	this.dispatchEvent = function(e){
		Events.dispatch(this, e);
	}

	this.addEventListener = function(e, f){
		Events.addListener(this, e, f);
	}

	this.removeEventListener = function(e, f){
		Events.removeListener(this, e, f);
	}

	this.dispatchRollOver = function(){
		if(!this.mouseOver && this.mouseEnabled){
			this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER));
			this.mouseOver = true;
		}
	}

	this.dispatchRollOut = function(){
		if(this.mouseOver && this.mouseEnabled){
			this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OUT));
			this.mouseOver = false;
		}
	}

	this.resetMouse = function(){
		this.mouseOver = false;
		for(var i = 0; i < this.children.length; i++){
			this.children[i].resetMouse();
		}
	}

	this.addChild = function(child){
		this.children.push(child);
		child.setStage(this.stage);
		child.mother = this;
	}

	this.removeChild = function(child){
		var index = this.getChildIndex(child);
		this.children.splice(index, 1);
		child.setStage(null);
		child.mother = null;
		child.resetMouse();
	}

	this.setChildIndex = function(child, newIndex){
		var oldIndex = this.getChildIndex(child);
		this.children.splice(oldIndex, 1);
		this.children.splice(newIndex, 0, child);
	}

	this.getChildIndex = function(child){
		var i = this.children.indexOf(child);
		if(i == -1) throw child + " is not a child of " + this;
		return i;
	}

	this.isChildOf = function(mother){
		if(!mother) return false;
		if(mother == this.mother) return true;
		else return this.isChildOf(mother.mother);
	}

	this.getAncestry = function(){
		var s = this;
		var ancestry = [this];

		while(s.mother){
			ancestry.push(s.mother);
			s = s.mother;
		}

		return ancestry;
	}

	this.getProgeny = function(){
		var progeny = [this];
		for(var i=0; i<this.children.length; i++){
			progeny.concat(this.children[i].getProgeny());
		}

		return progeny;
	}

	// Return ancestors
	this.getUncommonAncestors = function(sprite){
		if(!sprite) return this.getAncestry();
		var myAncestors = this.getAncestry();
		var theirAncestors = sprite.getAncestry();

		for(var i=0; i<theirAncestors.length; i++){
			var index = myAncestors.indexOf(theirAncestors[i]);
			if(index != -1) myAncestors.splice(index, 1);
		}

		return myAncestors;
	}

	// Drawing stuff in here
	this.draw = function(context){}
	this.mouseDraw = function(context){}
	this.afterDraw = function(context){}

	// String representation of object
	this.toString = function(){
		return "[object Sprite]";
	}
}

var TraditionalSprite = function(data, element){
	this.element = element;
	this.data = data;
	this.currentFrame = 1;
	this.totalFrames = data.length;
	this.startFrame;
	this.endFrame;
	this.repeat = null;
	this.count = 0;
	this.playing = false;

	var self = this;

	this.progress = function(e){
		var direction = (self.startFrame > self.endFrame) ? -1 : 1;

		if(self.currentFrame == self.endFrame){
			if(self.repeat !== self.count){
				self.currentFrame = self.startFrame;
				self.count++;
				self.update();
			} else {
				self.stop(self.endFrame);
				self.count = 0;
			}

			return false;
		}

		self.currentFrame += direction;
		self.update();
	}

	this.update = function(){
		var data = self.data[self.currentFrame - 1].textureRect;
		self.element.style.backgroundPosition = -data.x + "px " + -data.y + "px";
	}

	this.play = function(repeat, startFrame, endFrame){
		if(!this.playing){
			this.repeat = repeat;
			this.startFrame = startFrame || this.currentFrame;
			this.endFrame = endFrame || this.totalFrames;

			GlobalEvents.addListener(GlobalEvent.RENDER_FRAME, this.progress);
			this.playing = true;
		}
	}

	this.stop = function(frame){
		frame = frame || this.currentFrame;

		this.currentFrame = frame;
		this.update();

		GlobalEvents.removeListener(GlobalEvent.RENDER_FRAME, this.progress);
		this.playing = false;
	}
}
var RGBColor = function(r, g, b){
	this.r = r;
	this.g = g;
	this.b = b;

	/*
	 * Convert an RGB color to a HEX color
	 */
	this.getHEX = function(){
		return new HEXColor(this.b | (this.g << 8) | (this.r << 16));
	}

	/*
	 * http://www.cs.rit.edu/~ncs/color/t_convert.html
	 * http://en.wikipedia.org/wiki/HSV_color_space
	 */
	this.getHSV = function(){
		var r = this.r;
		var g = this.g;
		var b = this.b;

		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta =  max - min;

		var h = max;
		var s = max;
		var v = max;

		v = max / 255 * 100;

		if(max != 0) s = delta / max * 100;
		else return new HSVColor(0, 0, 0);

		if(r == max) h = (g - b) / delta;
		else if(g == max) h = 2 + (b - r) / delta;
		else h = 4 + (r - g) / delta;

		h = h * 60;
		if(h < 0) h += 360;
		return new HSVColor(h, s, v);
	}

	this.toString = function(){
		return "[object RGBColor]";
	}

	this.toStringCSS = function(){
		return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
	}
}
