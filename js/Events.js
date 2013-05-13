Events = {
	registry: {},

	dispatch: function(obj, e){
		var uid = obj.uid;
		this.register(uid, e.name);
		var actions = this.registry[uid][e.name];
		for(var i = 0; i < actions.length; i++){
			actions[i](e);
		}
	},

	addListener: function(obj, name, listener){
		if(!listener) return;
		var uid = obj.uid;
		this.register(uid, name);
		this.registry[uid][name].push(listener);
	},

	removeListener: function(obj, name, func){
		var actions = this.registry[obj.uid][name];
		for(var i = 0; i < actions.length; i++)
			if(func == actions[i]) actions.splice(i, 1);
	},

	register: function(uid, name){
		if(!this.registry[uid]) this.registry[uid] = {};
		if(!this.registry[uid][name]) this.registry[uid][name] = [];
	},

	destroy: function(obj, name){
		this.registry[obj.uid][name] = false;
	},

	showRegistry: function(obj, name){
		console.log(this.registry);
	}
}

MouseEvent = function(name, data){
this.name = name;
this.data = data;
}
MouseEvent.ROLL_OVER = "mouse_event_roll_over";
MouseEvent.ROLL_OUT = "mouse_event_roll_out";
MouseEvent.MOUSE_UP = "mouse_event_mouse_up";
MouseEvent.MOUSE_DOWN = "mouse_event_mouse_down";
MouseEvent.CLICK = "mouse_event_click";



GlobalEvents = {
	registry: {},

	dispatch: function(e){
		this.register(e.name);
		var actions = this.registry[e.name];
		for(var i = 0; i < actions.length; i++) actions[i](e);
	},

	addListener: function(name, listener){
		this.register(name);
		this.registry[name].push(listener);
	},

	removeListener: function(name, listener){
		var actions = this.registry[name];
		if(!actions) return false;

		for(var i = 0; i < actions.length; i++){
			if(listener == actions[i]){
				actions.splice(i, 1);
			}
		}
	},

	register: function(name){
		if(!this.registry[name])
			this.registry[name] = [];
	},

	destroy: function(name){
		this.registry[name] = false;
	}
}
GlobalEvent = function(name, data){
	this.name = name;
	this.data = data;
}

GlobalEvent.RENDER_FRAME = "global_event_render_frame";
GlobalEvent.EVAL_MOUSE = "global_event_eval_mouse";

