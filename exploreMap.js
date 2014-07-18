(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.exploreMap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
	
	this.fl.addEventListener("click", fl_MouseClickHandler_18.bind(this));
	var fl_TF_18 = new createjs.Text();
	fl_TextToDisplay_18 = "";
	
	function fl_MouseClickHandler_18() 
	{
		fl_TF_18.x = 15;
		fl_TF_18.y = 400;
		fl_TF_18.color = "#000000";
		fl_TF_18.font = "11px Arial";
		fl_TF_18.text = fl_TextToDisplay_18;
		this.addChild(fl_TF_18);
	
		this.flSelected.visible = true;
	}			
		
		
		$(document).ready(function(){
			
		var items = {}; //states instead of items didn't make a difference
	
		  $.getJSON("stateInfoList.json", function( result ) {  //this is the get resource function
			console.log(result);//when json was array, the returned jquery object was data instead of result. data may refer just to an array.
			// Note that "data" is the whole JSON (or jQ) object. still true for result?
			// Since you have nested objects in it, you will need to target each instead in for loop below
				$.each(result, function( key, val ) {//data was the object containing DOM elements (<divs>). now, does result hold the DOM elements? should I use jQuery() instead of each()?
				    $.each(val, function(key, val){
        			console.log(key, val); 
					});//key is jsons nh, val is whats inside jsons{ }, members are key, state and contacts. Problem: only returning first property nh, not fl
				 
				  //.push() is a function that adds an element on the end of the ARRAY and expands the array respectively. 		
				  items.push( "<p key='" + key + "'>" + val.state + "<div id=contacts'>" + val.contacts + "'</div></div>");
				  console.log( "<p key='" + key + "'>" + val.state + "<div id=contacts'>" + val.contacts + "'</div></div>");
					  
					  //add all <div> items to a not displayed <ul> element
					  $( "<ul/>", {		
					  //"id": "txtDOT",
					  "class": "my-new-list",//now shows up multiple times under #txtDOT. this class should be display none, but do I need to put a class tag anywhere in my html?		
					  html: items.join( "" ) //uh oh, this joins div elements back into a string.//Later,put statebutton ID in ("")?//
					  //join method only works with arrays, not jquery objects that act similar to arrays. 					  
					  }).appendTo( "#txtDOT" );//"txtDOT" is the name of my div in the HTML file. 
				});//end function getJSON from stateInfoList, i think, 7/15/14
		
		  });	
				//str.replace(/(?:\r\n|\r|\n)/g, '<br />'); This would only work if you put back in JSON.stringify on items.push line
		
		// Mouse Click Event not working for FL. 7/7/14 I commented out the original FL mouse click handler.Read more about this on function.		
		/*$("li").On("click", function (e) {//Using e is just a short for event. You can pass any variable name you desire.
		var $e = $(e.target);
		});*/
			
		
	});
		
	
		
		//Mouse Click Event
		 
			
		
		//Mouse Click Event
		
		
		this.nh.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		var fl_TF_1 = new createjs.Text();
		fl_TextToDisplay_1 = "";
		
		function fl_MouseClickHandler_1()
		{
				fl_TF_1.x = 15;
		        fl_TF_1.y = 400;
		        fl_TF_1.color = "#000000";
		        fl_TF_1.font = "11px Arial";
		        fl_TF_1.text = fl_TextToDisplay_1;
		        this.addChild(fl_TF_1);
		
		        this.nhSelected.visible = true;
				
				var x=document.getElementsByName("txtDOT")[0]="NEW HAMPSHIRE DEPARTMENT OF TRANSPORTATION\n\nConcrete Admixtures (CADD) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nConcrete Curing Compounds (CCC) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nErosion Control Products (ECP) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nGeotextiles and Reinforced Geosynthetics (GTX/REGEO) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nHigh Density Polyethylene Plastic Pipe (HDPE), Polypropylene Pipe (PPP), Polyvinyl Chloride Drainage Pipe (PVC) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nHot-Mix Asphalt Crack Sealers (HMA-CS) and Portland Cement Concrete Joint Sealers (PCC JS) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nPavement Marking Materials (PMM) \nTobey Reynolds, Assistant Traffic Engineer, 603-271-2291, treynolds@dot.state.nh.us \n\nStructural Steel Coatings and Concrete Coating Systems (SSC/CCS) \nSSC - Jerry Zoller, 603-271-2731, jzoller@dot.state.nh.us\nCCS - Bill Real, 603-271-3151, wreal@dot.state.nh.us \n\nRapid Set Concrete Patching Materials (RSCP) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nReinforcing Steel/Welded Wire Reinforcement (REBAR/WWR) \nBill Real, Research Supervisor/QPL, 603-271-3151, wreal@dot.state.nh.us \n\nSign Sheeting Materials/Roll Up Signs (SSM/RUP) \nTobey Reynolds, Assistant Traffic Engineer, 603-271-2291, treynolds@dot.state.nh.us";
			  alert(x);
		
		
		}
		
		
		
	}
	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	
	// Actions
	
	// blueMap.ai
	
	(lib.nhSelected = function() {
	this.initialize();

	// buttonNh ~aka Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("ABSB+IgGgDIgHACIgJANIgJADIACAJIgCADIgDgDIgDADIgCAEIhvAZIgCgGIgJgJIABgNIADgEIgEgNIgFg2IAAgQIANg1IABgOIgHgKIAAgMIAFgHIAVgRIALgdIgLgRIgCgIIAEgEIAAgGIgFgUIAEgZIgHgIIADgDIAHAAIADgJIAGACIAHgBIAGgFIBKDhIgBAKIABAEIATAOIAEABIACAHIAAAGIAKARIgCADg");
	this.shape.setTransform(14.4,16.7,1.176,1.102);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#396B94").s().p("AhGCuIgIgIIABgNIACgFIgDgMIgGg2IAAgQIANg1IABgNIgGgLIAAgMIAEgIIAVgRIAMgdIgMgQIgCgJIAEgDIAAgHIgFgTIAEgZIgGgJIACgCIAHAAIADgJIAGACIAIgBIAFgFIBLDhIgCAKIACADIASAPIAEABIACAHIAAAFIALASIgCADIAAASIgHgEIgHACIgJAOIgJADIACAIIgCAEIgDgEIgDAEIgCAEIhvAZg");
	this.shape_1.setTransform(14.3,16.9,1.176,1.102);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.3,-4.1,22,42);


(lib.nh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAAATIAVAAIAAgTIAGAAIAAArIgGAAIAAgVIgVAAIAAAVg");
	this.shape.setTransform(9.4,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AALAWIAAgVIgVAAIAAAVIgGAAIAAgrIAGAAIAAATIAVAAIAAgTIAGAAIAAArg");
	this.shape_1.setTransform(9.4,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgWghIAAAhg");
	this.shape_2.setTransform(4.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_3.setTransform(4.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("ABPB6IgGgDIgHACIgIANIgJADIACAIIgCADIgDgDIgDADIgBAEIhsAZIgCgHIgIgIIABgNIADgEIgEgMIgFg0IAAgQIAMgzIABgOIgGgJIAAgMIAEgHIAUgQIALgcIgLgQIgCgIIAEgEIAAgGIgFgTIAEgYIgGgIIACgDIAHAAIADgIIAGACIAHgBIAFgFIBHDVIABAEIgBAJIABAEIASAOIAEABIACAHIAAAFIAKARIgCADg");
	this.shape_4.setTransform(8.3,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AhECpIgIgIIABgOIADgDIgEgMIgFg0IAAgRIAMgzIABgMIgGgKIAAgNIAEgGIAVgRIALgcIgLgQIgCgIIAEgEIAAgGIgFgTIAEgYIgHgIIADgDIAHAAIADgIIAGACIAHgBIAFgFIBHDVIABAFIgBAJIABADIASAPIAEABIACAHIAAAEIAKARIgCAEIAAAQIgGgDIgHACIgIAOIgJACIACAJIgCACIgDgCIgDACIgCAFIhsAYg");
	this.shape_5.setTransform(8.2,17.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.5,37.1);
	
	
	this.nh = new lib.nh();
	this.nh.setTransform(522.4,121.9,0.973,0.997,0,0,0,8.1,17.4);
	new cjs.ButtonHelper(this.nh, 0, 1, 1);

	this.nhSelected = new lib.nhSelected();
	this.nhSelected.setTransform(519.7,124,0.95,0.902,0,0,0,8.4,17.9);
	this.nhSelected.visible = false;
	this.nhSelected.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.nhSelected.cache(1,-6,26,46);
	new cjs.ButtonHelper(this.nhSelected, 0, 1, 1);

	(lib.nh2 = function() {
	this.initialize();

	// Layer 1
	this.nh = new lib.nh();
	this.nh.setTransform(7.9,17.4,0.973,0.997,0,0,0,8.1,17.4);
	new cjs.ButtonHelper(this.nh, 0, 1, 1);

	this.addChild(this.nh);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,18,37);
	
	
	
	(lib.flSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Ai0lBIkcAcIAAAFIABADIgDADIABAJIAIAMIAGAFIADAAIAIAHIACAEIgFAMIAAADIAGADIACADIAAADIgGAFIAAAIIADACIAQgFIAFgEIAIgUIAHACIAGAAIADgCIAFABIgBAEIgLAJIACACIAJgEIANgBIA0gRIAHAAIAAAEIgJAIIAEACIAWACIAtAUIAGABIgBgHIAFgEIAFAGIANAEIADACIABACIgFADIACAEIAcAVIACAIIgBAHIgCAFIgEgEIgCgFIgCAFIABAGIAGACIAogLIACgFIAOgBIAggaIAVAAIAAgFIgDgFIAGgOIAjgEIAzAaIABAHIALAKIALARIAhAXIAEAJIAJAIIAYgBIATAcIAFAEIgCAIIAIAcIgDAgIgIAfIABAbIAEAIIAUANIAGgLIgGgEIgFgSIABgDIALgCIAIARIAFAAIACgJIADgCIAFAEIgBAIIgKAQIgHAVIgGADIAAAKIAHAIIALAKIARAmIAbARIADgBIABgJIAIAAIAHAQIABAJIAJAUIALAHIAMAEIAUA2IAFADIAbAGIALAGIAfAlIANAKIAFAAIAIAEIACAHIgGACIgFgCIgDAAIgEACIgBAFIAEAFIAPADIAIgFIAMgBIAtgRIAKgSIABgEIgGgYIABgMIAJgVIAJACIgLgsIADgWIgCgpIgJghIgGgMIgggoIgTgsIgYgeIABgEIgCgIIgIgRIAAgIIAIgLIAAgFIgfgrIgTgRIgMgHIgDgGIgUgbIgbgwIgHgcIgRgnIAAgHIgHgGIgFgDIgDgcIgEgKIgJADIgTgBIgVgKIgIAGIgDAFIgBAKIAJAcIgDAPIgQgCIgEgGIgEgOIklASIgHgKIABgIIgLgKg");
	this.shape.setTransform(46.8,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AFrFZIgFgFIACgFIAEgCIACAAIAGACIAGgCIgCgHIgJgEIgEAAIgOgKIgeglIgLgGIgbgGIgFgDIgVg1IgLgEIgMgHIgJgUIgBgJIgGgQIgIAAIgBAJIgDABIgbgRIgSgmIgLgKIgHgIIAAgKIAHgDIAHgVIAKgRIAAgIIgFgEIgDACIgBAJIgGAAIgIgRIgLACIgBADIAGASIAFAFIgFALIgUgNIgEgJIgBgbIAIgfIADggIgIgcIACgIIgFgEIgTgcIgZABIgJgIIgDgJIghgWIgLgRIgLgKIgBgHIgzgaIgjAEIgGAOIADAFIAAAFIgVAAIghAaIgNABIgCAFIgoAKIgGgCIgBgGIACgEIACAEIAEAEIACgFIABgGIgCgIIgdgVIgCgEIAGgDIgBgCIgEgCIgMgEIgGgGIgEAEIABAHIgHgBIgsgUIgWgCIgFgCIAKgIIAAgEIgIAAIgzARIgNABIgJAEIgCgCIALgJIABgEIgFgBIgDACIgGAAIgHgCIgIAUIgFAEIgQAFIgEgCIAAgIIAGgFIAAgDIgBgDIgHgDIAAgDIAGgMIgCgEIgIgHIgEAAIgFgFIgIgMIgBgJIACgDIAAgDIAAgFIEcgcIABAGIALAKIgBAIIAGAKIElgSIAFAOIADAGIARACIACgPIgJgcIABgKIAEgFIAIgGIAVAKIATABIAJgDIAEAKIADAcIAEADIAHAGIAAAHIARAnIAIAcIAbAwIAUAaIADAGIAMAHIATARIAeArIAAAFIgIALIAAAIIAIARIACAIIgBAEIAZAeIATAtIAgAoIAFAMIAJAhIADApIgEAWIALAsIgJgCIgJAUIgBAMIAHAYIgBAEIgKASIgtARIgMABIgIAFg");
	this.shape_1.setTransform(46.7,34.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.4,71.8);


(lib.fl = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgMAVIAAgpIAGAAIAAAkIAUAAIAAAFg");
	this.shape.setTransform(72.7,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgMAVIAAgqIAFAAIAAAmIAVAAIAAAEg");
	this.shape_1.setTransform(72.7,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgOAVIAAgpIAdAAIAAAFIgXAAIAAANIATAAIAAADIgTAAIAAAUg");
	this.shape_2.setTransform(69,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgOAVIAAgqIAdAAIAAAGIgXAAIAAANIATAAIAAAEIgTAAIAAATg");
	this.shape_3.setTransform(69,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Ai0lBIkcAcIAAAFIABADIgDADIABAJIAIAMIAGAFIADAAIAIAHIACAEIgFAMIAAADIAGADIACADIAAADIgGAFIAAAIIADACIAQgFIAFgEIAIgUIAHACIAGAAIADgCIAFABIgBAEIgLAJIACACIAJgEIANgBIA0gRIAHAAIAAAEIgJAIIAEACIAWACIAtAUIAGABIgBgHIAFgEIAFAGIANAEIADACIABACIgFADIACAEIAcAVIACAIIgBAHIgCAFIgEgEIgCgFIgCAFIABAGIAGACIAogLIACgFIAOgBIAggaIAVAAIAAgFIgDgFIAGgOIAjgEIAzAaIABAHIALAKIALARIAhAXIAEAJIAJAIIAYgBIATAcIAFAEIgCAIIAIAcIgDAgIgIAfIABAbIAEAIIAUANIAGgLIgGgEIgFgSIABgDIALgCIAIARIAFAAIACgJIADgCIAFAEIgBAIIgKAQIgHAVIgGADIAAAKIAHAIIALAKIARAmIAbARIADgBIABgJIAIAAIAHAQIABAJIAJAUIALAHIAMAEIAUA2IAFADIAbAGIALAGIAfAlIANAKIAFAAIAIAEIACAHIgGACIgFgCIgDAAIgEACIgBAFIAEAFIAPADIAIgFIAMgBIAtgRIAKgSIABgEIgGgYIABgMIAJgVIAJACIgLgsIADgWIgCgpIgJghIgGgMIgggoIgTgsIgYgeIABgEIgCgIIgIgRIAAgIIAIgLIAAgFIgfgrIgTgRIgMgHIgDgGIgUgbIgbgwIgHgcIgRgnIAAgHIgHgGIgFgDIgDgcIgEgKIgJADIgTgBIgVgKIgIAGIgDAFIgBAKIAJAcIgDAPIgQgCIgEgGIgEgOIklASIgHgKIABgIIgLgKg");
	this.shape_4.setTransform(46.8,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AFrFZIgFgFIACgFIAEgCIACAAIAGACIAGgCIgCgHIgJgEIgEAAIgOgKIgeglIgLgGIgbgGIgFgDIgVg1IgLgEIgMgHIgJgUIgBgJIgGgQIgIAAIgBAJIgDABIgbgRIgSgmIgLgKIgHgIIAAgKIAHgDIAHgVIAKgRIAAgIIgFgEIgDACIgBAJIgGAAIgIgRIgLACIgBADIAGASIAFAFIgFALIgUgNIgEgJIgBgbIAIgfIADggIgIgcIACgIIgFgEIgTgcIgZABIgJgIIgDgJIghgWIgLgRIgLgKIgBgHIgzgaIgjAEIgGAOIADAFIAAAFIgVAAIghAaIgNABIgCAFIgoAKIgGgCIgBgGIACgEIACAEIAEAEIACgFIABgGIgCgIIgdgVIgCgEIAGgDIgBgCIgEgCIgMgEIgGgGIgEAEIABAHIgHgBIgsgUIgWgCIgFgCIAKgIIAAgEIgIAAIgzARIgNABIgJAEIgCgCIALgJIABgEIgFgBIgDACIgGAAIgHgCIgIAUIgFAEIgQAFIgEgCIAAgIIAGgFIAAgDIgBgDIgHgDIAAgDIAGgMIgCgEIgIgHIgEAAIgFgFIgIgMIgBgJIACgDIAAgDIAAgFIEcgcIABAGIALAKIgBAIIAGAKIElgSIAFAOIADAGIARACIACgPIgJgcIABgKIAEgFIAIgGIAVAKIATABIAJgDIAEAKIADAcIAEADIAHAGIAAAHIARAnIAIAcIAbAwIAUAaIADAGIAMAHIATARIAeArIAAAFIgIALIAAAIIAIARIACAIIgBAEIAZAeIATAtIAgAoIAFAMIAJAhIADApIgEAWIALAsIgJgCIgJAUIgBAMIAHAYIgBAEIgKASIgtARIgMABIgIAFg");
	this.shape_5.setTransform(46.7,34.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.4,71.8);

	
	
	
	this.fl = new lib.fl();
	this.fl.setTransform(435.2,342,1,1,0,0,0,46.7,34.9);
	new cjs.ButtonHelper(this.fl, 0, 1, 1);

	this.flSelected = new lib.flSelected();
	this.flSelected.setTransform(438.5,345.8,1.071,1.069,0,0,0,46.7,34.8);
	this.flSelected.visible = false;
	this.flSelected.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.flSelected.cache(-3,-3,99,76);
	new cjs.ButtonHelper(this.flSelected, 0, 1, 1);

	

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A171B").ss(0.5).p("AJemeIADgeIAJAAIAEgBIAIgIIABgIIgBgFIAMgRIAVgJIAYgGIAYgVIAKgEIAPgOIAEgMIACgBIAGABIAGgJIAIgIIADABIAHAEIAIgEIABgDIANgKIAJgEIAQgBIASgdIAOgIIADgQIgBgKIACgIIAAgDIAcgFIgCAFIAcgDIALgDIAFACIEPgsIECgxIAEAFIACAEIAHAEIAFACIAEAGIAEAEIAFAMIgCAEIABABIgEAAIgBgEIgIACIgFAAIgFgCIgEABIADAFIgBADIgYALIgPAOIgPACIgDAKIAAADIADABIAFgBIARgIIAQgEIAJgGIAPABIACACIgCAJIACAEIAEADIAGgCIACgFIAJgLIAIAAIAFAMIACAUIACAGIAAAEIgNAKIgFANIgKAIIgHADIgIAFIgRgBIgGgCIgCACIgCAAIgDgIIAAgEIgDgDIgEgBIgEADIAEAPIgEAFIgCgCIAGAHIAHABIAHAIIgFAJIADAEIgUAYIgGABIgLgEIgIAAIgBAEIAHAFIAVgBIAOgEIATgJIACgHIAFACIAHAGIgHAQIgPARIgSADIgIAEIgVADIgRAdIgIABIAAAEIABABIgUANIgLAOIgLAZIgGAeIgGAIIgKAEIgqAIIgEAEIiLhfIh1APIgDgQIgUgQIgKAFIgEgFIACgEIgBgEIiIAQIgEAAIgEAEIgbAMIgBAGIgJAAIgeAPgA3iL5IAAgT");
	this.shape_1.setTransform(354.6,300.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.flSelected},{t:this.fl},{t:this.nhSelected},{t:this.nh}]}).wait(1));

	// Header
	this.text = new cjs.Text("", "12px 'Verdana'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(500,94);

	this.instructions = new cjs.Text("Hover over a state to see the products for which the state uses NTPEP data (but not necessarily requires it). Contact information for each product type is listed.  ", "12px 'Verdana'");
	this.instructions.name = "instructions";
	this.instructions.textAlign = "center";
	this.instructions.lineHeight = 14;
	this.instructions.lineWidth = 570;
	this.instructions.setTransform(305.3,24.3);

	this.text_1 = new cjs.Text("State DOT Usage of NTPEP - December 2013 Survey Results", "bold 14px 'Verdana'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 477;
	this.text_1.setTransform(297.5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instructions},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,406.2,609.4,523.4);


// symbols:
(lib.wySelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AE5EkIAsn6Ip8hNIg3F6IgBAAIgVB8IC+Adg");
	this.shape.setTransform(35.7,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AimDwIi+gdIAVh8IABAAIA3l6IJ8BNIgsH6g");
	this.shape_1.setTransform(35.7,29.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.5,60.5);


(lib.wy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape.setTransform(46.2,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape_1.setTransform(46.2,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAXIgLgrIAGAAIAIAkIALgkIAFAAIAKAkIAJgkIAGAAIgMArIgGAAIgKglIAAAFIgJAgg");
	this.shape_2.setTransform(41.2,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAKAWIgKglIAAAFIgJAgIgHAAIgLgrIAGAAIAIAkIALgkIAFAAIAKAkIAJgkIAGAAIgMArg");
	this.shape_3.setTransform(41.2,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AE5EkIAsn6Ip8hNIg3F6IgBAAIgVB8IC+Adg");
	this.shape_4.setTransform(35.7,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AimDwIi+gdIAVh8IABAAIA3l6IJ8BNIgsH6g");
	this.shape_5.setTransform(35.7,29.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.5,60.5);


(lib.wvSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AhIjeIgDgBIgHAGIAFANIgOAMIATAJIgHAuIgEALIAAALIACAGIABAPIgLAKIgFACIgTAWIAAAFIgMADIgIgCIgIAJIgBAFIgJAIIgLAVIAEAOIgMANIgIgPIgIAAIgKAeIACAPIgCANIgHAGIgKARIgNABIADAQIAAAMIgBAIIACAIIAVAaIANAUIADACIAFgBIAKAFIADAEIADAAIAHAFIAIAAIAEADIgEAKIAQAPIAWAIIAKABIAMgKIABgHIAIgEIAIAHIAFADIAIgCIAagKIAEgQIADAAIAGAFIAUgSIAFAEIARgWIgEgJIABgPIARggIAXhTIAEgBIAMAIIACAFIAGAHIANgDIAJgPIAIgdIAHgLIAMAEIAIgRIAJgDIAHgKIAGgRIAFgEIABgEIgEgEIACgZIACgEIAEgDIAuAdIAHACIACgCIAFgZIgLgXIgFgBIgEgLIgIADIgIAAIgHgEIggALIgDAJIgOAEIgMgDIgFgGIgGANIgHADIgHAMIgJACIgUAXIgGADIgFAJIgPhCIhiATg");
	this.shape.setTransform(23,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AhyDgIgWgJIgQgPIAEgKIgEgCIgHAAIgHgGIgDAAIgDgDIgKgFIgFABIgDgCIgNgUIgWgaIgCgIIABgIIAAgMIgDgQIANgBIAKgRIAIgGIACgNIgCgPIAKgeIAIAAIAIAPIAMgNIgEgOIAKgWIAJgIIABgEIAIgJIAIACIAMgDIAAgGIAUgVIAFgDIALgKIgBgOIgCgGIAAgLIAEgLIAHgvIgTgJIAOgMIgFgMIAHgHIADABIATByIBigTIAPBCIAFgJIAGgDIAVgYIAJgBIAHgNIAHgDIAGgMIAFAFIAMAEIANgFIADgJIAggLIAIAEIAIAAIAIgDIAEALIAFABIALAXIgFAaIgCABIgHgBIgvgdIgEADIgCADIgCAZIAEAFIgBAEIgFADIgGARIgHAKIgIAEIgIARIgMgFIgHAMIgIAdIgJAPIgOADIgGgHIgCgFIgMgIIgEABIgWBTIgRAgIgBAPIAEAJIgRAWIgFgEIgVARIgGgEIgDAAIgEAPIgZALIgIACIgFgEIgIgGIgIADIgBAIIgMAKg");
	this.shape_1.setTransform(23,22.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,47);


(lib.wv = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCATIgRgqIAHAAIAMAlIAOglIAGAAIgRAqg");
	this.shape.setTransform(21.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgBAWIgSgrIAHAAIAMAmIAOgmIAGAAIgRArg");
	this.shape_1.setTransform(21.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQASIgMgrIAHAAIAIAkIALgkIAFAAIAGAXQADAFABAIIAJgkIAGAAIgMArIgGAAIgKglIgKAlg");
	this.shape_2.setTransform(16.8,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAKAWIgKglIgJAlIgHAAIgLgrIAGAAIAJAkIAKgkIAGAAIAFAVQADAHABAIIAKgkIAFAAIgMArg");
	this.shape_3.setTransform(16.8,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AhIjeIgDgBIgHAGIAFANIgOAMIATAJIgHAuIgEALIAAALIACAGIABAPIgLAKIgFACIgTAWIAAAFIgMADIgIgCIgIAJIgBAFIgJAIIgLAVIAEAOIgMANIgIgPIgIAAIgKAeIACAPIgCANIgHAGIgKARIgNABIADAQIAAAMIgBAIIACAIIAVAaIANAUIADACIAFgBIAKAFIADAEIADAAIAHAFIAIAAIAEADIgEAKIAQAPIAWAIIAKABIAMgKIABgHIAIgEIAIAHIAFADIAIgCIAagKIAEgQIADAAIAGAFIAUgSIAFAEIARgWIgEgJIABgPIARggIAXhTIAEgBIAMAIIACAFIAGAHIANgDIAJgPIAIgdIAHgLIAMAEIAIgRIAJgDIAHgKIAGgRIAFgEIABgEIgEgEIACgZIACgEIAEgDIAuAdIAHACIACgCIAFgZIgLgXIgFgBIgEgLIgIADIgIAAIgHgEIggALIgDAJIgOAEIgMgDIgFgGIgGANIgHADIgHAMIgJACIgUAXIgGADIgFAJIgPhCIhiATg");
	this.shape_4.setTransform(23,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AhyDfIgWgIIgQgOIAEgLIgEgDIgHAAIgHgEIgDAAIgDgEIgKgFIgFABIgDgCIgNgUIgWgaIgCgIIABgIIAAgMIgDgQIANgBIAKgRIAIgGIACgNIgCgPIAKgeIAIAAIAIAPIAMgNIgEgOIAKgWIAJgHIABgGIAIgIIAIABIAMgCIAAgGIAUgVIAFgCIALgKIgBgPIgCgHIAAgKIAEgLIAHguIgTgJIAOgNIgFgMIAHgHIADABIATByIBigTIAPBBIAFgJIAGgCIAVgYIAJgBIAHgMIAHgEIAGgMIAFAGIAMADIANgFIADgJIAggLIAIAFIAIAAIAIgEIAEAMIAFABIALAWIgFAaIgCABIgHgBIgvgdIgEACIgCAFIgCAYIAEAFIgBADIgFAFIgGARIgHAKIgIADIgIARIgMgFIgHAMIgIAdIgJAPIgOADIgGgHIgCgFIgMgIIgEABIgWBTIgRAgIgBAPIAEAJIgRAWIgFgEIgVARIgGgEIgDAAIgEAQIgZAKIgIACIgFgDIgIgHIgIADIgBAHIgMAKg");
	this.shape_5.setTransform(23,22.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,47);


(lib.wiSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgnEbIgEgMIgJgIIgdgKIgOgzIAIgLIAAgIIgLgKIgFgQIgDgXIABgQIgEgHIg3gnIgJgUIgcgMIgGgEIgBgGIgEgDIgZgEIgCgGIgKgHIgFgHIACg1IgBgNIAIgPIgJgQIgOgHIAHgTIADgDIABgLIAagVIAIgEIAHgIIgChEIAHgGIAHgJIAJAFIAMACIAPgBIBGglIAIgBIADAFIAAAKIgEAGIAAAGIgFASIARgIIAJAAIALAKIAKgCIAFAHIANACIAGAFIAEAOIAHADIBSARIAKAAIATAPIAMAAIAEAEIAEgEIAGAAIAVAEIANAEIAFAFIgCADIgBAEIAOAEIARAIIACAMIgFAgIADABIAQgDIACACIgCAHIgFAFIAEAPIAOAIIgVAVIgMAYIgGAXIAEADIAOgHIAPgaIAQgNIAIgEIACgHIAHgGIAEgIIgBgJIABgHIAEgDIAEgIIAEgEIAFgBIADAFIgCAQIgNAgIgGAIIgDAMIAAAHIgMAYIgBAnIgMAMIgDAIIAEASIABAfIgFAHIgKAgIAGAuIANAgIgDAFIACAHIgBAFIABAOg");
	this.shape.setTransform(27,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgrEPIgJgIIgegKIgOgzIAIgLIAAgIIgLgKIgFgQIgDgXIABgQIgEgHIg2gnIgKgUIgcgMIgGgEIgBgGIgEgDIgYgEIgCgGIgKgHIgFgHIACg1IgBgNIAIgPIgJgQIgPgHIAIgTIADgDIABgLIAagVIAIgEIAHgIIgChEIAGgGIAHgJIAJAFIAMACIAPgBIBGglIAIgBIADAFIAAAKIgEAGIAAAGIgFASIARgIIAJAAIAMAKIAKgCIAFAHIANACIAGAFIAEAOIAGADIBTARIAKAAIASAPIAMAAIAEAEIAEgEIAGAAIAWAEIANAEIAFAFIgCADIgBAEIAOAEIAQAIIACAMIgFAgIADABIAQgDIACACIgCAHIgFAFIAEAPIAOAIIgVAVIgMAYIgGAXIAEADIAOgHIAPgaIARgNIAIgEIACgHIAHgGIAEgIIgBgJIABgHIAEgDIAEgIIAEgEIAFgBIADAFIgCAQIgNAgIgGAIIgDAMIAAAHIgMAYIgBAnIgNAMIgDAIIAEASIABAfIgFAHIgKAgIAGAuIANAgIgDAFIACAHIgBAFIABAOIkIASg");
	this.shape_1.setTransform(27,28.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.1,58.8);


(lib.wi = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAVIAAgpIAFAAIAAApg");
	this.shape.setTransform(35.6,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgBAVIAAgqIADAAIAAAqg");
	this.shape_1.setTransform(35.6,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgPAXIgMgqIAGAAIAIAkIALgkIAFAAIAKAkIAJgkIAGAAIgMAqIgGAAIgKglIAAAFIgJAgg");
	this.shape_2.setTransform(31.8,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAKAVIgKgkIAAAFIgJAfIgGAAIgMgqIAGAAIAIAlIALglIAFAAIAKAlIAJglIAGAAIgMAqg");
	this.shape_3.setTransform(31.8,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgnEbIgEgMIgJgIIgdgKIgOgzIAIgLIAAgIIgLgKIgFgQIgDgXIABgQIgEgHIg3gnIgJgUIgcgMIgGgEIgBgGIgEgDIgZgEIgCgGIgKgHIgFgHIACg1IgBgNIAIgPIgJgQIgOgHIAHgTIADgDIABgLIAagVIAIgEIAHgIIgChEIAHgGIAHgJIAJAFIAMACIAPgBIBGglIAIgBIADAFIAAAKIgEAGIAAAGIgFASIARgIIAJAAIALAKIAKgCIAFAHIANACIAGAFIAEAOIAHADIBSARIAKAAIATAPIAMAAIAEAEIAEgEIAGAAIAVAEIANAEIAFAFIgCADIgBAEIAOAEIARAIIACAMIgFAgIADABIAQgDIACACIgCAHIgFAFIAEAPIAOAIIgVAVIgMAYIgGAXIAEADIAOgHIAPgaIAQgNIAIgEIACgHIAHgGIAEgIIgBgJIABgHIAEgDIAEgIIAEgEIAFgBIADAFIgCAQIgNAgIgGAIIgDAMIAAAHIgMAYIgBAnIgMAMIgDAIIAEASIABAfIgFAHIgKAgIAGAuIANAgIgDAFIACAHIgBAFIABAOg");
	this.shape_4.setTransform(27,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgrEPIgJgIIgegKIgOgzIAIgLIAAgIIgLgKIgFgQIgDgXIABgQIgEgHIg2gnIgKgUIgcgMIgGgEIgBgGIgEgDIgYgEIgCgGIgKgHIgFgHIACg1IgBgNIAIgPIgJgQIgPgHIAIgTIADgDIABgLIAagVIAIgEIAHgIIgChEIAGgGIAHgJIAJAFIAMACIAPgBIBGglIAIgBIADAFIAAAKIgEAGIAAAGIgFASIARgIIAJAAIAMAKIAKgCIAFAHIANACIAGAFIAEAOIAGADIBTARIAKAAIASAPIAMAAIAEAEIAEgEIAGAAIAWAEIANAEIAFAFIgCADIgBAEIAOAEIAQAIIACAMIgFAgIADABIAQgDIACACIgCAHIgFAFIAEAPIAOAIIgVAVIgMAYIgGAXIAEADIAOgHIAPgaIARgNIAIgEIACgHIAHgGIAEgIIgBgJIABgHIAEgDIAEgIIAEgEIAFgBIADAFIgCAQIgNAgIgGAIIgDAMIAAAHIgMAYIgBAnIgNAMIgDAIIAEASIABAfIgFAHIgKAgIAGAuIANAgIgDAFIACAHIgBAFIABAOIkIASg");
	this.shape_5.setTransform(27,28.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.1,58.8);


(lib.waSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AEPDZIgCAHIgEAGIABAQIi0gqIgNAGIgJAAIgJgDIgNgBIgHgDIgJAAIgKADIgNgDIgJAAIgNAGIgKACIgXgDIgGgEIgNgFIgpAFIgIgLIgjgKIgQgCIgVACIgfgCIgbgOIgFgKIACggIACgGIgDgUIgTgOIgOgCIgCgEIgIgIIgQgHIgCgCIgQgKIgFgBIgDgBIAAgFIAEgPIADgHIAAgKIADgBIACABIABAJIgBAFIgBADIABAEIAMgLIgBgEIAAgGIAFgGIgEgHIgHgBIgBgTIADgCIAHACIACgDIANgDIgJgHIAAgCIgDgDIgJAGIAAgWIADgQIgDgXIAFglIgLgjIABgYIAEgNIADgSIA/AsIAiASIAaAIIAPAJIANAAIAFADIAFAIIACAfIgCAHIgKAHIgEAOIAAALIABAGIgBAGIgDAFIAAAFIAGAFIAMgGIAIgcIAGgGIAFgNIARgRIABgHIgUg8IgBgGIAEgCIAHACIAIgQIgBgSIgLAAIgCgjIHZB7IhGE5IgEAFIAAALg");
	this.shape.setTransform(34.1,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ABWDMIgNAGIgJAAIgJgDIgMgBIgHgDIgJAAIgKADIgNgDIgKAAIgNAGIgKACIgWgDIgGgEIgNgFIgqAFIgIgLIgigKIgQgCIgVACIgggCIgagOIgFgKIACggIACgGIgDgUIgTgOIgOgCIgCgEIgJgIIgQgHIgCgCIgQgKIgFgBIgDgBIAAgFIAEgPIADgHIAAgKIADgBIACABIABAJIgBAFIgBADIABAEIAMgLIgBgEIAAgGIAFgGIgEgHIgHgBIgBgTIADgCIAHACIACgDIANgDIgJgHIAAgCIgDgDIgJAGIAAgWIADgQIgDgXIAFglIgLgjIABgYIAEgNIADgSIBAAsIAhASIAaAIIAQAJIANAAIAFADIAFAIIACAfIgCAHIgKAHIgEAOIAAALIABAGIgBAGIgDAFIAAAFIAGAFIAMgGIAIgcIAFgGIAFgNIARgRIABgHIgUg8IgBgGIAEgCIAHACIAIgQIgBgSIgLAAIgCgjIHaB7IhHE5IgEAFIAAALIAGAKIgCAHIgEAGIABAQg");
	this.shape_1.setTransform(34,24.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,70.1,51.3);


(lib.wa = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIARgrIAFAAIASArIgHAAIgFgOIgRAAIgFAOgAgHAFIANAAIgGgTg");
	this.shape.setTransform(39.9,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AANAWIgEgOIgRAAIgGAOIgGAAIARgrIAFAAIASArgAgHADIANAAIgGgTg");
	this.shape_1.setTransform(39.9,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQATIgLgqIAGAAIAIAkIALgkIAFAAIAGAWQADAFABAJIAJgkIAGAAIgMAqIgGAAIgKglIAAAFIgJAgg");
	this.shape_2.setTransform(35.1,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAKAWIgKglIAAAFIgJAgIgHAAIgLgrIAGAAIAIAkIALgkIAFAAIAGAVQADAHABAIIAJgkIAGAAIgMArg");
	this.shape_3.setTransform(35.1,32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AEPDZIgCAHIgEAGIABAQIi0gqIgNAGIgJAAIgJgDIgNgBIgHgDIgJAAIgKADIgNgDIgJAAIgNAGIgKACIgXgDIgGgEIgNgFIgpAFIgIgLIgjgKIgQgCIgVACIgfgCIgbgOIgFgKIACggIACgGIgDgUIgTgOIgOgCIgCgEIgIgIIgQgHIgCgCIgQgKIgFgBIgDgBIAAgFIAEgPIADgHIAAgKIADgBIACABIABAJIgBAFIgBADIABAEIAMgLIgBgEIAAgGIAFgGIgEgHIgHgBIgBgTIADgCIAHACIACgDIANgDIgJgHIAAgCIgDgDIgJAGIAAgWIADgQIgDgXIAFglIgLgjIABgYIAEgNIADgSIA/AsIAiASIAaAIIAPAJIANAAIAFADIAFAIIACAfIgCAHIgKAHIgEAOIAAALIABAGIgBAGIgDAFIAAAFIAGAFIAMgGIAIgcIAGgGIAFgNIARgRIABgHIgUg8IgBgGIAEgCIAHACIAIgQIgBgSIgLAAIgCgjIHZB7IhGE5IgEAFIAAALg");
	this.shape_4.setTransform(34.1,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ABWDMIgNAGIgJAAIgJgDIgMgBIgHgDIgJAAIgKADIgNgDIgKAAIgNAGIgKACIgWgDIgGgEIgNgFIgqAFIgIgLIgigKIgQgCIgVACIgggCIgagOIgFgKIACggIACgGIgDgUIgTgOIgOgCIgCgEIgJgIIgQgHIgCgCIgQgKIgFgBIgDgBIAAgFIAEgPIADgHIAAgKIADgBIACABIABAJIgBAFIgBADIABAEIAMgLIgBgEIAAgGIAFgGIgEgHIgHgBIgBgTIADgCIAHACIACgDIANgDIgJgHIAAgCIgDgDIgJAGIAAgWIADgQIgDgXIAFglIgLgjIABgYIAEgNIADgSIBAAsIAhASIAaAIIAQAJIANAAIAFADIAFAIIACAfIgCAHIgKAHIgEAOIAAALIABAGIgBAGIgDAFIAAAFIAGAFIAMgGIAIgcIAFgGIAFgNIARgRIABgHIgUg8IgBgGIAEgCIAHACIAIgQIgBgSIgLAAIgCgjIHaB7IhHE5IgEAFIAAALIAGAKIgCAHIgEAGIABAQg");
	this.shape_5.setTransform(34,24.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,70.1,51.3);


(lib.vtSelected = function() {
	this.initialize();

	// buttonVt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(1,0,0,10,true).p("AhWhzIAHALIgDAGIAFAGIABAEIAOAlIAFAaIgGANIABAMIAQAjIgCARIADAFIADgBIgCgEIAGAAIAKAQIAGAfIAAARIAHAVIAKAUIBDgPIgCgGIgHgIIABgNIACgEIgDgLIgFg0IAAgQIALgwIABgOIgGgLIAAgLIAEgHIAVgRIALgcIgLgPIgCgIIAEgEIAAgGIgFgTg");
	this.shape.setTransform(8.8,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgQCIIgHgUIAAgSIgGgeIgKgQIgGAAIACADIgDACIgDgFIACgRIgQgjIgBgMIAGgNIgFgbIgPgkIgBgEIgEgGIACgGIgHgMICigoIAGATIAAAFIgEAFIACAIIAKAPIgKAcIgVAQIgEAHIAAAMIAGALIgBANIgMAxIAAAQIAGAzIADAMIgDAEIAAANIAHAIIACAGIhDAPg");
	this.shape_1.setTransform(8.9,15.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.8,33.5);


(lib.vt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgmIgOAAIAAgFIAhAAIAAAFIgPAAIAAAmg");
	this.shape.setTransform(11.3,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgmIgOAAIAAgFIAhAAIAAAFIgPAAIAAAmg");
	this.shape_1.setTransform(11.3,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCASIgRgqIAGAAIANAlIABgHIANgeIAGAAIgSAqg");
	this.shape_2.setTransform(7.3,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAWIgRgrIAGAAIANAmIABgIIANgeIAGAAIgSArg");
	this.shape_3.setTransform(7.3,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,0,0,10,true).p("AhXhzIAHALIgDAGIAFAGIABAEIAPAlIAFAaIgGANIABAMIAQAjIgCARIADAFIADgBIgCgEIAGAAIAJAQIAHAfIAAARIAHAVIAKAUIBDgPIgCgGIgIgIIABgNIADgEIgEgLIgFg0IAAgQIAMgwIABgOIgGgLIAAgLIAEgHIAUgRIALgcIgLgPIgCgIIAEgEIAAgGIgFgTg");
	this.shape_4.setTransform(8.8,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgQCIIgHgUIAAgSIgHgeIgJgQIgGAAIACADIgDABIgDgEIACgRIgQgjIgBgNIAGgMIgFgbIgPgkIgBgEIgFgGIAEgGIgIgMICigoIAGATIAAAFIgFAFIADAIIALAPIgLAcIgVAQIgEAHIAAAMIAGALIgBANIgMAxIAAAPIAGA0IADAMIgCAEIgBANIAHAIIACAGIhDAPg");
	this.shape_5.setTransform(8.9,15.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.8,33.5);


(lib.vaSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgUg");
	this.shape.setTransform(63.7,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgHAAIASgrIAFAAIASArgAgHADIAOAAIgHgTg");
	this.shape_1.setTransform(63.7,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCATIgRgqIAGAAIANAlIAOglIAGAAIgRAqg");
	this.shape_2.setTransform(60,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgBAWIgSgrIAHAAIAMAmIAOgmIAGAAIgRArg");
	this.shape_3.setTransform(60,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgPgvIADABIABALIgBAGIgIAJIgEAIIgDASIADASIAAATIAFAOIADgTIAGgTIAPgmIADgLIgBgQIABgGIAOgLIACgFIgfALg");
	this.shape_4.setTransform(78.1,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgWAxIAAgTIgDgSIADgSIAEgIIAIgJIABgGIgBgLIgDgBIAIgKIAfgLIgCAFIgOALIgBAGIABAQIgDALIgPAmIgGATIgDATg");
	this.shape_5.setTransform(77.9,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AF/BjIkBAxIkNAsIgFgCIgLADIgcADIACgFIgdAFIAAADIiqAVIAHgHIAkgRIAEgJIAUgOIABgJIADgFIAKgGIABgLIA/g2IADgKIAEADIgEAKIAQAPIAWAIIALABIAMgKIABgHIAIgEIAIAHIAFADIAIgCIAZgKIAEgQIADAAIAGAFIAVgRIAHAEIARgWIgEgJIABgPIARgeIAWhTIAEgBIAMAIIACAFIAGAHIAMgDIAJgPIAIgfIAHgMIAMAFIAIgSIAIgDIAHgKIAGgRIAFgEIABgEIgEgEIACgZIACgEIAEgDIAvAdIAHACIACgCIAFgZIAIAAIASAGIgGAKIALAMIATAAIAKAJIAMAFIAJALIgCAGIgVAqIADAOIAPABIANgIIAKAMIAGADIAFABIAIAHIAEABIAHgEIAEABIAXAMIARAFIAJAKIgBAFIgGAFIADAQIgDADIgFADIAAACIASAIIAGANIgBAFIgDACIgOgCIgCAFIAFAGIADgBIAAAFIgIADIgEAAIgBADIAFAEIAMABIALAEIADAGIgMAMIgGAAIgPgFIAAAGIAKAFIAJAIIALgEIALgIIAaAAIABACIAMAiIgJAIIgCAAg");
	this.shape_6.setTransform(38.6,22.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("Al9DVIAkgRIAEgJIAUgNIABgJIADgGIAKgGIABgLIA/g2IADgKIAEADIgEALIAQAOIAWAIIALABIAMgKIABgHIAIgDIAIAHIAFADIAIgCIAZgKIAEgQIADAAIAGAEIAVgRIAHAEIARgWIgEgJIABgPIARgeIAWhTIAEgBIAMAIIACAFIAGAHIAMgDIAJgPIAIgfIAHgMIAMAFIAIgRIAIgDIAHgKIAGgRIAFgFIABgDIgEgFIACgYIACgFIAEgCIAvAdIAHABIACgBIAFgaIAIAAIASAHIgGAJIALAMIATAAIAKAJIAMAGIAJAKIgCAHIgVApIADAOIAPABIANgIIAKAMIAGADIAFABIAIAHIAEABIAHgEIAEABIAXAMIARAFIAJAKIgBAFIgGAFIADAQIgDADIgFADIAAACIASAIIAGANIgBAFIgDACIgOgCIgCAFIAFAGIADgBIAAAFIgIADIgEAAIgBADIAFAEIAMABIALAEIADAGIgMAMIgGAAIgPgFIAAAGIAKAFIAJAIIALgEIALgIIAaAAIABACIAMAiIgJAJIgCAAIABAEIkBAyIkNAsIgFgCIgLADIgcACIACgEIgdAEIAAAEIiqAVg");
	this.shape_7.setTransform(39,22.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,82.6,46.2);


(lib.va = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgUg");
	this.shape.setTransform(57.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgHAAIASgrIAFAAIASArgAgHADIAOAAIgHgTg");
	this.shape_1.setTransform(57.2,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCATIgRgqIAGAAIANAlIAOglIAGAAIgRAqg");
	this.shape_2.setTransform(53.5,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgBAWIgSgrIAHAAIAMAmIAOgmIAGAAIgRArg");
	this.shape_3.setTransform(53.5,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgPgvIADABIABALIgBAGIgIAJIgEAIIgDASIADASIAAATIAFAOIADgTIAGgTIAPgmIADgLIgBgQIABgGIAOgLIACgFIgfALg");
	this.shape_4.setTransform(78.1,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgWAxIAAgTIgDgSIADgSIAEgIIAIgJIABgGIgBgLIgDgBIAIgKIAfgLIgCAFIgOALIgBAGIABAQIgDALIgPAmIgGATIgDATg");
	this.shape_5.setTransform(77.9,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AF/BjIkBAxIkNAsIgFgCIgLADIgcADIACgFIgdAFIAAADIiqAVIAHgHIAkgRIAEgJIAUgOIABgJIADgFIAKgGIABgLIA/g2IADgKIAEADIgEAKIAQAPIAWAIIALABIAMgKIABgHIAIgEIAIAHIAFADIAIgCIAZgKIAEgQIADAAIAGAFIAVgRIAHAEIARgWIgEgJIABgPIARgeIAWhTIAEgBIAMAIIACAFIAGAHIAMgDIAJgPIAIgfIAHgMIAMAFIAIgSIAIgDIAHgKIAGgRIAFgEIABgEIgEgEIACgZIACgEIAEgDIAvAdIAHACIACgCIAFgZIAIAAIASAGIgGAKIALAMIATAAIAKAJIAMAFIAJALIgCAGIgVAqIADAOIAPABIANgIIAKAMIAGADIAFABIAIAHIAEABIAHgEIAEABIAXAMIARAFIAJAKIgBAFIgGAFIADAQIgDADIgFADIAAACIASAIIAGANIgBAFIgDACIgOgCIgCAFIAFAGIADgBIAAAFIgIADIgEAAIgBADIAFAEIAMABIALAEIADAGIgMAMIgGAAIgPgFIAAAGIAKAFIAJAIIALgEIALgIIAaAAIABACIAMAiIgJAIIgCAAg");
	this.shape_6.setTransform(38.6,22.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("Al9DVIAkgRIAEgJIAUgNIABgJIADgGIAKgFIABgMIA/g2IADgKIAEAEIgEAKIAQAOIAWAIIALABIAMgKIABgGIAIgFIAIAIIAFACIAIgCIAZgJIAEgRIADAAIAGAGIAVgSIAHAEIARgWIgEgJIABgPIARgeIAWhTIAEgBIAMAIIACAFIAGAHIAMgDIAJgPIAIgfIAHgLIAMAEIAIgSIAIgCIAHgKIAGgRIAFgFIABgEIgEgDIACgZIACgFIAEgDIAvAdIAHACIACgCIAFgZIAIAAIASAGIgGAKIALANIATAAIAKAJIAMAEIAJALIgCAGIgVAqIADAOIAPABIANgIIAKAMIAGADIAFABIAIAHIAEABIAHgEIAEABIAXAMIARAFIAJAKIgBAFIgGAFIADAQIgDADIgFADIAAACIASAIIAGANIgBAFIgDACIgOgCIgCAFIAFAGIADgBIAAAFIgIADIgEAAIgBADIAFAEIAMABIALAEIADAGIgMAMIgGAAIgPgFIAAAGIAKAFIAJAIIALgEIALgIIAaAAIABACIAMAiIgJAIIgCAAIABAGIkBAwIkNAsIgFgBIgLACIgcADIACgEIgdAEIAAAEIiqAUg");
	this.shape_7.setTransform(39,22.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,82.6,46.2);


(lib.utSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("ADbFjIBFn6Ii+gdIAVh8IkagyIh8J2g");
	this.shape.setTransform(28.9,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AkfEUIB8p2IEaAyIgVB8IC+AdIhFH6g");
	this.shape_1.setTransform(28.9,35.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.8,73.1);


(lib.ut = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAglIgOAAIAAgGIAhAAIAAAGIgPAAIAAAlg");
	this.shape.setTransform(30.3,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAglIgOAAIAAgGIAhAAIAAAGIgPAAIAAAlg");
	this.shape_1.setTransform(30.3,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AALgVIAGAAIAAAYQAAAHgBADQgBADgFAEQgFACgFAAQgFAAgEgCQgEgDgBgDQgCgEAAgHIAAgYIAGAAIAAAYIABAIQACADACABQACACADAAQAGAAACgDQADgDAAgIg");
	this.shape_2.setTransform(26.1,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJAUQgEgDgBgDQgCgEAAgHIAAgYIAGAAIAAAYIABAIIAEAEQACACADAAQAGAAACgDQADgDAAgIIAAgYIAGAAIAAAYQAAAHgBADQgBADgFAEQgFACgFAAQgFAAgEgCg");
	this.shape_3.setTransform(26.1,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("ADbFjIBFn6Ii+gdIAVh8IkagyIh8J2g");
	this.shape_4.setTransform(28.9,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AkfEUIB8p2IEaAyIgVB8IC+AdIhFH6g");
	this.shape_5.setTransform(28.9,35.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.8,73.1);


(lib.txSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AJcktIgFgBIgEgFIgJgDIg0gbIgDADIgPAFIgXgDIgJAAIgIABIgTAHIgXACIgGADIgRANIgQgLIgKgFIAAgDIgDgCIgIgBIgEAGIgFAAIgMgEIgBgIIgEgBIgKAGIgIALIABAHIgHAFIgEgIIACgLIgBgFIgJAAIgLAIIgEAAIgagTIgIADIgEANIgUgEIAAgNIgEgCIgMgKIAAgEIgbgEIgHAIIgMgFIgHgKIgIACIgCACIgGAAIgKgFIgcgFIgDgCIgGgJIABgGIgDgGIgMgGIgIAGIgVACIgHgDIgPgTIgGgFIgLgCIAIj2Ik3gSIgvI/ImDgkIgCACIADAEIABACIgEAIIAEAKIACACIAVANIANAfIAUAMIA8BFIAyAoIAEAHIADAJIgBALIAPAYIgBApIADAMIATAdIBLA3IA0AgIAOACIAKgFIALgOIAJgHIAWgyIALgQIAIgEIASAFIAEgBIADgIIAFgGIAKAEIAJAGIAdAEIAJAEIASAFIAKgEIAXANIAFANIAEACIACAFIAEABIAKAGIANASIAXATIALARIABAIIAhBOIAFAQIAlApIADAKIAXAbIAHAEIAKAMIADAHIgCAbIAIAKIADAeIAIAKIAaAyIADAOIASACIAUAMIAYAIIAlAXIA6AFIAaASIAOAGIAMgPIALADIAEgEIAAgHIgLgEIACgEIgLgNIgZhUIAMgkIgCgMIgDgCIgDgBIgCgCIAAgDIACgCIARgKIAKghIgIgDIgDgQIAIgKIALAIIASgNIAFgRIgJgHIAEgIIAEACIAFABIAEgFIAGADIAGAAIAFgCIABgEIAAgOIACgEIAFgBIACACIAFABIAcgHIADgBIABgFIgCgDIgOgIIAAgGIAZgHIAEgEIAHgCIACACIgDACIAEAHIAEAAIAFgDIAngMIBCgqIADgQIAegaIABgEIgNgSIADgOIAVgIIAEAAIgDAQIACAFIAXgDIAEAGIAugUIAcgDIABgBIgBgDIgFgFIgDgIIAEgEIADgIIAIgIIAKgcIgIgMIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgUIgIgMIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgKgSIgPgNIgFgIIgDjEIgQgEIgOAGIgFgBg");
	this.shape.setTransform(71.5,69.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AEOKsIgagSIg6gFIglgXIgYgIIgUgMIgSgCIgDgOIgagyIgIgKIgDgdIgIgKIACgbIgDgHIgKgNIgHgEIgXgaIgDgKIglgqIgFgPIghhPIgBgIIgLgRIgXgTIgNgSIgKgGIgEgBIgCgFIgEgCIgFgNIgXgNIgKAEIgSgFIgJgEIgdgEIgJgGIgKgEIgFAGIgDAIIgEABIgSgFIgIAEIgLAQIgWAyIgJAHIgLAOIgKAFIgOgCIg0ggIhLg3IgTgdIgDgMIABgpIgPgXIABgMIgDgJIgEgGIgygpIg8hFIgUgMIgNgfIgVgNIgCgCIgEgKIAEgIIgBgCIgDgEIACgCIGDAkIAvo/IE3ASIgID2IALADIAGAEIAPATIAHAEIAVgDIAIgFIAMAFIADAHIgBAGIAGAJIADACIAcAEIAKAFIAGAAIACgBIAIgCIAHAKIAMAEIAHgIIAbAFIAAADIAMAKIAEADIAAAMIAUAEIAEgMIAIgDIAaATIAEAAIALgIIAJAAIABAEIgCAMIAEAIIAHgGIgBgHIAIgLIAKgGIAEABIABAIIAMAFIAFAAIAEgHIAIABIADACIAAAEIAKAEIAQAMIARgOIAGgCIAXgCIATgHIAIgBIAJAAIAXACIAPgFIADgDIA0AbIAJADIAEAGIAFAAIAQAMIAFACIAOgGIAQADIADDEIAFAIIAPANIAKASIgEAOIACAEIAHAGIAGAMIAEAFIgCAIIAEADIAIANIAEATIAAAPIgEAWIgFAMIgIAGIgDARIABAIIgCAFIAAAJIAIAMIgKAcIgIAIIgDAIIgEAEIADAIIAFAFIABADIgBABIgcADIguAUIgEgGIgXADIgCgFIADgQIgEAAIgVAIIgDAOIANASIgBAEIgeAaIgDAQIhCAqIgnAMIgFAEIgEAAIgEgHIADgDIgCgCIgHACIgEAEIgZAHIAAAHIAOAIIACADIgBAEIgDACIgcAGIgFgBIgCgBIgFAAIgCAFIAAANIgBAFIgFACIgGAAIgGgEIgEAFIgFAAIgEgCIgEAIIAJAGIgFARIgSAOIgLgIIgIAKIADAQIAIADIgKAhIgRAKIgCACIAAACIACADIADABIADACIACALIgMAkIAZBUIALANIgCAEIALAEIAAAHIgEAEIgLgDIgMAPg");
	this.shape_1.setTransform(71.6,69.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.3,140.1);


(lib.tx = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgTAVIARgVIgPgVIAHAAIAKARIANgRIAGAAIgQAVIARAVIgHAAIgLgQQgBAAgBgCIgBADIgLAPg");
	this.shape.setTransform(91.4,66.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AANAWIgLgQIgCgDIgBADIgLAQIgHAAIARgWIgPgUIAHAAIAKAQIANgQIAGAAIgQAUIARAWg");
	this.shape_1.setTransform(91.4,66.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAVIAAglIgPAAIAAgFIAjAAIAAAFIgPAAIAAAlg");
	this.shape_2.setTransform(87.4,66.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgBAWIAAgmIgQAAIAAgEIAiAAIAAAEIgPAAIAAAmg");
	this.shape_3.setTransform(87.4,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AJcktIgFgBIgEgFIgJgDIg0gbIgDADIgPAFIgXgDIgJAAIgIABIgTAHIgXACIgGADIgRANIgQgLIgKgFIAAgDIgDgCIgIgBIgEAGIgFAAIgMgEIgBgIIgEgBIgKAGIgIALIABAHIgHAFIgEgIIACgLIgBgFIgJAAIgLAIIgEAAIgagTIgIADIgEANIgUgEIAAgNIgEgCIgMgKIAAgEIgbgEIgHAIIgMgFIgHgKIgIACIgCACIgGAAIgKgFIgcgFIgDgCIgGgJIABgGIgDgGIgMgGIgIAGIgVACIgHgDIgPgTIgGgFIgLgCIAIj2Ik3gSIgvI/ImDgkIgCACIADAEIABACIgEAIIAEAKIACACIAVANIANAfIAUAMIA8BFIAyAoIAEAHIADAJIgBALIAPAYIgBApIADAMIATAdIBLA3IA0AgIAOACIAKgFIALgOIAJgHIAWgyIALgQIAIgEIASAFIAEgBIADgIIAFgGIAKAEIAJAGIAdAEIAJAEIASAFIAKgEIAXANIAFANIAEACIACAFIAEABIAKAGIANASIAXATIALARIABAIIAhBOIAFAQIAlApIADAKIAXAbIAHAEIAKAMIADAHIgCAbIAIAKIADAeIAIAKIAaAyIADAOIASACIAUAMIAYAIIAlAXIA6AFIAaASIAOAGIAMgPIALADIAEgEIAAgHIgLgEIACgEIgLgNIgZhUIAMgkIgCgMIgDgCIgDgBIgCgCIAAgDIACgCIARgKIAKghIgIgDIgDgQIAIgKIALAIIASgNIAFgRIgJgHIAEgIIAEACIAFABIAEgFIAGADIAGAAIAFgCIABgEIAAgOIACgEIAFgBIACACIAFABIAcgHIADgBIABgFIgCgDIgOgIIAAgGIAZgHIAEgEIAHgCIACACIgDACIAEAHIAEAAIAFgDIAngMIBCgqIADgQIAegaIABgEIgNgSIADgOIAVgIIAEAAIgDAQIACAFIAXgDIAEAGIAugUIAcgDIABgBIgBgDIgFgFIgDgIIAEgEIADgIIAIgIIAKgcIgIgMIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgUIgIgMIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgKgSIgPgNIgFgIIgDjEIgQgEIgOAGIgFgBg");
	this.shape_4.setTransform(71.5,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AEOKsIgagSIg6gFIglgXIgYgIIgUgMIgSgCIgDgOIgagyIgIgKIgDgdIgIgKIACgbIgDgHIgKgNIgHgEIgXgaIgDgKIglgqIgFgPIghhPIgBgIIgLgRIgXgTIgNgSIgKgGIgEgBIgCgFIgEgCIgFgNIgXgNIgKAEIgSgFIgJgEIgdgEIgJgGIgKgEIgFAGIgDAIIgEABIgSgFIgIAEIgLAQIgWAyIgJAHIgLAOIgKAFIgOgCIg0ggIhLg3IgTgdIgDgMIABgpIgPgXIABgMIgDgJIgEgGIgygpIg8hFIgUgMIgNgfIgVgNIgCgCIgEgKIAEgIIgBgCIgDgEIACgCIGDAkIAvo/IE3ASIgID2IALADIAGAEIAPATIAHAEIAVgDIAIgFIAMAFIADAHIgBAGIAGAJIADACIAcAEIAKAFIAGAAIACgBIAIgCIAHAKIAMAEIAHgIIAbAFIAAADIAMAKIAEADIAAAMIAUAEIAEgMIAIgDIAaATIAEAAIALgIIAJAAIABAEIgCAMIAEAIIAHgGIgBgHIAIgLIAKgGIAEABIABAIIAMAFIAFAAIAEgHIAIABIADACIAAAEIAKAEIAQAMIARgOIAGgCIAXgCIATgHIAIgBIAJAAIAXACIAPgFIADgDIA0AbIAJADIAEAGIAFAAIAQAMIAFACIAOgGIAQADIADDEIAFAIIAPANIAKASIgEAOIACAEIAHAGIAGAMIAEAFIgCAIIAEADIAIANIAEATIAAAPIgEAWIgFAMIgIAGIgDARIABAIIgCAFIAAAJIAIAMIgKAcIgIAIIgDAIIgEAEIADAIIAFAFIABADIgBABIgcADIguAUIgEgGIgXADIgCgFIADgQIgEAAIgVAIIgDAOIANASIgBAEIgeAaIgDAQIhCAqIgnAMIgFAEIgEAAIgEgHIADgDIgCgCIgHACIgEAEIgZAHIAAAHIAOAIIACADIgBAEIgDACIgcAGIgFgBIgCgBIgFAAIgCAFIAAANIgBAFIgFACIgGAAIgGgEIgEAFIgFAAIgEgCIgEAIIAJAGIgFARIgSAOIgLgIIgIAKIADAQIAIADIgKAhIgRAKIgCACIAAACIACADIADABIADACIACALIgMAkIAZBUIALANIgCAEIALAEIAAAHIgEAEIgLgDIgMAPg");
	this.shape_5.setTransform(71.6,69.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.3,140.1);


(lib.tnSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AGoiQIirAVIgJAGImmAnIgHgFIgSACIAEAHIAAAMIiVALIgIASIgFAWIACAHIgFARIgEAGIACAGIgEALIgNAOIgFAaIgOARIACASIgBAWIgEACIgLAKIDZgPIF2gkIADgeIAJAAIAEgBIAIgIIABgIIgBgFIAMgRIAVgJIAYgGIAYgTIAKgEIAPgOIAEgMIACgBIAGABIAGgJIAIgIIADABIAHAEIAIgEIABgDIANgKIAJgEIAQgBIASgdIAOgIIADgQIgBgKg");
	this.shape.setTransform(41.7,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AmYCHIAEgCIABgWIgCgSIANgRIAFgaIANgOIAEgLIgCgGIAEgGIAFgRIgCgHIAFgWIAIgSICWgLIAAgMIgEgHIARgCIAHAFIGmgnIAKgGICqgVIgCAIIABAKIgDAQIgOAIIgRAdIgQABIgJAEIgNAKIgCADIgIAEIgHgEIgDgBIgIAIIgGAJIgGgBIgCABIgEAMIgOAOIgKAEIgYATIgZAGIgVAJIgLARIABAFIgBAIIgIAIIgEABIgJAAIgDAeIl2AkIjZAPg");
	this.shape_1.setTransform(42.1,14.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.2,31.2);


(lib.tn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgWghIAAAhg");
	this.shape.setTransform(42,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_1.setTransform(42,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAglIgOAAIAAgGIAhAAIAAAGIgPAAIAAAlg");
	this.shape_2.setTransform(37.8,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAWIAAglIgOAAIAAgGIAhAAIAAAGIgPAAIAAAlg");
	this.shape_3.setTransform(37.8,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AGoiQIirAVIgJAGImmAnIgHgFIgSACIAEAHIAAAMIiVALIgIASIgFAWIACAHIgFARIgEAGIACAGIgEALIgNAOIgFAaIgOARIACASIgBAWIgEACIgLAKIDZgPIF2gkIADgeIAJAAIAEgBIAIgIIABgIIgBgFIAMgRIAVgJIAYgGIAYgTIAKgEIAPgOIAEgMIACgBIAGABIAGgJIAIgIIADABIAHAEIAIgEIABgDIANgKIAJgEIAQgBIASgdIAOgIIADgQIgBgKg");
	this.shape_4.setTransform(41.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AmYCHIAEgCIABgWIgCgSIANgRIAFgaIANgOIAEgLIgCgGIAEgGIAFgRIgCgHIAFgWIAIgSICWgLIAAgMIgEgHIARgCIAHAFIGmgnIAKgGICqgVIgCAIIABAKIgDAQIgOAIIgRAdIgQABIgJAEIgNAKIgCADIgIAEIgHgEIgDgBIgIAIIgGAJIgGgBIgCABIgEAMIgOAOIgKAEIgYATIgZAGIgVAJIgLARIABAFIgBAIIgIAIIgEABIgJAAIgDAeIl2AkIjZAPg");
	this.shape_5.setTransform(42.1,14.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.2,31.2);


(lib.textDot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3399").s().p("AzWKPIAA0dMAmtAAAIAAUdg");
	this.shape.setTransform(124,65.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,248,131);


(lib.sdSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AllCHIAgl3IKeAdIABALIgGANIgQARIABALIAgAfIABDnIgGgBIgIABIADAIIAEAHIgFANIAHAGIAEATIgHAGIACALIgKAXIAKAYIACANIAAADIg9gpIgLgDIgRAAIgNAKIgOADIgNgDIgIgRIgKgHIgNADIgSAAIgOgUg");
	this.shape.setTransform(35.9,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AElDGIgLgEIgRAAIgNALIgOADIgNgDIgIgRIgKgHIgNACIgSAAIgOgUIoHgaIAgl3IKeAdIABAMIgGAMIgQARIABALIAgAgIABDmIgGgBIgIABIADAIIAEAHIgFANIAHAGIAEATIgHAGIACALIgKAYIAKAYIACAMIAAADg");
	this.shape_1.setTransform(35.9,23.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.8,49.8);


(lib.sd = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgLAQIAOAAQACgBACgCIAEgFQABgDAAgFQAAgGgCgEQgCgDgEgCQgCAAgEAAIgJAAgAgRAWIAAgrIAVABQAFACACABQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABg");
	this.shape.setTransform(38.4,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgRAWIAAgrIAVABIAHADQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABgAgLAQIAOAAIAEgDIAEgFIABgIQAAgGgCgEQgCgDgEgCIgGAAIgJAAg");
	this.shape_1.setTransform(38.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAHIAFAAQAAACACADQACACADACQADABABAAIAGgBQAEgCAAgBQACgBAAgCQAAgDgCgBQAAgBgEgCIgOgDQgEgBgBgDQgCgCAAgDQAAgEACgDQADgDADgBQAEgBADAAQAEAAAEABQAEACACADQABACABAFIgGAAQAAgDgDgDQgCgCgFAAQgEAAgCACQgDABAAADQAAADACABQABACAGABIAKADQAEAAABADQACACAAAEQAAAEgCADQgCACgEADQgDABgFAAQgEAAgEgBQgFgDgCgDQgCgDAAgFg");
	this.shape_2.setTransform(33.9,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgHAVQgFgDgCgDQgCgDAAgFIAFAAQAAACACADIAFAEQADABABAAIAGgBIAEgDQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAIgEgDIgOgDQgEgBgBgDQgCgCAAgDQAAgEACgDIAGgEQAEgBADAAQAEAAAEABQAEACACADIACAHIgGAAQAAgDgDgDQgCgCgFAAQgEAAgCACQgDABAAADQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQABACAGABIAKADQAEAAABADQACACAAAEQAAAEgCADIgGAFQgDABgFAAQgEAAgEgBg");
	this.shape_3.setTransform(33.9,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AllCHIAgl3IKeAdIABALIgGANIgQARIABALIAgAfIABDnIgGgBIgIABIADAIIAEAHIgFANIAHAGIAEATIgHAGIACALIgKAXIAKAYIACANIAAADIg9gpIgLgDIgRAAIgNAKIgOADIgNgDIgIgRIgKgHIgNADIgSAAIgOgUg");
	this.shape_4.setTransform(35.9,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AElDGIgLgEIgRAAIgNALIgOADIgNgDIgIgRIgKgHIgNACIgSAAIgOgUIoHgaIAgl3IKeAdIABAMIgGAMIgQARIABALIAgAgIABDmIgGgBIgIABIADAIIAEAHIgFANIAHAGIAEATIgHAGIACALIgKAYIAKAYIACAMIAAADg");
	this.shape_5.setTransform(35.9,23.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.8,49.8);


(lib.scSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AAyDDIgUgBIgEgDIgEgGIgGgaIgNgSIgOgFIgIgbIgLgMIgFgOIgbgLIgLgOIgMgIIgBgHIgGgNIgEgEIgRgGIgigdIgPgFIgEgKIgOgMIgKgUIgKgKIgEgIIgWgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCIAfgPIAJAAIABgGIAbgMIADgEIAEAAICIgQIABAEIgCAEIAEAFIALgFIASAQIADAQIB1gPICKBfIgFADIgLAHIgWAdIgOAiIAAAYIgEAEIgDAGIgJABIgMAOIgNAUIgRAMIgKAPIgjAeIgKAFIgGACIgDAEIABADIgCACIgFAKIgJAIIgIAAIgCACIgBACIACADIAEABIACACIgBAFIgFADIgJAJIgDAHg");
	this.shape.setTransform(26.4,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAgDCIgEgDIgEgGIgGgaIgOgSIgNgFIgIgbIgLgNIgFgNIgbgLIgLgPIgNgIIgBgHIgFgMIgFgEIgRgGIghgeIgPgEIgEgKIgOgNIgKgUIgKgKIgFgHIgVgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCIAfgPIAJAAIABgGIAbgMIADgEIAEAAICIgQIABAEIgCAEIAEAFIAKgFIASAQIAEAQIB1gPICKBfIgFADIgLAGIgWAeIgPAhIAAAYIgDAFIgEAFIgJABIgMAOIgMAUIgRANIgKAOIgjAfIgKAEIgHACIgCAFIABADIgCACIgGAKIgIAIIgIAAIgCACIgBACIACADIAEABIACACIgBAFIgFADIgJAJIgDAHIAAACg");
	this.shape_1.setTransform(26.3,19.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,54.5,41.1);


(lib.sc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AANAGIAGACQgDAHgEADQgFAFgHAAQgFAAgFgDQgEgEgDgFQgCgGAAgFQAAgFADgGQACgFAFgDQAGgDADAAQAHAAAEAEQAFADACAGIgGACQgCgFgCgDQgDgCgFAAQgDAAgEADQgDADgBAEQgCAEAAADQAAAFACAEQACAEADACQAEADACAAQAFAAADgDQADgEACgFg");
	this.shape.setTransform(26.5,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgJAUQgEgDgDgGQgDgGABgFQAAgGACgFQACgFAGgDQAGgCADgBQAHABAEADQAFADABAHIgFABQgCgFgDgDQgCgBgFAAQgDgBgEADQgEADAAAEIgCAHQAAAFACAEQACAFACABQAEACACABQAFAAAEgEQADgDACgFIAFACQgCAHgFAEQgFADgGAAQgFAAgFgCg");
	this.shape_1.setTransform(26.4,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgRAIIAGgBIACAGQACACACABQADABACAAIAGgBIAEgDIABgDIgBgEIgEgDIgPgDQgDgCgBgCQgCgCAAgEQAAgDACgCQACgEAEgBQAEgCADAAQAFAAADACQAEABACAEQACAEAAACIgGABQAAgEgDgCQgCgDgFAAQgEAAgDACQgCADAAACQAAADACABQABACAGACIAKACQACAAADADQACADAAADQAAACgCAFQgCADgDACQgFACgFAAQgCAAgGgCQgEgCgCgDQgDgFAAgDg");
	this.shape_2.setTransform(22,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgIAUQgDgBgDgDQgCgFgBgDIAGgBIACAFIAEAEQAEABABAAIAHgBIADgDIABgDIgBgEIgDgDIgPgDIgFgEQgCgCAAgDQAAgEADgCQABgDAEgCIAHgCQAEABAEABQAEABACAEIACAHIgGAAQAAgEgDgCQgDgDgEABQgEAAgDABQgCADAAADQAAAAAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAFABIAJADIAHACIABAHIgBAHQgCADgFABQgEACgFAAQgBAAgHgCg");
	this.shape_3.setTransform(22,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AAyDDIgUgBIgEgDIgEgGIgGgaIgNgSIgOgFIgIgbIgLgMIgFgOIgbgLIgLgOIgMgIIgBgHIgGgNIgEgEIgRgGIgigdIgPgFIgEgKIgOgMIgKgUIgKgKIgEgIIgWgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCIAfgPIAJAAIABgGIAbgMIADgEIAEAAICIgQIABAEIgCAEIAEAFIALgFIASAQIADAQIB1gPICKBfIgFADIgLAHIgWAdIgOAiIAAAYIgEAEIgDAGIgJABIgMAOIgNAUIgRAMIgKAPIgjAeIgKAFIgGACIgDAEIABADIgCACIgFAKIgJAIIgIAAIgCACIgBACIACADIAEABIACACIgBAFIgFADIgJAJIgDAHg");
	this.shape_4.setTransform(26.4,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AAgDCIgEgDIgEgGIgGgaIgOgSIgNgFIgIgbIgLgNIgFgNIgbgLIgLgPIgNgIIgBgHIgFgMIgFgEIgRgGIghgeIgPgEIgEgKIgOgNIgKgUIgKgKIgFgHIgVgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCIAfgPIAJAAIABgGIAbgMIADgEIAEAAICIgQIABAEIgCAEIAEAFIAKgFIASAQIAEAQIB1gPICKBfIgFADIgLAGIgWAeIgPAhIAAAYIgDAFIgEAFIgJABIgMAOIgMAUIgRANIgKAOIgjAfIgKAEIgHACIgCAFIABADIgCACIgGAKIgIAIIgIAAIgCACIgBACIACADIAEABIACACIgBAFIgFADIgJAJIgDAHIAAACg");
	this.shape_5.setTransform(26.3,19.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,54.5,41.1);


(lib.riSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgsgmIAVBFIgFALIACAGIAGABIASgMIAJgKIAAgIIgDgFIAAgMIAIgGIADADIAAAUIADAFIAGgBIAAgJIAEAAIAGgGIAJgBIABgBIgHgGIgBgEIgEgBIgCgDIgHgEIAAgEIgRgEIgFgNIgEgCIgEgMg");
	this.shape.setTransform(-2.9,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgaAwIgBgHIAEgKIgVhGIAlgJIAEAMIAEADIAFANIARADIAAAFIAHADIADAEIADABIABADIAIAGIgBABIgJABIgHAGIgEAAIAAAJIgGABIgDgEIAAgVIgDgCIgIAGIAAALIADAGIAAAHIgJALIgSAMg");
	this.shape_1.setTransform(-2.9,-5.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-11.4,11,11.8);


(lib.ri = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgBAWIAAgqIAEAAIAAAqg");
	this.shape.setTransform(12.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgBAVIAAgqIADAAIAAAqg");
	this.shape_1.setTransform(12.9,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgPgBIANAAIAEgBIAEgCQABgCAAgCQAAgEgCgCQgDgCgDAAIgOAAgAgVAWIAAgqIAUAAQAFAAACABQADABACADQACAEAAADQAAAEgDAEQgEABgGABIAEACIANASIgIAAIgJgPIgCgDIgDgCIgKAAIAAAUg");
	this.shape_2.setTransform(10.2,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAMAVIgKgOIgCgEIgCgBIgKAAIAAATIgGAAIAAgqIASAAQAHAAACABIAFAFQACADAAAEQAAAEgEAEQgDABgGAAIAEACIAMASgAgMgBIAMAAIAFgBIADgDIABgDQAAgEgCgCQgDgCgEAAIgMAAg");
	this.shape_3.setTransform(9.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgsgmIAVBFIgFALIACAGIAGABIASgMIAJgKIAAgIIgDgFIAAgMIAIgGIADADIAAAUIADAFIAGgBIAAgJIAEAAIAGgGIAJgBIABgBIgHgGIgBgEIgEgBIgCgDIgHgEIAAgEIgRgEIgFgNIgEgCIgEgMg");
	this.shape_4.setTransform(4.5,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgaAvIgCgFIAGgMIgWhEIAlgJIAEAMIAEABIAFAOIARADIAAAEIAIAFIACACIADABIABAFIAHAGIgBABIgJABIgGAGIgEAAIAAAJIgGABIgDgGIAAgTIgDgEIgIAGIAAANIADAEIAAAIIgJAKIgSAMg");
	this.shape_5.setTransform(4.5,4.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.2,15.2);


(lib.paSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIANAAIgGgTg");
	this.shape.setTransform(22.7,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgFgOIgRAAIgFAOIgHAAIASgrIAEAAIASArgAgGAEIANAAIgHgUg");
	this.shape_1.setTransform(22.7,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgrIAVABIAFACQAEACAAACQABADAAADQAAAGgDACQgEAEgJAAIgJAAIAAASgAgJAAIAJAAQAGAAACgCQADgCAAgEQAAgDgCgBQgBgDgCAAIgPAAg");
	this.shape_2.setTransform(19.1,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgPAWIAAgrIAVABIAFACQADACABACIACAGQAAAGgEACQgEAEgJAAIgJAAIAAASgAgJAAIAJAAQAGAAACgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgOAAg");
	this.shape_3.setTransform(19.1,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Aj5C+IHGhWIABgBIADgCIABgIIAJgJIALgBIAIACIAagQIADgOIAQgQIAPgJIABgDIgOgKIgFgGIgIgDIgDgEIgKgDIgFgNIgMgCIgDgCIgBgXIAHgEIgBgNIgJgIIAAgEIACgEIANgLIADgTIAAgGIAHgLIAFgCIgIgHIgZgCIgBgDIgEgEIgDgJIgNgYIgGgCIgEgEIgDABIgDgDIgDgHIgHgFImcBSIgHghIgXAVIgEACIgDgEIgEAAIgFANIgSAQIgIAFg");
	this.shape_4.setTransform(30,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AkqhYIAHgFIASgQIAFgNIAEAAIAEAEIADgCIAXgUIAHAgIGchSIAHAGIAEAHIACACIADgBIAFAEIAFADIAOAXIACAJIAFAEIABADIAYACIAIAHIgFACIgHALIAAAGIgDATIgNALIgCAEIAAAEIAJAIIABANIgHAEIACAXIACACIAMACIAFANIAKADIADAEIAIADIAFAGIAOAKIgBADIgPAJIgQAQIgDAOIgaAQIgHgBIgMAAIgJAJIgBAIIgCACIgBABInHBXg");
	this.shape_5.setTransform(30,19.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,40.2);


(lib.pa = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIANAAIgGgTg");
	this.shape.setTransform(29.7,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgFgOIgRAAIgFAOIgHAAIASgrIAEAAIASArgAgGAEIANAAIgHgUg");
	this.shape_1.setTransform(29.7,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgrIAVABIAFACQAEACAAACQABADAAADQAAAGgDACQgEAEgJAAIgJAAIAAASgAgJAAIAJAAQAGAAACgCQADgCAAgEQAAgDgCgBQgBgDgCAAIgPAAg");
	this.shape_2.setTransform(26.1,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgPAWIAAgrIAVABIAFACQADACABACIACAGQAAAGgEACQgEAEgJAAIgJAAIAAASgAgJAAIAJAAQAGAAACgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgOAAg");
	this.shape_3.setTransform(26.1,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Aj5C+IHGhWIABgBIADgCIABgIIAJgJIALgBIAIACIAagQIADgOIAQgQIAPgJIABgDIgOgKIgFgGIgIgDIgDgEIgKgDIgFgNIgMgCIgDgCIgBgXIAHgEIgBgNIgJgIIAAgEIACgEIANgLIADgTIAAgGIAHgLIAFgCIgIgHIgZgCIgBgDIgEgEIgDgJIgNgYIgGgCIgEgEIgDABIgDgDIgDgHIgHgFImcBSIgHghIgXAVIgEACIgDgEIgEAAIgFANIgSAQIgIAFg");
	this.shape_4.setTransform(30,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AkqhYIAHgFIASgQIAFgNIAEAAIAEAEIADgCIAXgUIAHAgIGchSIAHAGIAEAHIACACIADgBIAFAEIAFADIAOAXIACAJIAFAEIABADIAYACIAIAHIgFACIgHALIAAAGIgDATIgNALIgCAEIAAAEIAJAIIABANIgHAEIACAXIACACIAMACIAFANIAKADIADAEIAIADIAFAGIAOAKIgBADIgPAJIgQAQIgDAOIgaAQIgHgBIgMAAIgJAJIgBAIIgCACIgBABInHBXg");
	this.shape_5.setTransform(30,19.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,40.2);


(lib.orSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AmOCrIgFgGIgHgaIAGgNIAAgLIAIgUIgEgoIAGgJIAIgEIAFgHIAFgNIAFgFIACgRIAEAAIAYgdIAihCIAXhHIARgeIAph1IADgRIAAgFIAJgDIAKADIAGgCIAQAHIAIAIIACAEIAOACIATAOIADAUIgCAGIgCAgIAFAKIAbANIAfACIAVgCIAQACIAjAKIAGALIApgFIANAFIAGAEIAXADIAKgCIANgGIALAAIANADIAKgDIAJAAIAHADIANABIAJADIAJAAIANgGIC0AqIACALIAJAMIAIACIAJAIIADASIgsBEIgJAHIAAAJIgKAKIgOAHIgXAhIgEAPIADAIIAPAHIAGAKIgEAHIgBAEIgDACIgBAPIgNAQIgzDhIkRhAg");
	this.shape.setTransform(43,35.4,1.044,1.043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgPETImAhoIgEgGIgIgaIAHgNIAAgLIAIgUIgFgoIAHgJIAIgEIAEgHIAGgNIAFgFIACgRIAEAAIAYgcIAhhCIAXhHIASgeIAoh2IAEgRIAAgFIAJgDIAKADIAGgCIAPAHIAJAIIACAEIAOACIATAOIADAUIgCAGIgCAgIAFAKIAbAOIAfACIAVgCIAQACIAiAKIAHALIApgFIANAFIAGAEIAWADIAKgCIAOgGIALAAIANADIAKgDIAJAAIAHADIANABIAJADIAJAAIAMgGIC0AqIACALIAJAMIAIACIAJAIIAEASIgsBEIgJAHIAAAJIgKAJIgOAHIgYAhIgDAPIACAIIAQAHIAGAKIgEAHIgBAEIgDACIgBAPIgOAQIgyDig");
	this.shape_1.setTransform(43,35.4,1.044,1.043);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,88,72.8);


(lib.or = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgOgBIAMAAIAFgBQACgBABgBQACgCAAgDQAAgCgDgDQgDgCgCAAIgOAAgAgUAWIAAgrIAUAAQAFAAACACQAEACABABQACADAAAEQAAAFgDADQgDACgHABIAEACIAFAGIAHAMIgHAAIgKgPIgBgDIgDgCIgKAAIAAAUg");
	this.shape.setTransform(51.7,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAMAVIgKgPIgCgDIgCgBIgKAAIAAATIgGAAIAAgqIASAAQAHAAACABQAEACABADQACACAAAFQAAAEgDADQgDACgHABIAEABIAFAHIAHALgAgMgBIAMAAIAFgBIADgDIACgDQAAgDgDgDQgDgCgEAAIgMAAg");
	this.shape_1.setTransform(51.5,36.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAAQAAgJAGgHQAGgFAIAAQAGAAAEACQAGADACAFQADAGAAAFQAAAHgDAFQgEAFgEADQgFACgFAAQgFAAgFgCQgFgDgDgGQgCgEAAgHgAgOAAQAAAIAEAEQAFAFAFAAQAGAAAEgFQAEgFAAgHQAAgEgBgEQgDgFgDgBQgEgCgDAAQgFAAgFAEQgEAEAAAIg");
	this.shape_2.setTransform(46.6,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgKAUQgFgDgDgGQgCgEAAgHQAAgJAGgGQAGgHAIAAQAGAAAFADQAFAEACAEQADAGAAAFQAAAHgDAFQgEAFgEADQgEACgGAAQgFAAgFgCgAgKgMQgEAEAAAIQAAAIAEAEQAFAFAFABQAGgBAFgFQADgFAAgHQABgEgCgEQgDgFgDgBQgDgCgEAAQgFgBgFAFg");
	this.shape_3.setTransform(46.6,36.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AmOCrIgFgGIgHgaIAGgNIAAgLIAIgUIgEgoIAGgJIAIgEIAFgHIAFgNIAFgFIACgRIAEAAIAYgdIAihCIAXhHIARgeIAph1IADgRIAAgFIAJgDIAKADIAGgCIAQAHIAIAIIACAEIAOACIATAOIADAUIgCAGIgCAgIAFAKIAbANIAfACIAVgCIAQACIAjAKIAGALIApgFIANAFIAGAEIAXADIAKgCIANgGIALAAIANADIAKgDIAJAAIAHADIANABIAJADIAJAAIANgGIC0AqIACALIAJAMIAIACIAJAIIADASIgsBEIgJAHIAAAJIgKAKIgOAHIgXAhIgEAPIADAIIAPAHIAGAKIgEAHIgBAEIgDACIgBAPIgNAQIgzDhIkRhAg");
	this.shape_4.setTransform(41.2,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgOETImBhoIgFgGIgGgaIAFgNIAAgLIAIgUIgDgoIAFgJIAIgEIAGgHIAEgNIAGgFIACgRIAEAAIAYgcIAhhCIAYhHIARgeIAoh2IADgRIAAgFIAJgDIALADIAFgCIARAHIAIAIIACAEIAOACIATAOIADAUIgCAGIgCAgIAFAKIAaAOIAgACIAVgCIAQACIAjAKIAGALIApgFIANAFIAGAEIAXADIAKgCIAMgGIAMAAIANADIAKgDIAJAAIAHADIAMABIAJADIAJAAIAOgGIC0AqIABALIAJAMIAJACIAJAIIACASIgsBEIgIAHIAAAJIgKAJIgOAHIgYAhIgDAPIADAIIAPAHIAGAKIgEAHIgBAEIgDACIgBAPIgNAQIgzDig");
	this.shape_5.setTransform(41.2,33.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,84.4,69.9);


(lib.okSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AGmjKIr1gQIhkgGIgEA+IE0ASIgID0IALACIAGAFIAPATIAHADIAVgCIAIgGIAMAGIADAGIgBAGIAGAJIADACIAcAFIAKAFIAGAAIACgCIAGgCIAHAKIAMAFIAHgIIAbAEIAAAEIAMAKIAEACIAAANIAUAEIAEgNIAIgDIAaATIAEAAIALgIIAJAAIABAFIgCALIAEAIIAHgFIgBgHIAIgLIAKgGIAEABIABAIIAMAEIAFAAIAEgGIAIABIADACIAAADIAKAFIAQALIARgNIAGgDIAXgCIATgHIAIgBIAJAAIAXADIAPgFIADgDIA0AbIAJADIAEAFIAFABIADjgIgSiKg");
	this.shape.setTransform(44.1,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AGwDgIgDgGIgJgDIg0gbIgEADIgOAFIgYgCIgJAAIgHABIgTAHIgXACIgHACIgRAOIgQgMIgKgEIAAgEIgCgCIgIgBIgEAHIgFAAIgMgFIgBgIIgEgBIgKAGIgJALIABAHIgHAGIgEgIIACgMIgBgEIgJAAIgKAIIgFAAIgZgTIgIADIgEAMIgUgEIAAgMIgEgDIgNgKIAAgDIgbgFIgHAIIgLgEIgHgKIgGACIgCABIgGAAIgKgFIgdgEIgDgCIgGgJIABgGIgDgHIgLgFIgIAFIgVADIgHgEIgPgTIgHgEIgLgDIAIj0IkzgSIADg+IBkAHIL2AQIABA/IASCKIgDDgg");
	this.shape_1.setTransform(44.1,22.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.3,47);


(lib.ok = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAWIAAgqIAGAAIAAAUIAUgUIAIAAIgRASIASAYIgIAAIgOgWIgHAHIAAAPg");
	this.shape.setTransform(65.4,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAKAVIgOgVIgHAHIAAAOIgGAAIAAgqIAGAAIAAAVIAUgVIAIAAIgRASIASAYg");
	this.shape_1.setTransform(65.1,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgOAAQAAAIAEAFQAFAEAFAAQAGAAAEgEQAFgFAAgIQAAgCgCgGQgDgEgDgCQgEgDgDAAQgFAAgFAFQgEAEAAAIgAgUAAQAAgJAGgGQAGgHAIAAQAGAAAEADQAFADADAGQADAGAAAEQAAAGgDAFQgCAGgGADQgGACgEAAQgFAAgFgCQgFgEgDgFQgCgGAAgFg");
	this.shape_2.setTransform(60.4,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgKAUQgFgDgDgGQgCgGAAgFQAAgJAGgGQAGgGAIgBQAGAAAEADQAFADADAGQADAGAAAEQAAAHgDAEQgCAGgGADQgGADgEgBQgEAAgGgCgAgJgMQgFAEAAAJQAAAHAFAFQAEAFAFAAQAGAAAEgFQAFgFAAgIIgCgIQgDgEgDgCQgEgCgDAAQgFgBgEAFg");
	this.shape_3.setTransform(60.4,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AGmjKIr1gQIhkgGIgEA+IE0ASIgID0IALACIAGAFIAPATIAHADIAVgCIAIgGIAMAGIADAGIgBAGIAGAJIADACIAcAFIAKAFIAGAAIACgCIAGgCIAHAKIAMAFIAHgIIAbAEIAAAEIAMAKIAEACIAAANIAUAEIAEgNIAIgDIAaATIAEAAIALgIIAJAAIABAFIgCALIAEAIIAHgFIgBgHIAIgLIAKgGIAEABIABAIIAMAEIAFAAIAEgGIAIABIADACIAAADIAKAFIAQALIARgNIAGgDIAXgCIATgHIAIgBIAJAAIAXADIAPgFIADgDIA0AbIAJADIAEAFIAFABIADjgIgSiKg");
	this.shape_4.setTransform(44.1,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AGwDgIgDgGIgJgDIg0gbIgDADIgPAGIgYgDIgJAAIgHABIgTAGIgXADIgHADIgRAMIgQgLIgKgEIAAgEIgCgCIgIgBIgEAHIgFAAIgMgFIgBgIIgEgBIgKAHIgJAKIABAIIgGAEIgFgHIACgMIgBgEIgJAAIgLAIIgDAAIgagTIgIADIgEAMIgUgDIAAgOIgEgCIgNgKIAAgDIgbgFIgGAIIgMgEIgHgLIgGADIgCACIgGAAIgKgGIgdgEIgDgCIgGgJIACgGIgEgHIgLgFIgIAFIgVACIgHgDIgPgTIgGgFIgMgCIAIj0Ik0gSIAEg+IBlAHIL1APIABBAIARCKIgCDhg");
	this.shape_5.setTransform(44.1,22.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.3,48.5);


(lib.ohSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AjWiXIAnFJIAIAAIAKAFIAGAAIALgGIAUAPIAHASIAQAGIAVgCIAVAPIAIgLIAHgBIASAHIAQgCIACgDIAFgEIADgFIAMgJIAPAWIALADIALAIIAEAEIANgBIAKgRIAIgGIACgNIgCgPIAKgeIAIAAIAIAPIAMgNIgEgQIAKgVIAJgIIABgFIAIgJIAIACIAMgDIAAgFIAUgWIAFgCIALgKIgBgPIgCgGIAAgLIAEgLIAHgsIgTgJIAOgMIgFgNIAHgGIADABIgeioIhGAlIgIAHIgdAeIgIAFIgIgBIgQAAIgJACIgXAUIgJgCIgQgGIgGADIgHgCIAFgIIgEgBIgOgCIgkgMIgOADIAAgFg");
	this.shape.setTransform(21.5,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AA2DpIgLgIIgMgDIgPgWIgMAJIgDAFIgFAEIgCADIgPACIgSgHIgHABIgIALIgWgPIgVACIgPgGIgHgSIgUgPIgLAGIgGAAIgLgFIgIAAIgmlJIB9gQIAAAFIAOgDIAlAMIAOACIAEABIgFAIIAHACIAFgDIAQAGIAJACIAYgUIAJgCIAQAAIAIABIAIgFIAcgeIAIgHIBGglIAeCnIgDgBIgHAHIAFAMIgOANIATAJIgHAsIgEALIAAAKIACAHIABAPIgLAKIgFACIgTAVIAAAGIgMACIgIgBIgIAIIgBAGIgJAHIgLAWIAEAQIgMANIgIgPIgIAAIgKAeIACAPIgCANIgHAGIgKARIgNABg");
	this.shape_1.setTransform(21.5,23.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,45,49.5);


(lib.oh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqIgGAAIAAgVIgVAAIAAAVg");
	this.shape.setTransform(24.8,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AALAVIAAgUIgVAAIAAAUIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqg");
	this.shape_1.setTransform(24.8,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgOAAQAAAIAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgIQAAgEgCgEQgCgDgDgDQgEgCgEAAQgFAAgEAEQgFAFAAAHgAgUAAQAAgJAGgGQAGgGAIAAQAGAAAFADQAFADACAFQADAGAAAEQAAAGgDAGQgDAGgEACQgFADgGAAQgFAAgFgDQgFgDgCgGQgDgFAAgGg");
	this.shape_2.setTransform(20.1,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJATQgGgCgCgGQgDgFAAgGQAAgJAGgGQAGgGAIgBQAGAAAFAEQAEADADAEQADAGAAAFQAAAGgDAFQgDAHgFABQgEADgGAAQgFAAgEgDgAgJgMQgFAFAAAHQABAHAEAGQAEAEAFABQAHgBADgEQAFgFAAgIQAAgEgCgEQgCgDgEgDQgDgDgEABQgEgBgFAFg");
	this.shape_3.setTransform(20.1,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AjWiXIAnFJIAIAAIAKAFIAGAAIALgGIAUAPIAHASIAQAGIAVgCIAVAPIAIgLIAHgBIASAHIAQgCIACgDIAFgEIADgFIAMgJIAPAWIALADIALAIIAEAEIANgBIAKgRIAIgGIACgNIgCgPIAKgeIAIAAIAIAPIAMgNIgEgQIAKgVIAJgIIABgFIAIgJIAIACIAMgDIAAgFIAUgWIAFgCIALgKIgBgPIgCgGIAAgLIAEgLIAHgsIgTgJIAOgMIgFgNIAHgGIADABIgeioIhGAlIgIAHIgdAeIgIAFIgIgBIgQAAIgJACIgXAUIgJgCIgQgGIgGADIgHgCIAFgIIgEgBIgOgCIgkgMIgOADIAAgFg");
	this.shape_4.setTransform(21.5,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AA2DpIgLgIIgMgDIgPgWIgMAJIgDAFIgFAEIgCADIgPACIgSgHIgHABIgIALIgWgPIgVACIgPgGIgHgSIgUgPIgLAGIgGAAIgLgFIgIAAIgmlJIB9gQIAAAFIAOgDIAlAMIAOACIAEABIgFAIIAHACIAFgDIAQAGIAJACIAYgUIAJgCIAQAAIAIABIAIgFIAcgeIAIgHIBGglIAeCnIgDgBIgHAHIAFAMIgOANIATAJIgHAsIgEALIAAAKIACAHIABAPIgLAKIgFACIgTAVIAAAGIgMACIgIgBIgIAIIgBAGIgJAHIgLAWIAEAQIgMANIgIgPIgIAAIgKAeIACAPIgCANIgHAGIgKARIgNABg");
	this.shape_5.setTransform(21.5,23.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,45,49.5);


(lib.nySelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape.setTransform(44.6,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape_1.setTransform(44.6,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgWghIAAAhg");
	this.shape_2.setTransform(40.2,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_3.setTransform(40.2,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AByC9IBUAdIAGAOIgGAGIgEAFIgCAIIABAOIgGABIgEADIgHAQIAAAGIACABIAEgCIACgFIANgMIAIABIASAAIAGgFIASgEIAYgMIALgLIBFgvIAIgDIAFgGIAQgKIAFgLIABgEIgCgCIgKAKIgWAIIgHAGIgEAIIgMAFIgCgDIAEgIIAJgJIAJgPIgDgDIgIAIIgGAIIgHAHIhhAxIgKAOIgGgEIgCgKIAEgMIAJgHIgKgKIAPgQIABgHIgHgIIgMheIgEgDIABhWIgKgUIgHgVIAAgSIgGgfIgKgQIgGAAIACAEIgDABIgDgFIACgRIgQgkIgBgOIAGgNIgFgbIgPglIgBgEIgFgGIADgGIgHgMIh5AeIgCgEIgDACIgJAFIgdAeIgjAvIADAGIgFAQIgkAkIgDAGIAEAMIADACIAIgBIAGAEIABAGIgGAHIADAKIAHALIgCASIgTAIIgcAdIhGATIgQgGIgPgCIg0AHIgcALIgNAJIgFAPIAAALIAWAYIACAKIgDAIIgHAFIgHASIgoAoIgPALIAHAhIGchSIAIAFIADAHIADADIADgBIAEAEIAGACIANAYIADAJIAEAEIABADIAYACg");
	this.shape_4.setTransform(38.6,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ACwEjIAAgGIAHgQIAEgDIAGgBIgBgOIACgIIAEgFIAGgGIgGgOIhUgdIgIgHIgYgCIgBgDIgEgEIgDgJIgNgYIgGgCIgEgEIgDABIgDgDIgDgHIgIgFImcBSIgHghIAPgLIAogoIAHgSIAHgFIADgIIgCgKIgWgYIAAgLIAFgPIANgJIAcgLIA0gHIAPACIAQAGIBGgTIAcgdIATgIIACgSIgHgLIgDgKIAGgHIgBgGIgGgEIgIABIgDgCIgEgMIADgGIAkgkIAFgQIgDgGIAjgvIAdgeIAJgFIADgCIACAEIB5geIAHAMIgDAGIAFAGIABAEIAPAlIAFAbIgGANIABAOIAQAkIgCARIADAFIADgBIgCgEIAGAAIAKAQIAGAfIAAASIAHAVIAKAUIgBBWIAEADIAMBeIAHAIIgBAHIgPAQIAKAKIgJAHIgEAMIACAKIAGAEIAKgOIBhgxIAHgHIAGgIIAIgIIADADIgJAPIgJAJIgEAIIACADIAMgFIAEgIIAHgGIAWgIIAKgKIACACIgBAEIgFALIgQAKIgFAGIgIADIhFAvIgLALIgYAMIgSAEIgGAFIgSAAIgIgBIgNAMIgCAFIgEACg");
	this.shape_5.setTransform(38.6,29.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,79.3,60.5);


(lib.ny = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape.setTransform(42.6,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgTIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAATg");
	this.shape_1.setTransform(42.6,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgWghIAAAhg");
	this.shape_2.setTransform(38.2,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_3.setTransform(38.2,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AByC9IBUAdIAGAOIgGAGIgEAFIgCAIIABAOIgGABIgEADIgHAQIAAAGIACABIAEgCIACgFIANgMIAIABIASAAIAGgFIASgEIAYgMIALgLIBFgvIAIgDIAFgGIAQgKIAFgLIABgEIgCgCIgKAKIgWAIIgHAGIgEAIIgMAFIgCgDIAEgIIAJgJIAJgPIgDgDIgIAIIgGAIIgHAHIhhAxIgKAOIgGgEIgCgKIAEgMIAJgHIgKgKIAPgQIABgHIgHgIIgMheIgEgDIABhWIgKgUIgHgVIAAgSIgGgfIgKgQIgGAAIACAEIgDABIgDgFIACgRIgQgkIgBgOIAGgNIgFgbIgPglIgBgEIgFgGIADgGIgHgMIh5AeIgCgEIgDACIgJAFIgdAeIgjAvIADAGIgFAQIgkAkIgDAGIAEAMIADACIAIgBIAGAEIABAGIgGAHIADAKIAHALIgCASIgTAIIgcAdIhGATIgQgGIgPgCIg0AHIgcALIgNAJIgFAPIAAALIAWAYIACAKIgDAIIgHAFIgHASIgoAoIgPALIAHAhIGchSIAIAFIADAHIADADIADgBIAEAEIAGACIANAYIADAJIAEAEIABADIAYACg");
	this.shape_4.setTransform(38.6,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ACwEjIAAgGIAHgQIAEgDIAGgBIgBgOIACgIIAEgFIAGgGIgGgOIhUgdIgIgHIgYgCIgBgDIgEgEIgDgJIgNgYIgGgCIgEgEIgDABIgDgDIgDgHIgIgFImcBSIgHghIAPgLIAogoIAHgSIAHgFIADgIIgCgKIgWgYIAAgLIAFgPIANgJIAcgLIA0gHIAPACIAQAGIBGgTIAcgdIATgIIACgSIgHgLIgDgKIAGgHIgBgGIgGgEIgIABIgDgCIgEgMIADgGIAkgkIAFgQIgDgGIAjgvIAdgeIAJgFIADgCIACAEIB5geIAHAMIgDAGIAFAGIABAEIAPAlIAFAbIgGANIABAOIAQAkIgCARIADAFIADgBIgCgEIAGAAIAKAQIAGAfIAAASIAHAVIAKAUIgBBWIAEADIAMBeIAHAIIgBAHIgPAQIAKAKIgJAHIgEAMIACAKIAGAEIAKgOIBhgxIAHgHIAGgIIAIgIIADADIgJAPIgJAJIgEAIIACADIAMgFIAEgIIAHgGIAWgIIAKgKIACACIgBAEIgFALIgQAKIgFAGIgIADIhFAvIgLALIgYAMIgSAEIgGAFIgSAAIgIgBIgNAMIgCAFIgEACg");
	this.shape_5.setTransform(38.6,29.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,79.3,60.5);


(lib.nvSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Ajkn2IhhF5IGlJlIgBgGIAFgJIAIgbIgFgJIAGg9IgEgYIAFgGIAPgDIAUAFIAIAJIgBAEIAIAIIALAAIATg2ICIq3IkZg6g");
	this.shape.setTransform(32.7,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AlFh1IBhl5IERBAIEZA5IiIK4IgTA2IgLAAIgIgIIABgEIgIgJIgUgFIgPADIgFAGIAEAYIgGA9IAFAJIgIAaIgFAJIABAGg");
	this.shape_1.setTransform(32.7,49.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,67.4,101.2);


(lib.nv = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCATIgRgqIAGAAIANAlIAOglIAGAAIgSAqg");
	this.shape.setTransform(39,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIgRgrIAGAAIANAmIAOgmIAGAAIgSArg");
	this.shape_1.setTransform(39,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgWghIAAAhg");
	this.shape_2.setTransform(34.7,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_3.setTransform(34.7,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Ajkn2IhhF5IGlJlIgBgGIAFgJIAIgbIgFgJIAGg9IgEgYIAFgGIAPgDIAUAFIAIAJIgBAEIAIAIIALAAIATg2ICIq3IkZg6g");
	this.shape_4.setTransform(32.7,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AlFh1IBhl5IERBAIEZA5IiIK4IgTA2IgLAAIgIgIIABgEIgIgJIgUgFIgPADIgFAGIAEAYIgGA9IAFAJIgIAaIgFAJIABAGg");
	this.shape_5.setTransform(32.7,49.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,67.4,101.2);


(lib.nmSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Aj+lsIhnLOIAAABIBeAKIAHg4ICxAWIgCgCIgEgKIAEgIIgBgCIgDgEIACgCIGBAkIAvo9IAFAAIAEg+g");
	this.shape.setTransform(35.9,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AllFjIAAgBIBnrOIJkBEIgEA+IgFAAIgvI9ImBgkIgBACIACAEIABACIgDAIIADAKIADACIiygWIgHA4g");
	this.shape_1.setTransform(35.9,36.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.7,75.1);


(lib.nm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAkIANgkIAIAAIAAAqIgGAAIAAgjIgNAjIgEAAIgMgjIAAAjg");
	this.shape.setTransform(44.1,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAPAWIAAgjIgNAjIgDAAIgNgkIAAAkIgGAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_1.setTransform(44.1,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAVAhIAAghIAGAAIAAArIgGAAIgVghIAAAhg");
	this.shape_2.setTransform(39.2,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_3.setTransform(39.2,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Aj+lsIhnLOIAAABIBeAKIAHg4ICxAWIgCgCIgEgKIAEgIIgBgCIgDgEIACgCIGBAkIAvo9IAFAAIAEg+g");
	this.shape_4.setTransform(35.9,36.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AllFjIAAgBIBnrOIJkBEIgEA+IgFAAIgvI9ImBgkIgBACIACAEIABACIgDAIIADAKIADACIiygWIgHA4g");
	this.shape_5.setTransform(35.9,36.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.7,75.1);


(lib.njSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Ag/A0IgGAXIAAAEIAEgCIAHALIAPASIAXAMIAHACIAUAEIABAPIgBAKIAGAFIAGgHIAHgPIABgOIALgSIAGgPIAOgUIAMgdIAAgKIgHhKIgHgKIgOAEIgFAEIgGgCIgCgCIgEACIgCgBIAAgGIAHgQIAEgDIAHgBIgBgOIACgIIAEgFIAGgGIgGgOIhSgdIgFACIgHALIAAAGIgDATIgNALIgCAEIAAAEIAJAIIABANIgHAEIABAXIADACIAMACIAFAPIAKADIADAEIAIADIAFAGIAOAKIgBADIgPAHIgQAQIgDAOg");
	this.shape.setTransform(7,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAHCWIABgKIgBgPIgUgEIgHgCIgXgMIgPgSIgHgLIgEACIAAgEIAGgXIAagRIADgOIAQgQIAPgHIABgDIgOgKIgFgGIgIgDIgDgEIgKgDIgFgPIgMgCIgDgCIgBgXIAHgEIgBgNIgJgIIAAgEIACgEIANgLIADgTIAAgGIAHgLIAFgCIBSAdIAGAOIgGAGIgEAFIgCAIIABAOIgHABIgEADIgHAQIAAAGIACABIAEgCIACACIAGACIAFgEIAOgEIAHAKIAHBKIAAAKIgMAdIgOAUIgGAPIgLASIgBAOIgHAPIgGAHg");
	this.shape_1.setTransform(7,15.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.1,33.1);


(lib.nj = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgLAJIAGgBQAAAFACACQABACACAAQACAAABgBQABgBABgCIABgFIAAgdIAGAAIAAAcIgBAJQgCADgDACQgDABgDAAQgFAAgDgDQgDgDAAgHg");
	this.shape.setTransform(10.7,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgIATQgDgEAAgGIAGgBQAAAFACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIADgBIACgCIABgGIAAgcIAGAAIAAAcIgBAIQgCAEgDACQgDABgDAAQgFAAgDgDg");
	this.shape_1.setTransform(10.7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAVIAAgqIAGAAIAWAhIAAghIAFAAIAAAqIgGAAIgVggIAAAgg");
	this.shape_2.setTransform(7,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAVIgVggIAAAgIgGAAIAAgpIAGAAIAWAgIAAggIAFAAIAAApg");
	this.shape_3.setTransform(7,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Ag/A0IgGAXIAAAEIAEgCIAHALIAPASIAXAMIAHACIAUAEIABAPIgBAKIAGAFIAGgHIAHgPIABgOIALgSIAGgPIAOgUIAMgdIAAgKIgHhKIgHgKIgOAEIgFAEIgGgCIgCgCIgEACIgCgBIAAgGIAHgQIAEgDIAHgBIgBgOIACgIIAEgFIAGgGIgGgOIhSgdIgFACIgHALIAAAGIgDATIgNALIgCAEIAAAEIAJAIIABANIgHAEIABAXIADACIAMACIAFAPIAKADIADAEIAIADIAFAGIAOAKIgBADIgPAHIgQAQIgDAOg");
	this.shape_4.setTransform(7,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AAHCWIABgKIgBgPIgUgEIgHgCIgXgMIgPgSIgHgLIgEACIAAgEIAGgXIAagRIADgOIAQgQIAPgHIABgDIgOgKIgFgGIgIgDIgDgEIgKgDIgFgPIgMgCIgDgCIgBgXIAHgEIgBgNIgJgIIAAgEIACgEIANgLIADgTIAAgGIAHgLIAFgCIBSAdIAGAOIgGAGIgEAFIgCAIIABAOIgHABIgEADIgHAQIAAAGIACABIAEgCIACACIAGACIAFgEIAOgEIAHAKIAHBKIAAAKIgMAdIgOAUIgGAPIgLASIgBAOIgHAPIgGAHg");
	this.shape_5.setTransform(7,15.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.1,33.1);





(lib.neSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AmmAwIAWj9IIHAaIAOAUIASAAIANgDIAKAHIAIARIANADIAOgDIANgKIARAAIALADIA9ApIAAANIAOAIIAAAJIgGASIAKAJIAGAVIAMAKIgFAKIAFAJIANAKIAEAKIgEALIgDAUIANAHIAEAKIgHAKIADAKIAHAKIgDAKIADAOIALARIAKAKIADARIAOARIAGAEIgDANIACAEIqQgPIAIiAg");
	this.shape.setTransform(42.4,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AjrDAIAIiAIjCgQIAWj9IIHAaIAOAUIASAAIANgDIAKAHIAIARIANADIAOgDIANgKIARAAIALADIA9ApIAAANIAOAIIAAAJIgGASIAKAJIAGAVIAMAKIgFAKIAFAJIANAKIAEAJIgEALIgDAVIANAGIAEAKIgHALIADAKIAHAKIgDAKIADANIALARIAKAKIADARIAOARIAGAFIgDAMIACAFg");
	this.shape_1.setTransform(42.3,20.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.6,43.4);


(lib.ne = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgqIAeAAIAAAFIgYAAIAAANIAWAAIAAAEIgWAAIAAAPIAZAAIAAAFg");
	this.shape.setTransform(48.5,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgPAWIAAgqIAeAAIAAAEIgYAAIAAAOIAWAAIAAAEIgWAAIAAAOIAZAAIAAAGg");
	this.shape_1.setTransform(48.5,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAVIAAgqIAGAAIAVAhIAAghIAGAAIAAAqIgGAAIgVggIAAAgg");
	this.shape_2.setTransform(44.1,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgqIAGAAIAVAgIAAggIAGAAIAAAqg");
	this.shape_3.setTransform(44.1,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AmmAwIAWj9IIHAaIAOAUIASAAIANgDIAKAHIAIARIANADIAOgDIANgKIARAAIALADIA9ApIAAANIAOAIIAAAJIgGASIAKAJIAGAVIAMAKIgFAKIAFAJIANAKIAEAKIgEALIgDAUIANAHIAEAKIgHAKIADAKIAHAKIgDAKIADAOIALARIAKAKIADARIAOARIAGAEIgDANIACAEIqQgPIAIiAg");
	this.shape_4.setTransform(42.4,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AjrDAIAIiAIjCgQIAWj9IIHAaIAOAUIASAAIANgDIAKAHIAIARIANADIAOgDIANgKIARAAIALADIA9ApIAAANIAOAIIAAAJIgGASIAKAJIAGAVIAMAKIgFAKIAFAJIANAKIAEAJIgEALIgDAVIANAGIAEAKIgHALIADAKIAHAKIgDAKIADANIALARIAKAKIADARIAOARIAGAFIgDAMIACAFg");
	this.shape_5.setTransform(42.3,20.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.6,43.4);


(lib.ndSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AlPCyIAhmAIEpAVIEgAIIABAKIAJAeIgDAJIgDAVIABAkIAIApIALAMIAHAjIACBAIAEANIAAAXIABAKIAPAsIgCARIABATg");
	this.shape.setTransform(33.6,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AlPCyIAgmAIEpAVIEgAIIABAKIAJAeIgCAJIgDAVIABAkIAIAoIALANIAHAjIACBAIADAMIAAAYIABAKIAQAsIgCARIABATg");
	this.shape_1.setTransform(33.7,20.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.3,43.5);


(lib.nd = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgLARIAJAAIAFgBIAEgDQADgBABgEIABgIQAAgFgCgEQgDgEgDgBIgGgBIgJAAgAgRAWIAAgrIAPAAQACAAAFABQADABADACQADADACAFQACAEAAAFIgBAIIgDAHIgEAEIgFACg");
	this.shape.setTransform(44.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgRgVIAQAAIAGABQADABADACQADADACAFQACAEAAAFIgBAIIgDAHIgFAEIgEACIgWABgAgLARIAKAAIAFgBIADgDQADgBABgEIABgIQAAgFgDgEQgCgEgDgBIgFgBIgKAAg");
	this.shape_1.setTransform(44.8,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAWAhIAAghIAFAAIAAArIgGAAIgVghIAAAhg");
	this.shape_2.setTransform(40.1,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgVghIAAAhIgGAAIAAgrIAGAAIAWAhIAAghIAFAAIAAArg");
	this.shape_3.setTransform(40.1,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AlPCyIAhmAIEpAVIEgAIIABAKIAJAeIgDAJIgDAVIABAkIAIApIALAMIAHAjIACBAIAEANIAAAXIABAKIAPAsIgCARIABATg");
	this.shape_4.setTransform(33.6,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AlPCyIAgmAIEpAVIEgAIIABAKIAJAeIgDAJIgCAVIABAkIAIAoIAKAMIAIAjIACBBIADAMIAAAYIACAKIAPAsIgCARIABATg");
	this.shape_5.setTransform(33.7,20.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.3,43.5);


(lib.ncSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AnBCTIADgeIAJAAIAEgBIAIgIIABgIIgBgFIAMgRIAVgJIAYgGIAYgVIAKgEIAPgOIAEgMIACgBIAGABIAGgJIAIgGIADABIAHACIAIgCIABgEIANgKIAJgEIAQgBIASgdIAOgIIADgQIgBgKIACgIIAAgDIAcgFIgCAFIAcgDIALgDIAFACIENgsIECgxIAEAFIACAEIAHAEIAFACIAEAGIAEAEIAFAMIgCAEIABABIgEAAIgBgEIgIACIgFAAIgFgCIgEABIADAFIgBADIgYALIgPAOIgPACIgDAKIAAADIADABIAFgBIARgIIAQgEIAJgGIAPABIACACIgCAJIACAEIAEADIAGgCIACgFIAJgLIAIAAIAFAMIACAUIACAGIAAAEIgNAKIgFANIgKAIIgHADIgIAFIgRgBIgGgCIgCACIgCAAIgDgIIAAgEIgDgDIgEgBIgEADIAEAPIgEAFIgCgCIAGAHIAHABIAHAIIgFAJIADAFIgUAWIgGABIgLgEIgIAAIgBAEIAHAFIAVgBIAOgEIATgJIACgHIAFACIAHAGIgHAQIgPARIgSADIgIAEIgVADIgRAdIgIABIAAAEIABABIgUANIgLAOIgLAZIgGAeIgGAIIgKAEIgqAIIgEAEIiLhfIhzAPIgDgQIgUgQIgKAFIgEgFIACgEIgBgEIiIAQIgEAAIgEAEIgbAMIgBAGIgJAAIgeAPg");
	this.shape.setTransform(45,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ABFBhIhzAPIgDgQIgUgQIgKAFIgFgFIACgEIgBgEIiIAQIgDAAIgEAEIgbAMIgBAGIgJAAIgeAPIicAWIADgeIAJAAIAEgBIAIgIIABgIIgBgFIALgRIAWgJIAYgGIAYgVIAKgEIAPgOIADgMIADgBIAFABIAHgJIAIgGIACABIAIACIAIgCIABgDIANgKIAJgEIAQgBIARgdIAPgIIADgQIgBgKIABgIIAAgDIAdgFIgCAFIAcgDIALgDIAFACIENgsIECgxIADAFIACAEIAHAEIAGACIAEAGIAEAEIAFAMIgCAEIABABIgEAAIgBgEIgIACIgGAAIgFgCIgEABIADAFIgBADIgXALIgPAOIgPACIgDAKIAAADIADABIAFgBIARgIIAPgEIAJgGIAPABIACACIgCAJIACAEIAFADIAGgCIACgFIAJgLIAIAAIAFAMIACAUIACAGIAAAEIgNAKIgFANIgKAIIgHADIgIAFIgRgBIgHgCIgBACIgCAAIgEgIIAAgEIgDgDIgDgBIgEADIAEAPIgEAFIgCgCIAGAHIAGABIAHAIIgEAJIADAEIgUAWIgGABIgLgEIgIAAIgBAEIAHAFIAVgBIAOgEIATgJIACgHIAEACIAHAGIgHAQIgOARIgSADIgIAEIgVADIgRAdIgIABIAAAEIABABIgUANIgMAOIgLAZIgFAeIgGAIIgKAEIgrAIIgDAEg");
	this.shape_1.setTransform(45.1,19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.1,40.6);


(lib.nc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5).p("AnBCTIADgeIAJAAIAEgBIAIgIIABgIIgBgFIAMgRIAVgJIAYgGIAYgVIAKgEIAPgOIAEgMIACgBIAGABIAGgJIAIgGIADABIAHACIAIgCIABgEIANgKIAJgEIAQgBIASgdIAOgIIADgQIgBgKIACgIIAAgDIAcgFIgCAFIAcgDIALgDIAFACIENgsIECgxIAEAFIACAEIAHAEIAFACIAEAGIAEAEIAFAMIgCAEIABABIgEAAIgBgEIgIACIgFAAIgFgCIgEABIADAFIgBADIgYALIgPAOIgPACIgDAKIAAADIADABIAFgBIARgIIAQgEIAJgGIAPABIACACIgCAJIACAEIAEADIAGgCIACgFIAJgLIAIAAIAFAMIACAUIACAGIAAAEIgNAKIgFANIgKAIIgHADIgIAFIgRgBIgGgCIgCACIgCAAIgDgIIAAgEIgDgDIgEgBIgEADIAEAPIgEAFIgCgCIAGAHIAHABIAHAIIgFAJIADAFIgUAWIgGABIgLgEIgIAAIgBAEIAHAFIAVgBIAOgEIATgJIACgHIAFACIAHAGIgHAQIgPARIgSADIgIAEIgVADIgRAdIgIABIAAAEIABABIgUANIgLAOIgLAZIgGAeIgGAIIgKAEIgqAIIgEAEIiLhfIhzAPIgDgQIgUgQIgKAFIgEgFIACgEIgBgEIiIAQIgEAAIgEAEIgbAMIgBAGIgJAAIgeAPgADQAAIAGAAQgCAHgFADQgFAEgGAAQgIAAgEgDQgFgDgCgFQgCgDAAgHQAAgIACgEQACgFAGgDQAFgDAGAAQAFAAAGAEQAFAEABAFIgFACQgCgFgDgCQgDgDgEAAQgFAAgEADQgEADgBADIgBAJQAAAGABACQABADAEADQAEACAEAAQAFAAAEgDQADgDABgDgACDANIAAgqIAGAAIAYAhIAAghIAFAAIAAAqIgGAAIgXggIAAAgg");
	this.shape.setTransform(45,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ABFBhIhzAPIgDgQIgUgQIgKAFIgFgFIACgEIgBgEIiIAQIgDAAIgEAEIgbAMIgBAGIgJAAIgeAPIicAWIADgeIAJAAIAEgBIAIgIIABgIIgBgFIALgRIAWgJIAYgGIAYgVIAKgEIAPgOIADgMIADgBIAFABIAHgJIAIgGIACABIAIACIAIgCIABgDIANgKIAJgEIAQgBIARgdIAPgIIADgQIgBgKIABgIIAAgDIAdgFIgCAFIAcgDIALgDIAFACIENgsIECgxIADAFIACAEIAHAEIAGACIAEAGIAEAEIAFAMIgCAEIABABIgEAAIgBgEIgIACIgGAAIgFgCIgEABIADAFIgBADIgXALIgPAOIgPACIgDAKIAAADIADABIAFgBIARgIIAPgEIAJgGIAPABIACACIgCAJIACAEIAFADIAGgCIACgFIAJgLIAIAAIAFAMIACAUIACAGIAAAEIgNAKIgFANIgKAIIgHADIgIAFIgRgBIgHgCIgBACIgCAAIgEgIIAAgEIgDgDIgDgBIgEADIAEAPIgEAFIgCgCIAGAHIAGABIAHAIIgEAJIADAEIgUAWIgGABIgLgEIgIAAIgBAEIAHAFIAVgBIAOgEIATgJIACgHIAEACIAHAGIgHAQIgOARIgSADIgIAEIgVADIgRAdIgIABIAAAEIABABIgUANIgMAOIgLAZIgFAeIgGAIIgKAEIgrAIIgDAEgACugHQABAHABADQADAFAFAEQAEADAHAAQAHAAAFgEQAEgEADgHIgGAAIAGAAQgDAHgEAEQgFAEgHAAQgHAAgEgDQgFgEgDgFQgBgDgBgHQABgHACgFQACgFAFgCQAGgDAFAAQAGAAAGADQAEAEACAGIgFABQgCgEgDgDQgEgCgEAAQgEAAgFACQgDADgBAEIgBAIQAAAHABABQABAEAEADQADACAFAAQAFAAADgDQADgDACgEQgCAEgDADQgDADgFAAQgFAAgDgCQgEgDgBgEQgBgBAAgHIABgIQABgEADgDQAFgCAEAAQAEAAAEACQADADACAEIAFgBQgCgGgEgEQgGgDgGAAQgFAAgGADQgFACgCAFQgCAFgBAHIAAAAgACgAOIAGAAIAAgqIgGAAIAAAgIgXggIgHAAIAAAqIAHAAIAAghgACgAOIgXghIAAAhIgHAAIAAgqIAHAAIAXAgIAAggIAGAAIAAAqgACCAOg");
	this.shape_1.setTransform(45.1,19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.1,40.6);


(lib.mtSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AHgFHIp8hNIgJBAIAAABIgJgJIgEgPIgNgOIgLAJIABAKIgaAAIgFACIgLgGIgYgBIgFgFIgHABIgIAIIgJgBIgUgIIgFAEIgHAMIgNgHIgGgOIAAgFIADgRIgCgIIgJgMIgLAAIgKgQIAGgLIAAgIIgKgOIgGgRIAAgaIADgQIgFgEIgDgDIgEgJIgDgCIgEACIgdAWIgFACIgSgSIAFgKIgBgIIAAgLIAPgKIABgLIgCgCIABgUIAHgGIgBgHIAVgnIgGgHIgUgDIgBgKIgOgBIgHgQIgDgPIgPgiIgWgVIgQgVIAFgGIAEgNIgEgVIgPghIAWh6IJlBnIGaAqg");
	this.shape.setTransform(52.4,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AicD6IgJBAIAAABIgJgJIgEgPIgNgOIgLAJIABAKIgaAAIgFACIgLgGIgYgBIgFgFIgHABIgIAIIgJgBIgUgIIgFAEIgHAMIgNgHIgGgOIAAgFIADgRIgCgIIgJgMIgLAAIgKgQIAGgLIAAgIIgKgOIgGgRIAAgaIADgQIgFgEIgDgDIgEgJIgDgCIgEACIgdAWIgFACIgSgSIAFgKIgBgIIAAgLIAPgKIABgLIgCgCIABgUIAHgGIgBgHIAVgnIgGgHIgUgDIgBgKIgOgBIgHgQIgDgPIgPgiIgWgVIgQgVIAFgGIAEgNIgEgVIgPghIAWh6IJlBnIGaAqIgrH8g");
	this.shape_1.setTransform(52.4,32.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.8,67.5);


(lib.mt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAglIgOAAIAAgFIAhAAIAAAFIgPAAIAAAlg");
	this.shape.setTransform(75.3,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAVIAAgkIgOAAIAAgGIAhAAIAAAGIgPAAIAAAkg");
	this.shape_1.setTransform(75.3,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAjIANgjIAIAAIAAAqIgGAAIAAgjIgNAjIgDAAIgNgkIAAAkg");
	this.shape_2.setTransform(70.8,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAVIAAgjIgNAjIgDAAIgNgjIAAAjIgGAAIAAgqIAJAAIALAkIANgkIAIAAIAAAqg");
	this.shape_3.setTransform(70.8,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AHgFHIp8hNIgJBAIAAABIgJgJIgEgPIgNgOIgLAJIABAKIgaAAIgFACIgLgGIgYgBIgFgFIgHABIgIAIIgJgBIgUgIIgFAEIgHAMIgNgHIgGgOIAAgFIADgRIgCgIIgJgMIgLAAIgKgQIAGgLIAAgIIgKgOIgGgRIAAgaIADgQIgFgEIgDgDIgEgJIgDgCIgEACIgdAWIgFACIgSgSIAFgKIgBgIIAAgLIAPgKIABgLIgCgCIABgUIAHgGIgBgHIAVgnIgGgHIgUgDIgBgKIgOgBIgHgQIgDgPIgPgiIgWgVIgQgVIAFgGIAEgNIgEgVIgPghIAWh6IJlBnIGaAqg");
	this.shape_4.setTransform(52.4,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AicD6IgJBAIAAABIgJgJIgEgPIgNgOIgLAJIABAKIgaAAIgFACIgLgGIgYgBIgFgFIgHABIgIAIIgJgBIgUgIIgFAEIgHAMIgNgHIgGgOIAAgFIADgRIgCgIIgJgMIgLAAIgKgQIAGgLIAAgIIgKgOIgGgRIAAgaIADgQIgFgEIgDgDIgEgJIgDgCIgEACIgdAWIgFACIgSgSIAFgKIgBgIIAAgLIAPgKIABgLIgCgCIABgUIAHgGIgBgHIAVgnIgGgHIgUgDIgBgKIgOgBIgHgQIgDgPIgPgiIgWgVIgQgVIAFgGIAEgNIgEgVIgPghIAWh6IJlBnIGaAqIgrH8g");
	this.shape_5.setTransform(52.4,32.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.8,67.5);


(lib.msSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("ACYk2IjXAPIgBAHIgUASIgHATIACAVIgDALIgTAMIgSAYIAAARIgKALIAAANIgGARIgLARIAFATIAJAKIABANIAEAEIAAAFIgGAEIgCALIAAASIAOAYIACAYIAHANIAGAHIABAMIgOAIIgDAEIgIAbIgUAfIgRA2IgCAoIDIgJIAFAGIgGAUIAAAcIAWAVIAFAYIAPABIAVgSIAxgPIAMAEIASgGIADAFIALADIAEgCIgajQIAJl1g");
	this.shape.setTransform(18,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAvE2IgFgYIgWgVIAAgcIAGgUIgFgGIjIAJIACgoIARg2IAUgfIAIgbIADgEIAOgIIgBgMIgGgHIgHgNIgCgYIgOgYIAAgSIACgLIAGgEIAAgFIgEgEIgBgNIgJgKIgFgTIALgRIAGgRIAAgNIAKgLIAAgRIASgYIATgMIADgLIgCgVIAHgTIAUgSIABgHIDXgPIALALIgJF1IAaDQIgEACIgLgDIgDgFIgSAGIgMgEIgxAPIgVASg");
	this.shape_1.setTransform(18,31.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.1,64.3);


(lib.ms = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAHIAFAAQAAADACACQACADADABQADABABAAIAGgBQADAAABgDQACgBAAgCQAAgCgCgCIgEgDIgOgDQgFgDAAgBQgCgCAAgDQAAgEACgCQADgEADgBQAEgBADAAQAEAAAEABQAEACACADQACACAAAFIgGAAQgBgEgCgCQgEgCgDAAQgEAAgDACQgCACAAACQAAADACABQABABAGADIAKACQAEABABACQACACAAAEQAAAEgCADQgDADgDACQgDABgFAAQgEAAgEgBQgEgCgDgEQgCgCAAgGg");
	this.shape.setTransform(25,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgHAVQgEgCgDgEQgCgCAAgGIAFAAQAAADACACQACADADABQADABABAAIAGgBQADAAABgDQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgDIgOgDIgFgEQgCgCAAgDQAAgEACgCQADgEADgBQAEgBADAAQAEAAAEABQAEACACADQACACAAAFIgGAAQgBgEgCgCQgEgCgDAAQgEAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIAHAEIAKACIAFADQACACAAAEQAAAEgCADQgDADgDACQgDABgFAAQgEAAgEgBg");
	this.shape_1.setTransform(25,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgrIAJAAIALAkIANgkIAIAAIAAArIgGAAIAAgjIgNAjIgDAAIgNgkIAAAkg");
	this.shape_2.setTransform(20.3,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgjIgNAjIgDAAIgOgkIAAAkIgFAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(20.3,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("ACYk2IjXAPIgBAHIgUASIgHATIACAVIgDALIgTAMIgSAYIAAARIgKALIAAANIgGARIgLARIAFATIAJAKIABANIAEAEIAAAFIgGAEIgCALIAAASIAOAYIACAYIAHANIAGAHIABAMIgOAIIgDAEIgIAbIgUAfIgRA2IgCAoIDIgJIAFAGIgGAUIAAAcIAWAVIAFAYIAPABIAVgSIAxgPIAMAEIASgGIADAFIALADIAEgCIgajQIAJl1g");
	this.shape_4.setTransform(18,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AAvE2IgFgYIgWgVIAAgcIAGgUIgFgGIjIAJIACgoIARg2IAUgfIAIgbIADgEIAOgIIgBgMIgGgHIgHgNIgCgYIgOgYIAAgSIACgLIAGgEIAAgFIgEgEIgBgNIgJgKIgFgTIALgRIAGgRIAAgNIAKgLIAAgRIASgYIATgMIADgLIgCgVIAHgTIAUgSIABgHIDXgPIALALIgJF1IAaDQIgEACIgLgDIgDgFIgSAGIgMgEIgxAPIgVASg");
	this.shape_5.setTransform(18,31.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.1,64.3);


(lib.moSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AjdD1IHIgUIgCAFIAKAHIAEALIgCAKIgOALIgMAOIgBAJIBGgFIAFgTIgCgHIAFgWIAIgSIAGgJIANgFIAFADIAGgEIAKggIgEgMIgIgGIgCgCIgCgDIgHAAIgBAFIgEACIgUgjIAAgFIAIgIIAAgFIgJgLIgFgWIgegZIgOgFIgcgSIgRgQIgGgNIADgIIASgVIgCgSIAFgQIgEgIIgYgMIgIAEIgJAJIgFgEIgSguIgIgIIgdgXIgdgiIgCgJIgHgUIgCgYIAFgOIAAgFIgegdImFAMIAHALIALAKIADARIAOARIAGAEIgDANIACAEIAqAfIgNAQIgDAQIAHAIIALAFIAGAWIAKAHIALACIAEADg");
	this.shape.setTransform(34.1,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ADZEbIANgOIANgLIACgKIgDgLIgKgHIABgFInIAUIgElSIgEgDIgLgCIgJgHIgHgWIgLgFIgHgIIAEgQIAMgQIgqgfIgCgEIADgNIgGgEIgOgRIgDgRIgKgKIgIgLIGFgMIAeAdIAAAFIgFAOIACAYIAHAUIACAJIAeAiIAdAXIAIAIIARAuIAFAEIAJgJIAIgEIAZAMIADAIIgEAQIABASIgSAVIgDAIIAGANIARAQIAcASIAPAFIAdAZIAFAWIAJALIAAAFIgIAIIAAAFIAUAjIAFgCIABgFIAGAAIADADIACACIAIAGIADAMIgKAgIgGAEIgEgDIgOAFIgGAJIgIASIgFAWIACAHIgFATIhGAFg");
	this.shape_1.setTransform(34.3,29.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,70.6,60.6);


(lib.mo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgOAAQAAAIAFAEQAEAFAFAAQAGAAAFgFQAEgEAAgIQAAgFgCgDQgCgFgDgBQgEgDgEAAQgEAAgFAFQgFADAAAJgAgUAAQAAgJAGgHQAGgGAIAAQAGAAAFADQAFADADAFQACAGAAAFQAAAGgDAFQgCAGgFADQgFACgGAAQgEAAgGgCQgEgEgDgFQgDgGAAgFg");
	this.shape.setTransform(39.8,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgKAUQgEgEgEgFQgCgGAAgFQAAgJAGgGQAGgHAIABQAGAAAFACQAFADADAFQACAHAAAEQAAAGgDAGQgCAGgFACQgGACgFAAQgFAAgFgCgAgJgMQgFAEAAAIQAAAIAEAFQAFAEAFAAQAGAAAFgEQAEgFAAgIQAAgFgCgDQgCgEgEgCQgDgDgEAAQgFAAgEAFg");
	this.shape_1.setTransform(39.8,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAjIANgjIAIAAIAAAqIgGAAIAAgjIgNAjIgEAAIgNgkIAAAkg");
	this.shape_2.setTransform(34.7,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgjIgNAjIgEAAIgMgkIAAAkIgGAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(34.7,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AjdD1IHIgUIgCAFIAKAHIAEALIgCAKIgOALIgMAOIgBAJIBGgFIAFgTIgCgHIAFgWIAIgSIAGgJIANgFIAFADIAGgEIAKggIgEgMIgIgGIgCgCIgCgDIgHAAIgBAFIgEACIgUgjIAAgFIAIgIIAAgFIgJgLIgFgWIgegZIgOgFIgcgSIgRgQIgGgNIADgIIASgVIgCgSIAFgQIgEgIIgYgMIgIAEIgJAJIgFgEIgSguIgIgIIgdgXIgdgiIgCgJIgHgUIgCgYIAFgOIAAgFIgegdImFAMIAHALIALAKIADARIAOARIAGAEIgDANIACAEIAqAfIgNAQIgDAQIAHAIIALAFIAGAWIAKAHIALACIAEADg");
	this.shape_4.setTransform(34.1,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ADZEbIANgOIANgLIACgKIgDgLIgKgHIABgFInIAUIgElSIgEgDIgLgCIgJgHIgHgWIgLgFIgHgIIAEgQIAMgQIgqgfIgCgEIADgNIgGgEIgOgRIgDgRIgKgKIgIgLIGFgMIAeAdIAAAFIgFAOIACAYIAHAUIACAJIAeAiIAdAXIAIAIIARAuIAFAEIAJgJIAIgEIAZAMIADAIIgEAQIABASIgSAVIgDAIIAGANIARAQIAcASIAPAFIAdAZIAFAWIAJALIAAAFIgIAIIAAAFIAUAjIAFgCIABgFIAGAAIADADIACACIAIAGIADAMIgKAgIgGAEIgEgDIgOAFIgGAJIgIASIgFAWIACAHIgFATIhGAFg");
	this.shape_5.setTransform(34.3,29.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,70.6,60.6);


(lib.mnSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AkSF2IgBjpIgggfIgBgLIAQgRIAGgNIgCgeIACgRIgPgqIgBgKIAAgXIgEgNIgChAIgHglIgLgMIgIgpIgBgkIADgVIADgJIgJgeIgBgKICugBIADguIANAAIATAHIACAcIAFATIgBARIATAOIAHgCIANACIAGAHIAPgCIARADIAEAGIAAAFIAZgBIAIgKIAjgCIAZAHIAGAAIgEAHIAIAHIAEgCIAEAEIAEARIAJAFIAKgMIAFgDIAKADIAGAMIAUAFIAGAIIAKAHIANAAIANgDIAhgXIAFADIAJALIAzgBIAIACIATANIALgFIAWgBIgNAMIgdARIgQAEIgMAFIgNANIgbALIgLAJIgqAuIg9A3IgHAJIgGAGIACBCIgHAIIgIAEIgaAVIgBALIgDADIgIATIAPAHIAJAQIgIAPIABANIgCA3IAFAHIAKAHIACAGIAYAEIAEADIABAGIAGAEIAcAMIAKAUIA2AnIAEAHIgBAQIADAXg");
	this.shape.setTransform(34.1,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AkPCNIgggfIgBgLIAQgRIAGgNIgCgeIACgRIgPgqIgBgKIAAgXIgEgNIgChAIgHglIgLgMIgIgpIgBgkIADgVIADgJIgJgeIgBgKICugBIADguIANAAIATAHIACAcIAFATIgBARIATAOIAHgCIANACIAGAHIAPgCIARADIAEAGIAAAFIAZgBIAIgKIAjgCIAZAHIAGAAIgEAHIAIAHIAEgCIAEAEIAEARIAJAFIAKgMIAFgDIAKADIAGAMIAUAFIAGAIIAKAHIANAAIANgDIAhgXIAFADIAJALIAzgBIAIACIATANIALgFIAWgBIgNAMIgdARIgQAEIgMAFIgNANIgbALIgLAJIgqAuIg9A3IgHAJIgGAGIACBCIgHAIIgIAEIgaAVIgBALIgDADIgIATIAPAHIAJAQIgIAPIABANIgCA3IAFAHIAKAHIACAGIAYAEIAEADIABAGIAGAEIAcAMIAKAUIA2AnIAEAHIgBAQIADAXInjAQg");
	this.shape_1.setTransform(33.7,37.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.4,76.9);


(lib.mn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAVIAAgqIAGAAIAVAhIAAghIAGAAIAAAqIgGAAIgVggIAAAgg");
	this.shape.setTransform(31.9,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAVAhIAAghIAGAAIAAArg");
	this.shape_1.setTransform(31.9,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAjIANgjIAIAAIAAAqIgGAAIAAgjIgNAjIgEAAIgNgkIAAAkg");
	this.shape_2.setTransform(27.1,39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgjIgNAjIgEAAIgNgkIAAAkIgFAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(27.1,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AkSF2IgBjpIgggfIgBgLIAQgRIAGgNIgCgeIACgRIgPgqIgBgKIAAgXIgEgNIgChAIgHglIgLgMIgIgpIgBgkIADgVIADgJIgJgeIgBgKICugBIADguIANAAIATAHIACAcIAFATIgBARIATAOIAHgCIANACIAGAHIAPgCIARADIAEAGIAAAFIAZgBIAIgKIAjgCIAZAHIAGAAIgEAHIAIAHIAEgCIAEAEIAEARIAJAFIAKgMIAFgDIAKADIAGAMIAUAFIAGAIIAKAHIANAAIANgDIAhgXIAFADIAJALIAzgBIAIACIATANIALgFIAWgBIgNAMIgdARIgQAEIgMAFIgNANIgbALIgLAJIgqAuIg9A3IgHAJIgGAGIACBCIgHAIIgIAEIgaAVIgBALIgDADIgIATIAPAHIAJAQIgIAPIABANIgCA3IAFAHIAKAHIACAGIAYAEIAEADIABAGIAGAEIAcAMIAKAUIA2AnIAEAHIgBAQIADAXg");
	this.shape_4.setTransform(34.1,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AkPCNIgggfIgBgLIAQgRIAGgNIgCgeIACgRIgPgqIgBgKIAAgXIgEgNIgChAIgHglIgLgMIgIgpIgBgkIADgVIADgJIgJgeIgBgKICugBIADguIANAAIATAHIACAcIAFATIgBARIATAOIAHgCIANACIAGAHIAPgCIARADIAEAGIAAAFIAZgBIAIgKIAjgCIAZAHIAGAAIgEAHIAIAHIAEgCIAEAEIAEARIAJAFIAKgMIAFgDIAKADIAGAMIAUAFIAGAIIAKAHIANAAIANgDIAhgXIAFADIAJALIAzgBIAIACIATANIALgFIAWgBIgNAMIgdARIgQAEIgMAFIgNANIgbALIgLAJIgqAuIg9A3IgHAJIgGAGIACBCIgHAIIgIAEIgaAVIgBALIgDADIgIATIAPAHIAJAQIgIAPIABANIgCA3IAFAHIAKAHIACAGIAYAEIAEADIABAGIAGAEIAcAMIAKAUIA2AnIAEAHIgBAQIADAXInjAQg");
	this.shape_5.setTransform(33.7,37.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.4,76.9);


(lib.miSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Ak1gWIASgGIAdgRIAEgJIAIgBIAigNIAYgNIAdgdIAKgCIAXgaIAQgIIAagFIAHACIACADIgPAKIgEABIgGAMIgTAVIgJAIIgFAHIgEASIAEAMIADgHIAQgNIALABIAHgCIAkAPIAcAeIAWgDIALACIAGAEIAHAAIADgBIAJADIAAAEIAFgEIAEgIIAZgSIBRgUIAVgMIAKgDIAEAFIgGALIAAAHIAKATIAGACIAEgDIANABIAGgDIAagDIALAHIALAUIAIAIIATAJIAVgFIAFAAIAFAFIABAHIgIAFIgNABIgHgBIgCgDIgEAAIgNAGIgJgDIgIgBIgWAFIgOgEIgFAEIADAMIgDAEIgGgCIgNgMIghgEIgHACIgIgEIgYARIgFAAIgJAFIgDAEIgFACIgNgDIgOADIgBALIgDAGIgcAZIgFgCIgDgEIAMgQIAAgIIgQABIgHAPIgGAGIgGgHIgCgOIgCACIgCASIgKASIgGASIgTAfIAAAOIgCAFIgOgIIgEgPIAFgFIACgHIgCgCIgQADIgDgBIAFggIgCgMIgRgIIgOgEIABgEIACgDIgFgFIgNgEIgVgEIgGAAIgEAEIgEgEIgMAAIgTgPIgKAAIhUgRIgHgDIgEgMIgGgFIgNgCg");
	this.shape.setTransform(31,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("Ag3CPIgDgPIAEgFIADgHIgDgCIgPADIgEgBIAGggIgCgMIgRgIIgOgEIABgEIACgDIgFgFIgNgEIgWgEIgFAAIgFAEIgDgEIgNAAIgSgPIgKAAIhUgRIgHgDIgEgMIgGgFIgNgCIgFgHIASgGIAcgRIAFgJIAHgBIAjgNIAYgNIAcgdIAKgCIAYgaIAQgIIAagFIAHACIABADIgOAKIgEABIgGAMIgTAVIgJAIIgGAHIgDASIADAMIADgHIARgNIALABIAHgCIAjAPIAcAeIAXgDIALACIAGAEIAHAAIADgBIAJADIAAAEIAEgEIAFgIIAZgSIBRgUIAUgMIALgDIAEAFIgGALIAAAHIAKATIAGACIAEgDIANABIAGgDIAZgDIALAHIAMAUIAHAIIAUAJIAVgFIAFAAIAFAFIABAHIgIAFIgNABIgHgBIgCgDIgEAAIgNAGIgJgDIgJgBIgVAFIgOgEIgFAEIADAMIgDAEIgGgCIgNgMIghgEIgHACIgIgEIgYARIgFAAIgJAFIgDAEIgFACIgNgDIgOADIgBALIgEAGIgcAZIgEgCIgEgEIANgQIAAgIIgRABIgGAPIgGAGIgGgHIgCgOIgBACIgDASIgKASIgGASIgUAfIAAAOIgBAFg");
	this.shape_1.setTransform(31.2,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AjAENIDEgZIABAGIB9gQIACgGIAPgeIAGgIIgBgUIAGgQIAQgNIAAgRIADgDIAAgJIAJgIIAEAJIADABIAGgEIADgEIACgJIgDgRIACgWIgGgOIgEgfIgchHIgdgJIgLAHIgNANIghAvIgDAAIgDAAIgNgFIgEgEIgGgLIAEgUIAHgJIAQgKIAEgJIADgQIAIgDIAHgQIAAggIgFgQIgFgJIgKgMIgDgGIACgIIALgEIACgDIgNgXIgLgGIgigNIgYgEIgIgKIgjgKIgOgJIgIAHIgKAEIgKASIAAAOIACAGIAEAAIACAGIgMAGIgGAEIgHAJIgHANIAEAbIgIAPIgLAGIgCgLIAFgNIgFgOIACgFIgBgEIgFADIgGAKIgCAMIgEAHIgIAAIgMAKIgEAJIgCAHIgKAMIgCAqIgCANIgIARIgHAKIACALIAJAaIgFARIAmBUIAAAaIAHAGIAAAEIgFAEIgDAbIgFATIgXA4g");
	this.shape_2.setTransform(56.8,45.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AiyD8IAXg4IAFgTIADgbIAFgEIAAgEIgHgGIAAgZIgmhVIAFgRIgJgaIgCgLIAHgJIAIgSIACgMIACgrIAKgMIACgHIAEgJIAMgKIAHAAIAFgHIACgMIAFgKIAGgDIAAAEIgBAFIAEAOIgEANIABALIALgGIAIgPIgDgbIAHgNIAHgJIAGgEIAMgGIgCgGIgEAAIgCgGIAAgOIAKgSIAKgEIAIgHIANAJIAlAKIAHAKIAYAEIAiANIALAGIAMAXIgCADIgKAEIgCAIIADAGIAJAMIAGAJIAEAQIAAAgIgHAQIgIAEIgDAQIgDAJIgQAKIgHAJIgEAUIAFAKIAFAFIAMAEIAEAAIADAAIAhguIANgOIALgGIAcAJIAdBHIAEAeIAGAPIgDAVIAEARIgCAJIgEAFIgFAEIgEgBIgDgJIgJAIIAAAIIgEADIAAARIgPANIgGAQIABAUIgGAIIgPAeIgCAGIh9AQIAAgGIjFAZg");
	this.shape_3.setTransform(57.4,45.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,79.3,74.3);


(lib.mi = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgrIAFAAIAAArg");
	this.shape.setTransform(60,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgrIAFAAIAAArg");
	this.shape_1.setTransform(60,43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAkIANgkIAIAAIAAAqIgGAAIAAgjIgNAjIgEAAIgMgjIAAAjg");
	this.shape_2.setTransform(56.5,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgjIgNAjIgEAAIgMgkIAAAkIgGAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(56.5,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Ak1gWIASgGIAdgRIAEgJIAIgBIAigNIAYgNIAdgdIAKgCIAXgaIAQgIIAagFIAHACIACADIgPAKIgEABIgGAMIgTAVIgJAIIgFAHIgEASIAEAMIADgHIAQgNIALABIAHgCIAkAPIAcAeIAWgDIALACIAGAEIAHAAIADgBIAJADIAAAEIAFgEIAEgIIAZgSIBRgUIAVgMIAKgDIAEAFIgGALIAAAHIAKATIAGACIAEgDIANABIAGgDIAagDIALAHIALAUIAIAIIATAJIAVgFIAFAAIAFAFIABAHIgIAFIgNABIgHgBIgCgDIgEAAIgNAGIgJgDIgIgBIgWAFIgOgEIgFAEIADAMIgDAEIgGgCIgNgMIghgEIgHACIgIgEIgYARIgFAAIgJAFIgDAEIgFACIgNgDIgOADIgBALIgDAGIgcAZIgFgCIgDgEIAMgQIAAgIIgQABIgHAPIgGAGIgGgHIgCgOIgCACIgCASIgKASIgGASIgTAfIAAAOIgCAFIgOgIIgEgPIAFgFIACgHIgCgCIgQADIgDgBIAFggIgCgMIgRgIIgOgEIABgEIACgDIgFgFIgNgEIgVgEIgGAAIgEAEIgEgEIgMAAIgTgPIgKAAIhUgRIgHgDIgEgMIgGgFIgNgCg");
	this.shape_4.setTransform(31,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("Ag3CPIgDgPIAEgFIADgHIgDgCIgPADIgEgBIAGggIgCgMIgRgIIgOgEIABgEIACgDIgFgFIgNgEIgWgEIgFAAIgFAEIgDgEIgNAAIgSgPIgKAAIhUgRIgHgDIgEgMIgGgFIgNgCIgFgHIASgGIAcgRIAFgJIAHgBIAjgNIAYgNIAcgdIAKgCIAYgaIAQgIIAagFIAHACIABADIgOAKIgEABIgGAMIgTAVIgJAIIgGAHIgDASIADAMIADgHIARgNIALABIAHgCIAjAPIAcAeIAXgDIALACIAGAEIAHAAIADgBIAJADIAAAEIAEgEIAFgIIAZgSIBRgUIAUgMIALgDIAEAFIgGALIAAAHIAKATIAGACIAEgDIANABIAGgDIAZgDIALAHIAMAUIAHAIIAUAJIAVgFIAFAAIAFAFIABAHIgIAFIgNABIgHgBIgCgDIgEAAIgNAGIgJgDIgJgBIgVAFIgOgEIgFAEIADAMIgDAEIgGgCIgNgMIghgEIgHACIgIgEIgYARIgFAAIgJAFIgDAEIgFACIgNgDIgOADIgBALIgEAGIgcAZIgEgCIgEgEIANgQIAAgIIgRABIgGAPIgGAGIgGgHIgCgOIgBACIgDASIgKASIgGASIgUAfIAAAOIgBAFg");
	this.shape_5.setTransform(31.2,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AjAENIDEgZIABAGIB9gQIACgGIAPgeIAGgIIgBgUIAGgQIAQgNIAAgRIADgDIAAgJIAJgIIAEAJIADABIAGgEIADgEIACgJIgDgRIACgWIgGgOIgEgfIgchHIgdgJIgLAHIgNANIghAvIgDAAIgDAAIgNgFIgEgEIgGgLIAEgUIAHgJIAQgKIAEgJIADgQIAIgDIAHgQIAAggIgFgQIgFgJIgKgMIgDgGIACgIIALgEIACgDIgNgXIgLgGIgigNIgYgEIgIgKIgjgKIgOgJIgIAHIgKAEIgKASIAAAOIACAGIAEAAIACAGIgMAGIgGAEIgHAJIgHANIAEAbIgIAPIgLAGIgCgLIAFgNIgFgOIACgFIgBgEIgFADIgGAKIgCAMIgEAHIgIAAIgMAKIgEAJIgCAHIgKAMIgCAqIgCANIgIARIgHAKIACALIAJAaIgFARIAmBUIAAAaIAHAGIAAAEIgFAEIgDAbIgFATIgXA4g");
	this.shape_6.setTransform(56.8,45.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("AiyD8IAXg4IAFgTIADgbIAFgEIAAgEIgHgGIAAgZIgmhVIAFgRIgJgaIgCgLIAHgJIAIgSIACgMIACgrIAKgMIACgHIAEgJIAMgKIAHAAIAFgHIACgMIAFgKIAGgDIAAAEIgBAFIAEAOIgEANIABALIALgGIAIgPIgDgbIAHgNIAHgJIAGgEIAMgGIgCgGIgEAAIgCgGIAAgOIAKgSIAKgEIAIgHIANAJIAlAKIAHAKIAYAEIAiANIALAGIAMAXIgCADIgKAEIgCAIIADAGIAJAMIAGAJIAEAQIAAAgIgHAQIgIAEIgDAQIgDAJIgQAKIgHAJIgEAUIAFAKIAFAFIAMAEIAEAAIADAAIAhguIANgOIALgGIAcAJIAdBHIAEAeIAGAPIgDAVIAEARIgCAJIgEAFIgFAEIgEgBIgDgJIgJAIIAAAIIgEADIAAARIgPANIgGAQIABAUIgGAIIgPAeIgCAGIh9AQIAAgGIjFAZg");
	this.shape_7.setTransform(57.4,45.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,79.3,74.3);


(lib.me = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{meHit:2,"meHit":3});

	// buttonMe
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgqIAeAAIAAAFIgYAAIAAANIAXAAIAAAEIgXAAIAAAPIAZAAIAAAFg");
	this.shape.setTransform(25.9,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgPAVIAAgqIAeAAIAAAGIgYAAIAAANIAXAAIAAAEIgXAAIAAAPIAZAAIAAAEg");
	this.shape_1.setTransform(25.9,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAcIAAgqIAJAAIALAkIACgIIALgcIAIAAIAAAqIgGAAIAAgjIgNAjIgDAAIgNgkIAAAkg");
	this.shape_2.setTransform(21.1,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAVIAAgjIgNAjIgDAAIgNgjIAAAjIgGAAIAAgqIAJAAIALAkIACgHIALgdIAIAAIAAAqg");
	this.shape_3.setTransform(21.1,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Ai6ASIBJDXIABAEIgBAJIABAEIASAOIAEABIACAHIAAAFIAKARIACgFIAEgcIAJgQIAFgYIAKgJIABgFIgFgDIgFgOIAYgWIAEADIAEAKIADADIADgEIAAgLIACgGIARgCIAHgHIAAgIIADgEIAJAAIAHgEIADgEIAFgQIgCgMIAMgNIAAgIIAFAAIANACIAGgDIAEgHIAFgMIAFgBIAIgOIAOABIAKAKIAPgZIAMgGIATgRIAFgJIADgCIAFAAIAJgDIAFgLIgCgIIgIgEIgBABIgFgCIADgJIADgCIAAgHIgIgQIgKgFIgGABIgDAEIgIACIgJgDIgJggIADgEIgCgGIgDgEIgGAAIgDADIgOgFIgIAAIgEgDIgGgTIgBgFIgsiLIgmgYIgUgBIgGANIgFAAIgOAHIgUAQIgHACIgIgKIACgOIgEgGIgGAAIgPAGIggBsIgCAQIAGAIIABAMIgEAIIgFAFIgEAKIALAsIgGAOIAAAMIgQAVIgCAIIAGAPIgBACIgJAAIABAJIgDAHIgGgBIgHgDg");
	this.shape_4.setTransform(18.7,30.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AhYEYIAAgFIgCgHIgEgBIgSgOIgBgEIABgJIgBgEIhJjXIAJgIIAHADIAFABIAEgHIgBgKIAJAAIABgBIgHgPIACgIIAQgVIAAgMIAHgOIgLgsIAEgKIAFgFIADgIIAAgMIgHgIIACgQIAhhsIAPgGIAGAAIAEAGIgCAOIAIAKIAGgCIAUgQIAOgHIAGAAIAFgNIAVABIAmAYIAsCLIABAFIAGATIAEADIAIAAIAOAFIADgDIAGAAIADAEIACAGIgDAEIAJAgIAJADIAIgCIADgEIAGgBIAKAFIAIAQIAAAHIgEACIgCAJIAEACIACgBIAIAEIACAIIgFAJIgKAFIgEAAIgEACIgEAJIgTARIgNAGIgOAZIgKgKIgOgBIgIAOIgGABIgEAMIgFAHIgFADIgOgCIgEAAIAAAIIgNANIADAMIgFAQIgDAEIgHAEIgJAAIgDAEIAAAIIgHAHIgRACIgCAGIAAALIgEAEIgCgDIgFgKIgEgDIgYAWIAGAOIAEADIgBAFIgKAJIgEAYIgJAQIgEAcIgCAFg");
	this.shape_5.setTransform(18.8,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgqIAeAAIAAAFIgYAAIAAANIAXAAIAAAEIgXAAIAAAPIAZAAIAAAFg");
	this.shape_6.setTransform(25.9,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("AgPAVIAAgqIAeAAIAAAGIgYAAIAAANIAXAAIAAAEIgXAAIAAAPIAZAAIAAAEg");
	this.shape_7.setTransform(25.9,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A171B").ss(0.5).p("AgUAcIAAgqIAJAAIALAkIACgIIALgcIAIAAIAAAqIgGAAIAAgjIgNAjIgDAAIgNgkIAAAkg");
	this.shape_8.setTransform(21.1,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#417BAA").s().p("AAPAVIAAgjIgNAjIgDAAIgNgjIAAAjIgGAAIAAgqIAJAAIALAkIACgHIALgdIAIAAIAAAqg");
	this.shape_9.setTransform(21.1,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1A171B").ss(0.5).p("Ai6ASIBJDXIABAEIgBAJIABAEIASAOIAEABIACAHIAAAFIAKARIACgFIAEgcIAJgQIAFgYIAKgJIABgFIgFgDIgFgOIAYgWIAEADIAEAKIADADIADgEIAAgLIACgGIARgCIAHgHIAAgIIADgEIAJAAIAHgEIADgEIAFgQIgCgMIAMgNIAAgIIAFAAIANACIAGgDIAEgHIAFgMIAFgBIAIgOIAOABIAKAKIAPgZIAMgGIATgRIAFgJIADgCIAFAAIAJgDIAFgLIgCgIIgIgEIgBABIgFgCIADgJIADgCIAAgHIgIgQIgKgFIgGABIgDAEIgIACIgJgDIgJggIADgEIgCgGIgDgEIgGAAIgDADIgOgFIgIAAIgEgDIgGgTIgBgFIgsiLIgmgYIgUgBIgGANIgFAAIgOAHIgUAQIgHACIgIgKIACgOIgEgGIgGAAIgPAGIggBsIgCAQIAGAIIABAMIgEAIIgFAFIgEAKIALAsIgGAOIAAAMIgQAVIgCAIIAGAPIgBACIgJAAIABAJIgDAHIgGgBIgHgDg");
	this.shape_10.setTransform(18.7,30.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#417BAA").s().p("AhYEYIAAgFIgCgHIgEgBIgSgOIgBgEIABgJIgBgEIhJjXIAJgIIAHADIAFABIAEgHIgBgKIAJAAIABgBIgHgPIACgIIAQgVIAAgMIAHgOIgLgsIAEgKIAFgFIADgIIAAgMIgHgIIACgQIAhhsIAPgGIAGAAIAEAGIgCAOIAIAKIAGgCIAUgQIAOgHIAGAAIAFgNIAVABIAmAYIAsCLIABAFIAGATIAEADIAIAAIAOAFIADgDIAGAAIADAEIACAGIgDAEIAJAgIAJADIAIgCIADgEIAGgBIAKAFIAIAQIAAAHIgEACIgCAJIAEACIACgBIAIAEIACAIIgFAJIgKAFIgEAAIgEACIgEAJIgTARIgNAGIgOAZIgKgKIgOgBIgIAOIgGABIgEAMIgFAHIgFADIgOgCIgEAAIAAAIIgNANIADAMIgFAQIgDAEIgHAEIgJAAIgDAEIAAAIIgHAHIgRACIgCAGIAAALIgEAEIgCgDIgFgKIgEgDIgYAWIAGAOIAEADIgBAFIgKAJIgEAYIgJAQIgEAcIgCAFg");
	this.shape_11.setTransform(18.8,29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#417BAA").s().p("AhYEYIAAgFIgCgHIgEgBIgSgOIgBgEIABgJIgBgEIhJjXIAJgIIAHADIAGABIACgHIgBgKIAJAAIABgBIgFgPIACgIIAQgVIAAgMIAFgOIgLgsIAEgKIAFgFIAEgIIgBgMIgFgIIACgQIAghsIAPgGIAGAAIAEAGIgCAOIAIAKIAHgCIAUgQIANgHIAFAAIAHgNIAUABIAlAYIAtCLIABAFIAGATIAEADIAIAAIAOAFIADgDIAGAAIADAEIACAGIgDAEIAIAgIAJADIAJgCIACgEIAGgBIAKAFIAJAQIAAAHIgDACIgEAJIAGACIABgBIAIAEIACAIIgFAJIgJAFIgGAAIgCACIgGAJIgTARIgLAGIgPAZIgKgKIgOgBIgIAOIgFABIgGAMIgDAHIgHADIgMgCIgGAAIAAAIIgLANIABAMIgEAQIgDAEIgHAEIgJAAIgDAEIAAAIIgHAHIgRACIgCAGIAAALIgDAEIgEgDIgDgKIgFgDIgXAWIAEAOIAGADIgBAFIgKAJIgGAYIgIAQIgEAcIgCAFg");
	this.shape_12.setTransform(18.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.5,61.6);


(lib.mdSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AB6hvIljBDIAPBAIAFgJIAGgDIAVgVIAJgCIAHgMIAHgDIAGgNIAFAGIAMADIANgEIADgJIAggLIAIAEIAIAAIAIgDIAEALIAFABIALAXIAIAAIASAGIgGAKIALAKIARAAIAKAJIAMAFIAJALIgCAGIgVAqIADAOIAPABIANgIIAKAMIAGADIAAgEIANgDIAPABIAVAHIALAFIAEgBIABgEIgFgFIgKgPIgJgCIgBgCIABgEIADAAIAEgFIgLgEIgIgNIgHgWIgEgWIAEgUIgBgHIgEgEIgBgGIACgFIADgFIADgIIARgNIADgEIAFgRIAMABIAEAGIgVAgIgFALIAFALIAIADIAGAWIgBAEIgOAIIACAFIAMAEIADAFIgDALIADAGIgBAGIAGAOIAOAKIAHAAIAFgEIAIAAIAEACIgCAIIAIAOIAAAFIAFAIIAMgBIACACIAHgKIAigLIALg3IgBgEIhBAOg");
	this.shape.setTransform(23.4,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AC1BtIgMABIgFgIIAAgFIgJgOIADgIIgFgCIgIAAIgFAEIgHAAIgOgKIgGgOIABgGIgDgGIADgLIgDgFIgLgEIgCgFIANgIIABgEIgFgWIgIgDIgFgLIAFgLIAUggIgEgGIgLgBIgFARIgDAEIgRANIgDAIIgDAFIgCAFIABAGIAEAEIABAHIgEAUIAEAWIAHAWIAIANIALAEIgEAFIgDAAIgBAEIABACIAJACIAJAPIAFAFIgBAEIgEABIgKgFIgVgHIgPgBIgOADIAAAEIgGgDIgKgMIgNAIIgPgBIgCgOIAUgqIACgGIgJgLIgMgFIgJgJIgRAAIgLgKIAGgKIgTgGIgIAAIgLgXIgFgBIgEgLIgIADIgIAAIgHgEIggALIgDAJIgOAEIgMgDIgFgGIgGANIgHADIgHAMIgJACIgUAVIgGADIgFAJIgPhAIFihDIAwCbIBAgOIABAEIgLA3IghALIgHAKg");
	this.shape_1.setTransform(23.5,11.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,49,24.3);


(lib.md = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgLAQIAOAAIAEgDIAEgFQABgDAAgFQAAgGgCgEQgCgDgEgCIgGgBIgJAAgAgRAWIAAgrIAPAAQAFAAABABQAEABADACQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABg");
	this.shape.setTransform(28.9,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgRAWIAAgrIAPAAIAGABQAEABADACQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABgAgLAQIAOAAIAEgDIAEgFIABgIQAAgGgCgEQgCgDgEgCIgGgBIgJAAg");
	this.shape_1.setTransform(28.9,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAkIANgkIAIAAIAAAqIgGAAIAAgjIgNAjIgDAAIgNgkIAAAkg");
	this.shape_2.setTransform(23.9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgkIgNAkIgDAAIgNgkIAAAkIgGAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(23.9,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AB6hvIljBDIAPBAIAFgJIAGgDIAVgVIAJgCIAHgMIAHgDIAGgNIAFAGIAMADIANgEIADgJIAggLIAIAEIAIAAIAIgDIAEALIAFABIALAXIAIAAIASAGIgGAKIALAKIARAAIAKAJIAMAFIAJALIgCAGIgVAqIADAOIAPABIANgIIAKAMIAGADIAAgEIANgDIAPABIAVAHIALAFIAEgBIABgEIgFgFIgKgPIgJgCIgBgCIABgEIADAAIAEgFIgLgEIgIgNIgHgWIgEgWIAEgUIgBgHIgEgEIgBgGIACgFIADgFIADgIIARgNIADgEIAFgRIAMABIAEAGIgVAgIgFALIAFALIAIADIAGAWIgBAEIgOAIIACAFIAMAEIADAFIgDALIADAGIgBAGIAGAOIAOAKIAHAAIAFgEIAIAAIAEACIgCAIIAIAOIAAAFIAFAIIAMgBIACACIAHgKIAigLIALg3IgBgEIhBAOg");
	this.shape_4.setTransform(23.4,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AC1BtIgMABIgFgIIAAgFIgJgOIADgIIgFgCIgIAAIgFAEIgHAAIgOgKIgGgOIABgGIgDgGIADgLIgDgFIgLgEIgCgFIANgIIABgEIgFgWIgIgDIgFgLIAFgLIAUggIgEgGIgLgBIgFARIgDAEIgRANIgDAIIgDAFIgCAFIABAGIAEAEIABAHIgEAUIAEAWIAHAWIAIANIALAEIgEAFIgDAAIgBAEIABACIAJACIAJAPIAFAFIgBAEIgEABIgKgFIgVgHIgPgBIgOADIAAAEIgGgDIgKgMIgNAIIgPgBIgCgOIAUgqIACgGIgJgLIgMgFIgJgJIgRAAIgLgKIAGgKIgTgGIgIAAIgLgXIgFgBIgEgLIgIADIgIAAIgHgEIggALIgDAJIgOAEIgMgDIgFgGIgGANIgHADIgHAMIgJACIgUAVIgGADIgFAJIgPhAIFihDIAwCbIBAgOIABAEIgLA3IghALIgHAKg");
	this.shape_5.setTransform(23.5,11.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,49,24.3);


(lib.maSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AiogOICygnIABgEIADgDIADADIACgDIgCgIIAJgDIAIgNIAHgCIAGADIAEAPIAOAKIADAGIgCAEIgGAEIgHALIgEANIABAHIAOAAIAMAHIAUASIAHANIAJALIAXABIANgGIAIgPIgEgDIgJgJIgMgEIABgFIANAAIAQAUIAJAWIgBALIgJgHIgMAIIgQAHIgQAOIgFAAIgDgCIAAgGIgDgLIgDAAIgJAQIgPASIgHgIIgBgEIgEgBIgCgDIgIgEIAAgEIgRgEIgFgNIgGgCIgEgMIh5AfIgBAFIgCABIgGgGIg7AOIgEgDg");
	this.shape.setTransform(17,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ABHBOIgBgEIgEgBIgCgDIgIgEIAAgEIgRgEIgFgNIgGgCIgEgMIh5AfIgBAFIgCABIgGgGIg7AOIgEgDIABhWICygnIABgEIADgDIADADIACgDIgCgIIAJgDIAIgNIAHgCIAGADIAEAPIAOAKIADAGIgCAEIgGAEIgHALIgEANIABAHIAOAAIAMAHIAUASIAHANIAJALIAXABIANgGIAIgPIgEgDIgJgJIgMgFIABgEIANAAIAQAUIAJAWIgBALIgJgHIgMAIIgQAHIgQAOIgFAAIgDgCIAAgGIgDgLIgDAAIgJAQIgPASg");
	this.shape_1.setTransform(17,8.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.1,19.4);


(lib.laSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AkijxIE1gJIAAALIAOAaIACAYIAHANIAGAHIABAMIgOAIIgDAEIgIAbIgUAfIgPA2IgCAmIDIgHIAFAEIgGAUIAAAcIAWAVIAFAYIgdgGIgagMIgHgBIgHAEIgUARIgBAJIAJAJIAKADIAWgCIAMgIIAIgDIANAAIAGgBIABAEIgDAFIgIAHIACAIIAIAEIAGACIAFgFIAJgQIAXgIIAIgEIAFAAIAFAHIgDAIIADAFIgBAHIgKAHIgQAVIgSAMIgBAMIAGAJIAXANIAmAPIAFAHIgEAJIgIACIgdANIgDgYIgzgVIgEgLIgGgEIgJAFIgFAXIADADIABAFIgRAMIgHgCIgJgNIgFgBIgMAEIgFgFIgFABIgPAQIgRABIgGgEIgSgEIgbghIgQgDIgPgHIgEgKIgEAAIgBgCIgCgCIACgGIgHgCIgEACIgMgCIgDgCIgCgIIgHAAIgVATIAKALIgEAEIgiABIg5gKIgigNIhLALIgFgFIgDgIIAEgEIADgIIAIgIIAKgcIgIgLIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgSIgIgOIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgKgSIgPgOIgFgIg");
	this.shape.setTransform(29.1,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AD2DiIgzgVIgDgMIgGgDIgKAEIgFAXIADADIABAGIgRALIgHgCIgJgMIgFgCIgMAFIgEgGIgGABIgOAQIgRABIgHgDIgSgFIgbggIgQgEIgOgGIgEgKIgFAAIgBgDIgCgCIACgGIgGgCIgFACIgMgCIgDgCIgCgIIgHAAIgVATIAKALIgEAFIgiAAIg5gJIghgOIhMAMIgFgGIgCgIIADgDIADgIIAIgJIAKgbIgIgMIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgSIgIgOIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgJgSIgPgOIgGgIIgDiAIE2gJIAAALIANAaIACAZIAHAMIAGAHIABAMIgOAIIgDAFIgIAbIgTAeIgQA2IgBAmIDHgHIAGAEIgHAUIAAAcIAXAVIAEAYIgcgGIgbgMIgHgBIgHAEIgUARIgBAJIAJAKIAKACIAWgBIAMgIIAJgEIAMAAIAHgBIAAAFIgCAFIgIAGIABAIIAJAFIAGACIAEgGIAJgPIAXgJIAIgEIAFAAIAFAHIgDAJIADAEIgBAHIgKAIIgQAUIgRANIgBAMIAFAIIAXANIAmAPIAGAIIgFAJIgIABIgdAOg");
	this.shape_1.setTransform(29.1,27);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,1,60.2,52);


(lib.la = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgTg");
	this.shape.setTransform(18.1,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgGAAIARgrIAFAAIASArgAgHAEIAOAAIgHgUg");
	this.shape_1.setTransform(18.1,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgMAWIAAgrIAGAAIAAAlIAUAAIAAAGg");
	this.shape_2.setTransform(14.4,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgMAWIAAgrIAFAAIAAAlIAVAAIAAAGg");
	this.shape_3.setTransform(14.4,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AkijxIE1gJIAAALIAOAaIACAYIAHANIAGAHIABAMIgOAIIgDAEIgIAbIgUAfIgPA2IgCAmIDIgHIAFAEIgGAUIAAAcIAWAVIAFAYIgdgGIgagMIgHgBIgHAEIgUARIgBAJIAJAJIAKADIAWgCIAMgIIAIgDIANAAIAGgBIABAEIgDAFIgIAHIACAIIAIAEIAGACIAFgFIAJgQIAXgIIAIgEIAFAAIAFAHIgDAIIADAFIgBAHIgKAHIgQAVIgSAMIgBAMIAGAJIAXANIAmAPIAFAHIgEAJIgIACIgdANIgDgYIgzgVIgEgLIgGgEIgJAFIgFAXIADADIABAFIgRAMIgHgCIgJgNIgFgBIgMAEIgFgFIgFABIgPAQIgRABIgGgEIgSgEIgbghIgQgDIgPgHIgEgKIgEAAIgBgCIgCgCIACgGIgHgCIgEACIgMgCIgDgCIgCgIIgHAAIgVATIAKALIgEAEIgiABIg5gKIgigNIhLALIgFgFIgDgIIAEgEIADgIIAIgIIAKgcIgIgLIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgSIgIgOIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgKgSIgPgOIgFgIg");
	this.shape_4.setTransform(29.1,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AD2DhIgzgUIgEgLIgGgFIgJAGIgFAWIADAEIABAEIgRANIgHgDIgJgMIgFgBIgLADIgGgEIgEABIgPAQIgSABIgGgFIgSgDIgbgiIgPgCIgPgIIgFgJIgDAAIgBgCIgDgDIADgFIgHgCIgFACIgMgCIgDgDIgCgIIgHAAIgVAUIAKALIgEADIgiABIg5gKIgigMIhLAKIgFgFIgDgHIAEgFIADgIIAIgIIAKgcIgIgLIAAgJIACgGIgBgIIADgQIAIgGIAFgMIAEgXIAAgOIgEgSIgIgOIgEgEIACgHIgEgFIgGgMIgHgGIgCgEIAEgOIgJgSIgQgOIgEgHIgEiBIE2gJIAAAMIANAZIACAYIAHAOIAGAGIABANIgOAIIgDADIgIAcIgUAeIgPA2IgCAmIDJgHIAEAEIgGAUIAAAcIAXAVIAEAYIgdgGIgagMIgHgBIgHAEIgTARIgCAJIAJAJIAKADIAWgCIAMgIIAIgDIAOAAIAFgBIABAEIgDAGIgIAHIACAIIAIADIAHACIAFgEIAJgQIAWgJIAIgEIAFAAIAFAHIgDAIIADAGIgBAHIgKAGIgQAWIgSALIgBAMIAHAJIAWAOIAmAOIAGAHIgEAJIgIACIgeAOg");
	this.shape_5.setTransform(29.1,25);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,60.2,52);


(lib.kySelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Al1C+ICVgMIAAgMIgEgHIASgCIAHAFIGmgnIAJgGIAHgHIAkgRIAEgJIAVgOIABgJIADgFIAKgGIABgLIA+g0IAEgKIgIAAIgHgFIgDAAIgDgDIgKgFIgFABIgDgCIgNgUIgVgaIgCgIIABgIIAAgMIgDgQIgEgEIgLgIIgMgDIgPgWIgMAJIgDAFIgHAEIgCADIgPACIgSgHIgHABIgIALIgWgPIgVACIgPgGIgHgSIgUgPIgLAGIgGAAIgLgFIgIAAIgEAJIAAAHIAGAWIgEAIIgLADIgOALIgRgEIgIAGIAAATIgnA0IgHAXIgZABIgLgNIgHgBIgGAIIgIAZIgIAHIgKgHIgHgJIgSAGIgGASIgGACIgDgDIgegMIgYAJIgUgBIgDAHIABAEIgIADIgIgBIACACIgEAGIgCAKIgEADIAAAEIAKANIgCACIgfAJIgJAFIAIAnIgOAGIgMgJIgNgGIgSgDIgMAGIgGAXIACACIAIAGIAEAMIgKAgIgGAEIgFgDIgNAGg");
	this.shape.setTransform(37.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AlwC0IANgFIAFADIAGgEIAKggIgEgMIgIgGIgCgCIAGgXIAMgGIASADIAMAGIANAJIANgGIgIgnIAJgFIAggJIACgCIgKgNIAAgEIAEgDIACgKIAEgGIgCgCIAIABIAIgDIgBgEIADgHIATABIAZgJIAeAMIADADIAGgCIAGgSIASgGIAGAJIALAHIAHgHIAIgaIAGgIIAIABIALAOIAZgBIAHgYIAmg0IAAgTIAIgFIASADIAOgKIALgEIAEgHIgGgXIAAgHIAEgJIAIAAIALAGIAGAAIALgHIATAQIAIASIAPAGIAVgDIAVAQIAIgLIAHgBIATAGIAPgCIACgCIAHgFIADgEIAMgJIAPAVIALAEIAMAIIADADIADARIAAALIgBAJIACAIIAWAaIANATIADACIAFgBIAKAGIADADIADAAIAHAFIAIAAIgEAKIg/A0IgBALIgKAGIgCAFIgBAJIgVAOIgEAJIgkARIgHAHIgJAGImmAnIgIgFIgRACIAEAHIAAAMIiWALg");
	this.shape_1.setTransform(37.6,19);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.2,40);


(lib.ky = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgTIgRgXIAHAAIAMAUIANgUIAHAAIgSAXIAAATg");
	this.shape.setTransform(45.5,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAVIAAgSIgRgYIAHAAIAMAVIANgVIAHAAIgSAYIAAASg");
	this.shape_1.setTransform(45.5,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAWIAAgqIAGAAIAAAUIAUgUIAIAAIgRASIASAYIgIAAIgOgWIgHAHIAAAPg");
	this.shape_2.setTransform(41.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAKAVIgOgVIgHAGIAAAPIgGAAIAAgqIAGAAIAAAVIAUgVIAIAAIgRASIASAYg");
	this.shape_3.setTransform(41.6,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Al1C+ICVgMIAAgMIgEgHIASgCIAHAFIGmgnIAJgGIAHgHIAkgRIAEgJIAVgOIABgJIADgFIAKgGIABgLIA+g0IAEgKIgIAAIgHgFIgDAAIgDgDIgKgFIgFABIgDgCIgNgUIgVgaIgCgIIABgIIAAgMIgDgQIgEgEIgLgIIgMgDIgPgWIgMAJIgDAFIgHAEIgCADIgPACIgSgHIgHABIgIALIgWgPIgVACIgPgGIgHgSIgUgPIgLAGIgGAAIgLgFIgIAAIgEAJIAAAHIAGAWIgEAIIgLADIgOALIgRgEIgIAGIAAATIgnA0IgHAXIgZABIgLgNIgHgBIgGAIIgIAZIgIAHIgKgHIgHgJIgSAGIgGASIgGACIgDgDIgegMIgYAJIgUgBIgDAHIABAEIgIADIgIgBIACACIgEAGIgCAKIgEADIAAAEIAKANIgCACIgfAJIgJAFIAIAnIgOAGIgMgJIgNgGIgSgDIgMAGIgGAXIACACIAIAGIAEAMIgKAgIgGAEIgFgDIgNAGg");
	this.shape_4.setTransform(37.5,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AlwC0IANgFIAFADIAGgEIAKggIgEgMIgIgGIgCgCIAGgXIAMgGIASADIAMAGIANAJIANgGIgIgnIAJgFIAggJIACgCIgKgNIAAgEIAEgDIACgKIAEgGIgCgCIAIABIAIgDIgBgEIADgHIATABIAZgJIAeAMIADADIAGgCIAGgSIASgGIAGAJIALAHIAHgHIAIgaIAGgIIAIABIALAOIAZgBIAHgYIAmg0IAAgTIAIgFIASADIAOgKIALgEIAEgHIgGgXIAAgHIAEgJIAIAAIALAGIAGAAIALgHIATAQIAIASIAPAGIAVgDIAVAQIAIgLIAHgBIATAGIAPgCIACgCIAHgFIADgEIAMgJIAPAVIALAEIAMAIIADADIADARIAAALIgBAJIACAIIAWAaIANATIADACIAFgBIAKAGIADADIADAAIAHAFIAIAAIgEAKIg/A0IgBALIgKAGIgCAFIgBAJIgVAOIgEAJIgkARIgHAHIgJAGImmAnIgIgFIgRACIAEAHIAAAMIiWALg");
	this.shape_5.setTransform(37.6,19);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.2,40);


(lib.ksSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AljjHIKQAPIArAfIgNAQIgDAQIAHAIIALAFIAGAWIAKAHIAKACIAEADIADETIr1gQg");
	this.shape.setTransform(37.9,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("Al6C5IAXmAIKQAPIArAfIgOAQIgDAQIAIAIIAKAFIAHAWIAKAHIAKACIAEADIADETg");
	this.shape_1.setTransform(38,19.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-2,77.9,42.2);


(lib.ks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgRAHIAGAAIACAFQABADADABQACABADAAQAFAAABgBIAEgDIABgDIgBgEQgCgCgCgBIgPgDQgCgBgCgDQgCgCAAgDQAAgEACgDQACgDAEgBQAEgCADAAQAFAAADACQAEACACADQACAEAAADIgGAAQAAgEgDgCQgCgCgFAAQgFAAgCACQgCABAAADQAAADACABQABACAGABQAHACADABQAEAAABADQACAEAAACQAAADgCAEQgCACgDADQgEABgFAAQgEAAgFgBQgFgDgBgDQgDgEAAgEg");
	this.shape.setTransform(44.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgHAVQgGgDgBgDQgCgEAAgEIAFAAIACAGIAFADIAFABIAFgBIAFgCIABgFIgBgDIgFgCIgPgEIgEgDQgCgCABgEQAAgEABgDQACgDAEgBIAHgBQAEAAAEACQAEABACADQACAEAAADIgFAAQgBgEgDgCQgCgCgFAAQgFAAgBACQgDACAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQACACAFACQAIABACABQAEAAABADIADAGQgBADgCAEIgFAFQgEABgFABQgEgBgEgBg");
	this.shape_1.setTransform(44.6,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgVAVIAAgqIAGAAIAAAVIAVgVIAIAAIgRASIARAYIgHAAIgOgVIgIAGIAAAPg");
	this.shape_2.setTransform(41,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AALAWIgPgWIgHAGIAAAQIgGAAIAAgqIAGAAIAAAUIAVgUIAIAAIgSASIASAYg");
	this.shape_3.setTransform(40.7,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AljjHIKQAPIArAfIgNAQIgDAQIAHAIIALAFIAGAWIAKAHIAKACIAEADIADETIr1gQg");
	this.shape_4.setTransform(37.9,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("Al6C5IAXmAIKQAPIArAfIgOAQIgDAQIAIAIIAKAFIAHAWIAKAHIAKACIAEADIADETg");
	this.shape_5.setTransform(38,20.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.9,42.2);


(lib.inSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AiQjrIAaEsIgEAFIACALIgEAQIAMAXIAEAcIgOAZIgBAIIgKAUIgQAPIAAASIgFAYIAAAFIABAFIAIABIAIgDIgBgEIADgJIAUABIAYgJIAeAOIADADIAGgCIAGgUIASgGIAHAJIAKAHIAIgHIAGgZIAGgIIAHABIALANIAZgBIAHgXIApg0IAAgTIAIgGIARAEIAOgLIALgDIAEgIIgGgWIAAgHIAEgJIgnlPIjEAZIgGAFIgXAKIgTADg");
	this.shape.setTransform(15.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AiZEMIgBgFIAAgFIAGgYIAAgSIAPgPIAKgUIABgIIAOgZIgEgcIgMgXIAEgQIgCgLIAEgFIgaksIAOAKIASgDIAXgKIAGgFIDEgZIAnFPIgDAJIAAAHIAFAWIgDAIIgLADIgPALIgRgEIgIAGIAAATIgoA0IgIAXIgZABIgLgNIgHgBIgGAIIgGAZIgIAHIgKgHIgHgJIgRAGIgHAUIgFACIgEgDIgegOIgYAJIgUgBIgCAJIABAEIgJADg");
	this.shape_1.setTransform(15.5,27);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33,56);


(lib._in = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgrIAGAAIAWAhIAAghIAFAAIAAArIgGAAIgVghIAAAhg");
	this.shape.setTransform(16.9,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AALAWIgWghIAAAhIgFAAIAAgrIAGAAIAWAhIAAghIAFAAIAAArg");
	this.shape_1.setTransform(16.9,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgrIAFAAIAAArg");
	this.shape_2.setTransform(13.8,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_3.setTransform(13.8,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AiQjrIAaEsIgEAFIACALIgEAQIAMAXIAEAcIgOAZIgBAIIgKAUIgQAPIAAASIgFAYIAAAFIABAFIAIABIAIgDIgBgEIADgJIAUABIAYgJIAeAOIADADIAGgCIAGgUIASgGIAHAJIAKAHIAIgHIAGgZIAGgIIAHABIALANIAZgBIAHgXIApg0IAAgTIAIgGIARAEIAOgLIALgDIAEgIIgGgWIAAgHIAEgJIgnlPIjEAZIgGAFIgXAKIgTADg");
	this.shape_4.setTransform(15.5,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AiZEMIgBgFIAAgFIAGgYIAAgSIAQgPIAJgUIABgIIAOgZIgEgcIgMgXIAEgQIgCgLIAEgFIgaksIAOAKIASgDIAXgKIAGgFIDEgZIAnFPIgDAJIAAAHIAGAWIgFAIIgLADIgOALIgRgEIgIAGIAAATIgpA0IgHAXIgYABIgMgNIgHgBIgGAIIgGAZIgIAHIgKgHIgHgJIgSAGIgFAUIgGACIgDgDIgfgOIgYAJIgUgBIgDAJIABAEIgIADg");
	this.shape_5.setTransform(15.5,27);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33,56);


(lib.ilSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("ACClmIkIASIAEAHIATANIACAMIATALIAGAWIgBALIgGANIgHAHIAAALIgRASIgPAEIgFAFIgTABIgLAGIgGANIABALIANAMIADAIIgDATIgPAfIgPAKIgFAKIABAKIgHALIAAAFIgFAOIACAYIAHAVIACAHIAeAiIAdAXIAIAIIARAuIAFAEIAJgJIAIgEIAZAMIAEAIIgFAQIACASIgTAVIgDAIIAGAOIASAQIAcASIAOAFIAbAZIAFAWIAJALIAAAFIgIAIIAAAFIAVAjIAEgCIABgFIAHAAIACADIAGgXIAMgGIARADIANAGIAMAJIAOgGIgIgnIAJgFIAggJIACgCIgKgNIAAgEIAEgDIACgKIAEgGIgCgCIgBgFIAAgFIAFgYIAAgSIAQgPIAJgUIABgIIAOgZIgEgcIgMgXIAEgQIgCgLIAEgFIgZksIgFgDIgEgIIgGgcIgEgIIgJgIIgKgTg");
	this.shape.setTransform(20.4,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AASFDIAAgFIAIgIIAAgFIgJgLIgFgWIgcgZIgOgFIgcgSIgSgQIgGgPIAEgIIASgVIgCgSIAFgQIgEgIIgZgMIgIAEIgJAJIgEgEIgSguIgIgIIgdgXIgegiIgCgIIgHgTIgCgYIAGgOIAAgFIAGgLIgBgKIAGgKIAOgKIAPgfIADgTIgDgIIgMgMIgBgLIAFgNIALgGIATgBIAFgFIAPgFIASgSIAAgLIAGgHIAGgNIABgLIgFgWIgUgLIgCgMIgTgNIgEgHIEIgSIAAAXIAKATIAJAIIAEAIIAGAcIAEAIIAFADIAZEsIgDAFIABALIgDAQIAMAXIADAcIgNAZIgBAIIgKAUIgQAPIAAATIgFAYIAAAFIABAFIACACIgEAGIgCAKIgEADIAAAEIAKANIgCACIgfAJIgJAFIAIAnIgPAGIgLgJIgOgGIgRgDIgMAGIgGAXIgCgDIgHAAIgBAFIgEACg");
	this.shape_1.setTransform(20.4,35.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,42.8,73.7);


(lib.il = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgNAWIAAgqIAGAAIAAAlIAUAAIAAAFg");
	this.shape.setTransform(22.2,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgNAVIAAgqIAHAAIAAAlIATAAIAAAFg");
	this.shape_1.setTransform(22.2,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgBAWIAAgqIAEAAIAAAqg");
	this.shape_2.setTransform(19.5,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAVIAAgqIAFAAIAAAqg");
	this.shape_3.setTransform(19.5,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("ACClmIkIASIAEAHIATANIACAMIATALIAGAWIgBALIgGANIgHAHIAAALIgRASIgPAEIgFAFIgTABIgLAGIgGANIABALIANAMIADAIIgDATIgPAfIgPAKIgFAKIABAKIgHALIAAAFIgFAOIACAYIAHAVIACAHIAeAiIAdAXIAIAIIARAuIAFAEIAJgJIAIgEIAZAMIAEAIIgFAQIACASIgTAVIgDAIIAGAOIASAQIAcASIAOAFIAbAZIAFAWIAJALIAAAFIgIAIIAAAFIAVAjIAEgCIABgFIAHAAIACADIAGgXIAMgGIARADIANAGIAMAJIAOgGIgIgnIAJgFIAggJIACgCIgKgNIAAgEIAEgDIACgKIAEgGIgCgCIgBgFIAAgFIAFgYIAAgSIAQgPIAJgUIABgIIAOgZIgEgcIgMgXIAEgQIgCgLIAEgFIgZksIgFgDIgEgIIgGgcIgEgIIgJgIIgKgTg");
	this.shape_4.setTransform(17.4,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AASFDIAAgFIAIgIIAAgFIgJgLIgFgWIgcgZIgOgFIgcgSIgSgQIgGgPIAEgIIASgVIgCgSIAFgQIgEgIIgZgMIgIAEIgJAJIgEgEIgSguIgIgIIgdgXIgegiIgCgIIgHgTIgCgYIAGgOIAAgFIAGgLIgBgKIAGgKIAOgKIAPgfIADgTIgDgIIgMgMIgBgLIAFgNIALgGIATgBIAFgFIAPgFIASgSIAAgLIAGgHIAGgNIABgLIgFgWIgUgLIgCgMIgTgNIgEgHIEIgSIAAAXIAKATIAJAIIAEAIIAGAcIAEAIIAFADIAZEsIgDAFIABALIgDAQIAMAXIADAcIgNAZIgBAIIgKAUIgQAPIAAATIgFAYIAAAFIABAFIACACIgEAGIgCAKIgEADIAAAEIAKANIgCACIgfAJIgJAFIAIAnIgPAGIgLgJIgOgGIgRgDIgMAGIgGAXIgCgDIgHAAIgBAFIgEACg");
	this.shape_5.setTransform(17.4,35.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-1,42.8,73.7);


(lib.idSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AEyCrIguE8IgBAAIkagyIkZg6IAyjhIAOgQIABgPIADgCIABgEIAEgHIgGgKIgQgHIgDgIIAEgPIAYgjIAOgHIAKgKIAAgJIAIgHIAshCIgDgSIgJgIIgIgCIgJgMIgCgLIgBgQIAEgGIACgHIgGgKIAAgLIAEgFIBHk7IBSAQIgWB6IAPAhIAEAVIgEANIgFAGIAQAVIAWAVIANAiIADAPIAHAQIAOABIABAKIAUADIAGAHIgVApIABAHIgHAGIgBAUIACACIgBALIgPAKIAAALIABAIIgFAKIASASIAFgCIAdgWIAEgCIADACIAEAJIADADIAFAEIgDAOIAAAaIAGARIAKAOIAAAIIgGALIAKAQIALAAIAJAMIACAIIgDARIAAAFIAGAOIANAHIAHgMIAFgEIAUAIIAJABIAIgIIAHgBIAFAFIAYABIALAGIAFgCIAaAAIgBgKIALgJIANAOIAEAPIAJAIIAAABIAAgBg");
	this.shape.setTransform(30.6,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AECHmIkagyIkZg5IAzjiIANgQIABgPIADgCIABgEIAEgHIgGgKIgPgHIgDgIIAEgPIAXgjIAOgHIAKgJIAAgJIAJgHIAshCIgDgSIgJgIIgIgCIgJgMIgCgLIgBgQIAEgGIACgHIgGgKIAAgLIAEgFIBGk7IBSAQIgWB5IAPAhIAEAVIgEANIgFAGIAQAVIAXAVIANAiIADAQIAHAQIAOABIABAKIATADIAGAHIgUApIABAHIgHAGIgBAUIACACIgBALIgPAKIAAALIABAIIgFAKIASASIAFgCIAcgWIAEgCIADACIAEAJIADADIAFAEIgDAOIAAAZIAGARIALAOIAAAIIgGALIAKAQIALAAIAJAMIACAIIgDARIAAAFIAGAOIANAHIAGgMIAFgEIAUAIIAJABIAIgIIAIgBIAFAFIAYABIALAGIAEgCIAaAAIgBgKIALgJIAOAOIAEAPIAJAJIgvE7gAEyCrIAAgBIAAABgAEyCrg");
	this.shape_1.setTransform(30.6,48.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.3,99.4);


(lib.id = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgLAQIAOAAIAEgDIAEgFQABgDAAgFQAAgGgCgEQgCgDgEgCQgEgBgCAAIgJAAgAgRAWIAAgrIAPAAQAFAAABABQADAAAEADQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABg");
	this.shape.setTransform(36.6,66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgRAWIAAgrIAPAAIAGABQADAAAEADQAEAEABAEQACAGAAADQAAAFgBADQgBAEgCADIgEAEIgGACIgFABgAgLAQIAOAAIAEgDIAEgFIABgIQAAgGgCgEQgCgDgEgCIgGgBIgJAAg");
	this.shape_1.setTransform(36.6,66.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgrIAEAAIAAArg");
	this.shape_2.setTransform(33.5,66.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAWIAAgrIAEAAIAAArg");
	this.shape_3.setTransform(33.5,66.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AEyCrIguE8IgBAAIkagyIkZg6IAyjhIAOgQIABgPIADgCIABgEIAEgHIgGgKIgQgHIgDgIIAEgPIAYgjIAOgHIAKgKIAAgJIAIgHIAshCIgDgSIgJgIIgIgCIgJgMIgCgLIgBgQIAEgGIACgHIgGgKIAAgLIAEgFIBHk7IBSAQIgWB6IAPAhIAEAVIgEANIgFAGIAQAVIAWAVIANAiIADAPIAHAQIAOABIABAKIAUADIAGAHIgVApIABAHIgHAGIgBAUIACACIgBALIgPAKIAAALIABAIIgFAKIASASIAFgCIAdgWIAEgCIADACIAEAJIADADIAFAEIgDAOIAAAaIAGARIAKAOIAAAIIgGALIAKAQIALAAIAJAMIACAIIgDARIAAAFIAGAOIANAHIAHgMIAFgEIAUAIIAJABIAIgIIAHgBIAFAFIAYABIALAGIAFgCIAaAAIgBgKIALgJIANAOIAEAPIAJAIIAAABIAAgBg");
	this.shape_4.setTransform(30.6,48.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AECHmIkagyIkZg5IAzjiIANgQIABgPIADgCIABgEIAEgHIgGgKIgPgHIgDgIIAEgPIAXgjIAOgHIAKgJIAAgJIAJgHIAshCIgDgSIgJgIIgIgCIgJgMIgCgLIgBgQIAEgGIACgHIgGgKIAAgLIAEgFIBGk7IBSAQIgWB5IAPAhIAEAVIgEANIgFAGIAQAVIAXAVIANAiIADAQIAHAQIAOABIABAKIATADIAGAHIgUApIABAHIgHAGIgBAUIACACIgBALIgPAKIAAALIABAIIgFAKIASASIAFgCIAcgWIAEgCIADACIAEAJIADADIAFAEIgDAOIAAAZIAGARIALAOIAAAIIgGALIAKAQIALAAIAJAMIACAIIgDARIAAAFIAGAOIANAHIAGgMIAFgEIAUAIIAJABIAIgIIAIgBIAFAFIAYABIALAGIAEgCIAaAAIgBgKIALgJIAOAOIAEAPIAJAJIgvE7gAEyCrIAAgBIAAABgAEyCrg");
	this.shape_5.setTransform(30.6,48.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.3,99.4);


(lib.iaSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("Akii5IHjgQIAFAQIALAKIAAAIIgIALIAOAzIAdAKIAJAIIAEAMIAEAHIAUANIACAMIATALIAGAWIgBAKIgGAMIgHAHIAAALIgSASIgPAFIgFAFIgTABIgKAGIgGANIABALIAMAMIADAIIgDATIgOAfIgPAKIgFAKIABAKIgHALIgegdImFAMIgEgGIgDgOIADgKIgHgKIgDgKIAHgKIgEgKIgNgHIADgUIAEgLIgEgKIgNgKIgEgLIAEgKIgLgKIgGgVIgKgHIAGgSIAAgJIgOgIIAAgQIgCgNIgKgYIAKgXIgCgLIAHgGIgEgTIgHgGIAFgNIgEgHIgDgIIAIgBg");
	this.shape.setTransform(30.8,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ACkCsImFAMIgEgGIgDgOIADgKIgHgKIgDgKIAHgKIgEgKIgNgHIADgUIAEgLIgEgKIgNgKIgFgLIAFgKIgMgKIgFgUIgLgHIAGgSIAAgJIgNgIIAAgRIgDgMIgKgYIAKgYIgCgLIAIgGIgFgTIgGgGIAEgNIgDgHIgEgIIAIgBIAHABIHjgQIAEAQIAMAKIAAAIIgIAMIANAyIAeALIAJAHIAEANIAEAHIAUAMIACAMIASAMIAHAVIgBAJIgGAOIgIAGIAAAMIgRASIgPAEIgFAFIgTABIgKAGIgHANIABALIANAMIADAIIgDATIgOAfIgQAKIgEAKIABAKIgIALg");
	this.shape_1.setTransform(30.8,20.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.6,42.3);


(lib.ia = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAZIASgrIAEAAIASArIgGAAIgGgOIgQAAIgFAOgAgHAGIANAAIgGgTg");
	this.shape.setTransform(27.3,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgHAAIASgrIAEAAIATArgAgGADIAMAAIgGgTg");
	this.shape_1.setTransform(27.3,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgrIAFAAIAAArg");
	this.shape_2.setTransform(24.3,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAWIAAgrIAFAAIAAArg");
	this.shape_3.setTransform(24.3,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("Akii5IHjgQIAFAQIALAKIAAAIIgIALIAOAzIAdAKIAJAIIAEAMIAEAHIAUANIACAMIATALIAGAWIgBAKIgGAMIgHAHIAAALIgSASIgPAFIgFAFIgTABIgKAGIgGANIABALIAMAMIADAIIgDATIgOAfIgPAKIgFAKIABAKIgHALIgegdImFAMIgEgGIgDgOIADgKIgHgKIgDgKIAHgKIgEgKIgNgHIADgUIAEgLIgEgKIgNgKIgEgLIAEgKIgLgKIgGgVIgKgHIAGgSIAAgJIgOgIIAAgQIgCgNIgKgYIAKgXIgCgLIAHgGIgEgTIgHgGIAFgNIgEgHIgDgIIAIgBg");
	this.shape_4.setTransform(30.8,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ACkCsImFAMIgEgGIgDgOIADgKIgHgKIgDgKIAHgKIgEgKIgNgHIADgUIAEgLIgEgKIgNgKIgFgLIAFgKIgMgKIgFgUIgLgHIAGgSIAAgJIgNgIIAAgRIgDgMIgKgYIAKgYIgCgLIAIgGIgFgTIgGgGIAEgNIgDgHIgEgIIAIgBIAHABIHjgQIAEAQIAMAKIAAAIIgIAMIANAyIAeALIAJAHIAEANIAEAHIAUAMIACAMIASAMIAHAVIgBAJIgGAOIgIAGIAAAMIgRASIgPAEIgFAFIgTABIgKAGIgHANIABALIANAMIADAIIgDATIgOAfIgQAKIgEAKIABAKIgIALg");
	this.shape_5.setTransform(30.8,20.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.6,42.3);


(lib.hiSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#417BAA").s().p("AF2FpIgkgaIgDgtIAHgZIgRg4IgVgSIgBgaIAWgJIAVgfIAFgKIgQgSIgDgVIAQgMIBuAzIAiAVIAQAYIATAsIApAaIgDANIgnAgIgqAPIgPgHIgeASIgvA+gADWgLIgxhCIAXgdIAvAYIArAMIAsAbIAAAUIgjASIgxAHgABghCIAAgMIAlADIAQAVIgDAQIgfALgABhhlIg3gQIANgUIAvAKIAHgEIA9AFIgDAOIgaAOgAhVifIgLAEIgYAEIgmg3IAHgSIA6gdIAoBJIAeARIgKAPIglABgAo3kNIAUgjIAWgEIAEAIIgVAfgAnRkzIAKglIAogSIAqAGIAHAiIgQAnIgVACg");
	this.shape.setTransform(34.5,22.1,0.607,0.607);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,44.1);


(lib.hi = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("ABlguIAOgSIAdAPIAaAHIAbAQIAAAMIgWALIgdAEIgPgHgAAbhHIAIgMIAcAGIAEgCIAlADIgCAIIgPAJIgbgCgAA7gnIAMAXIATgHIACgJIgKgNIgXgCgADKAuIAKgIIBDAfIAVANIAKAPIALAaIAZAQIgCAIIgYAUIgZAJIgJgEIgTAKIgcAmIgLgBIgWgQIgBgbIAEgPIgLgjIgMgKIgBgQIANgGIANgTIADgGIgJgKgAheh9IAXAiIAOgCIAHgDIAJAHIAXAAIAGgJIgSgLIgZgsIgjARgAkYi6IAlAQIANgCIAJgXIgEgVIgZgDIgZALgAlWijIAMgWIANgCIACAFIgMATg");
	this.shape.setTransform(34.4,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ADjDbIgWgQIgCgbIAEgPIgKgjIgMgKIgBgQIANgGIANgTIADgFIgKgLIgCgNIAKgIIBCAgIAWAMIAKAQIALAaIAZAQIgDAHIgXAUIgZAJIgJgEIgTAKIgcAmgACCgGIgegoIAOgRIAcAOIAaAHIAbARIAAALIgVAMIgeADgAA6gnIAAgIIAWACIAKANIgCAJIgTAHgAA7g9IgigKIAIgLIAdAFIAEgCIAlADIgCAIIgPAJgAgzhgIgHADIgPACIgWgiIADgKIAkgSIAZAtIASAKIgHAJIgWABgAlYiiIAMgXIAOgCIACAGIgMATgAkZi6IAFgWIAYgLIAaADIAEAVIgKAYIgNABg");
	this.shape_1.setTransform(34.5,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgrIAEAAIAAArg");
	this.shape_2.setTransform(40.7,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgCAWIAAgrIAEAAIAAArg");
	this.shape_3.setTransform(40.7,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqIgGAAIAAgVIgVAAIAAAVg");
	this.shape_4.setTransform(37.2,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AALAVIAAgUIgVAAIAAAUIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqg");
	this.shape_5.setTransform(37.2,25.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,71,46.1);


(lib.gaSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AkXj6IBLEKIAHAHIAHATIAEAIIAJAGIAHAIIgEALIAJALIgBAEIgKAOIAAARIgGAPIABAXIANAcIgCAgIANAUIADAOIAKAKIgBAIIAHAKIElgSIAEAOIAEAGIAQACIADgPIgJgcIABgKIADgFIAIgGIAWAKIATABIAJgDIgDgVIgEgLIAAgNIACgLIAPgsIADgTIAQgkIAJgJIAFgCIACgGIgIgCIAAgDIgUgBIgEgDIgEgGIgGgaIgNgQIgQgGIgIgbIgLgMIgFgOIgbgLIgLgOIgMgIIgBgHIgGgNIgEgEIgRgGIgigfIgPgFIgEgKIgOgMIgKgUIgKgKIgEgHIgUgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCg");
	this.shape.setTransform(28.1,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ACjEbIgEgGIgEgOIklASIgHgKIABgIIgKgKIgDgOIgNgUIACggIgNgcIgBgXIAGgPIAAgRIAKgOIABgEIgJgLIAEgLIgHgIIgJgGIgEgIIgHgTIgHgHIhLkKIEEgiIABACIgBAFIgFAHIgHAGIgKAVIAJAIIAcAOIAUAEIAEAHIAKAKIAKAUIAOAMIAEAKIAPAFIAiAfIARAGIAEAEIAGANIABAHIAMAIIALAOIAbALIAFAOIALAMIAIAbIAQAGIANAQIAGAaIAEAGIAEADIAUABIAAADIAIACIgCAGIgFACIgJAJIgQAkIgDATIgPAsIgCALIAAANIAEALIADAVIgJADIgTgBIgWgKIgIAGIgDAFIgBAKIAJAcIgDAPg");
	this.shape_1.setTransform(28.1,28.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.2,59.2);


(lib.ga = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgUg");
	this.shape.setTransform(29.3,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgGAAIARgrIAEAAIATArgAgHADIAOAAIgHgTg");
	this.shape_1.setTransform(29.3,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AABAEIAAgEIATAAIAAAPQgDADgGADQgFABgFAAQgDAAgHgCQgFgDgDgGQgCgEAAgHQAAgGACgEQADgGAFgDQAFgCAFAAQAFAAAEABQADACADACQADAEAAAEIgFABIgCgFQgDgDgCAAQgCgBgEAAQgDAAgCABIgFADIgDAEQgBAFAAADQAAAGACADQACAEAEACQAFACABAAIAIgBIAFgEIAAgIg");
	this.shape_2.setTransform(24.7,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJAUQgFgDgDgGQgCgEAAgHQAAgGACgEQADgGAFgDQAFgCAFAAQAFAAAEABIAGAEQADAEAAAEIgFABIgCgFIgFgDIgGgBIgFABIgFADIgDAEIgBAIQAAAGACADQACAEAEACQAFACABAAIAIgBIAFgEIAAgIIgNAAIAAgEIATAAIAAAPIgJAGIgKABQgDAAgHgCg");
	this.shape_3.setTransform(24.7,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AkXj6IBLEKIAHAHIAHATIAEAIIAJAGIAHAIIgEALIAJALIgBAEIgKAOIAAARIgGAPIABAXIANAcIgCAgIANAUIADAOIAKAKIgBAIIAHAKIElgSIAEAOIAEAGIAQACIADgPIgJgcIABgKIADgFIAIgGIAWAKIATABIAJgDIgDgVIgEgLIAAgNIACgLIAPgsIADgTIAQgkIAJgJIAFgCIACgGIgIgCIAAgDIgUgBIgEgDIgEgGIgGgaIgNgQIgQgGIgIgbIgLgMIgFgOIgbgLIgLgOIgMgIIgBgHIgGgNIgEgEIgRgGIgigfIgPgFIgEgKIgOgMIgKgUIgKgKIgEgHIgUgEIgcgOIgJgIIAKgVIAHgGIAFgHIABgFIgBgCg");
	this.shape_4.setTransform(28.1,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ACjEbIgEgGIgEgOIklASIgHgKIABgIIgKgKIgDgOIgNgUIACggIgNgcIgBgXIAGgPIAAgRIAKgOIABgEIgJgLIAEgLIgHgIIgJgGIgEgIIgHgTIgHgHIhLkKIEEgiIABACIgBAFIgFAHIgHAGIgKAVIAJAIIAcAOIAUAEIAEAHIAKAKIAKAUIAOAMIAEAKIAPAFIAiAfIARAGIAEAEIAGANIABAHIAMAIIALAOIAbALIAFAOIALAMIAIAbIAQAGIANAQIAGAaIAEAGIAEADIAUABIAAADIAIACIgCAGIgFACIgJAJIgQAkIgDATIgPAsIgCALIAAANIAEALIADAVIgJADIgTgBIgWgKIgIAGIgDAFIgBAKIAJAcIgDAPg");
	this.shape_5.setTransform(28.1,28.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.2,59.2);



(lib.deSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AA3BKIgCgMIgHgSIgMgMIgSgMIgGgIIgWgoIgMgNIgEgJIgBgIIABgBIAAgEIAGgXIgIgCIgLABIgJAJIgBAIIgDACIgBABIAwCbg");
	this.shape.setTransform(5.6,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("Ag2hDIABgBIACgCIABgIIAJgJIAMAAIAHABIgFAYIAAADIgBABIABAIIADAJIAMAOIAWAnIAGAIIATANIALAMIAIASIABALIg+APg");
	this.shape_1.setTransform(5.6,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,13.2,19.8);


(lib.de = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgPAWIAAgrIAeAAIAAAGIgYAAIAAANIAXAAIAAADIgXAAIAAAPIAZAAIAAAGg");
	this.shape.setTransform(20.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgPAWIAAgrIAeAAIAAAGIgYAAIAAANIAXAAIAAADIgXAAIAAAPIAZAAIAAAGg");
	this.shape_1.setTransform(20.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgRAWIAAgrIAPAAQAFAAABABQADAAAEADQAEAEABAEQACAEAAAFQAAAFgBADQgBAEgCADIgEAEIgGACIgFABgAgLAQIAOAAIAFgDQACgEABgBQABgDAAgFQAAgGgCgEQgCgDgEgCQgCAAgEAAIgJAAg");
	this.shape_2.setTransform(16.2,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgRAWIAAgrIAPAAIAGABQADAAAEADQAEAEABAEQACAEAAAFQAAAFgCADQAAAEgDADIgDAEIgGACIgFABgAgMAQIAPAAIAEgDIAEgFIABgIQAAgGgCgEQgCgDgEgCIgGAAIgKAAg");
	this.shape_3.setTransform(16.2,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AA3BKIgCgMIgHgSIgMgMIgSgMIgGgIIgWgoIgMgNIgEgJIgBgIIABgBIAAgEIAGgXIgIgCIgLABIgJAJIgBAIIgDACIgBABIAwCbg");
	this.shape_4.setTransform(5.6,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("Ag3hDIABgBIADgCIACgIIAJgJIALgBIAIACIgGAYIAAADIgBABIABAIIADAJIAMAOIAWAnIAGAIIASANIAMAMIAHASIACALIg+APg");
	this.shape_5.setTransform(5.6,8.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,24.2,22.8);


(lib.dcSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQgEIAQgOIARAWIgUAPg");
	this.shape.setTransform(2.2,2.4,1.205,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgQgEIAQgOIARAWIgTAPg");
	this.shape_1.setTransform(2.1,2.4,1.205,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgQgEIAQgOIARAWIgUAPg");
	this.shape_2.setTransform(42.2,20.9,1.205,1.201);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgQgEIAQgOIARAWIgTAPg");
	this.shape_3.setTransform(42.2,20.9,1.205,1.201);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,46.3,25.3);


(lib.dc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AANAGIAGABQgDAIgEADQgFAEgHAAQgFAAgFgCQgEgEgDgFQgCgGAAgFQAAgGADgFQACgFAFgDQAGgDADAAQAHAAAEAEQAFADACAGIgGACQgCgFgDgCQgCgDgFAAQgDAAgEADQgDACgCAEIgBAIQAAAFACAEQABADAEADQAFACABAAQAFAAADgCQADgEACgFg");
	this.shape.setTransform(45.7,20.7,1.205,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgJATQgEgDgDgFQgCgGAAgFQAAgFACgGQADgFAFgCQAGgDADAAQAHAAAEADQAFADABAHIgFABQgCgFgDgCQgDgCgEgBQgDABgEACQgEADgBADIgBAIQAAAEACAFQABAEADADIAGABQAFAAAEgCQADgDABgGIAGABQgCAIgFADQgFAFgGAAQgFAAgFgEg");
	this.shape_1.setTransform(45.6,20.7,1.205,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgLAQIAJAAIAFgBIAEgCQACgCACgEIABgHQAAgGgCgEQgCgDgEgCIgGgBIgJAAgAgRAVIAAgqIAPAAQAFAAABABQAFABACACQAEADABAEQACAHAAADQAAAEgBAEQgBAEgCACQgBACgDACIgGADg");
	this.shape_2.setTransform(40.2,20.7,1.205,1.201);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgRgUIAPAAIAGAAQAFABACACQAEAEABAEIACAJQAAAEgBAEQgBAEgCADIgEADIgGADIgVABgAgLAQIAJAAIAFAAIAEgCIAEgHIABgHQAAgGgCgDQgCgEgEgCIgGgBIgJAAg");
	this.shape_3.setTransform(40.2,20.7,1.205,1.201);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgQgEIAQgOIARAWIgUAPg");
	this.shape_4.setTransform(50.9,25.1,1.205,1.201);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgQgEIAQgOIARAWIgTAPg");
	this.shape_5.setTransform(50.9,25.1,1.205,1.201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AgQgEIAQgOIARAWIgUAPg");
	this.shape_6.setTransform(10.7,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("AgQgEIAQgOIARAWIgUAPg");
	this.shape_7.setTransform(10.7,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A171B").p("AB4A6Ijvhz");
	this.shape_8.setTransform(23.8,12.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,3,46.1,25.5);


(lib.ctSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AhWgwIA6gOIAGAGIACgBIABgFIBVgWIAVBHIgFALIACAEIgLACIgdAMIgIgBIgDADIAAAFIgDABIgRADIgXALIgDgEIgOAQIghAcIgNAHIgKgKIAPgQIABgHIgHgIg");
	this.shape.setTransform(8.8,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AhTBLIAPgQIABgHIgHgIIgMhcIA6gOIAGAGIACgBIABgFIBVgWIAVBHIgFALIACAEIgLACIgdAMIgIgBIgDADIAAAFIgDABIgRADIgXALIgDgEIgOAQIghAcIgNAHg");
	this.shape_1.setTransform(8.8,8.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.6,19.1);


(lib.ct = function() {
	this.initialize();

	// buttonCt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgCAWIAAgmIgOAAIAAgFIAhAAIAAAFIgPAAIAAAmg");
	this.shape.setTransform(13.5,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgCAWIAAgmIgOAAIAAgFIAhAAIAAAFIgPAAIAAAmg");
	this.shape_1.setTransform(13.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AANAGIAGACQgDAIgEADQgEADgIAAQgFAAgFgDQgFgDgCgFQgCgGAAgFQAAgGADgFQACgGAFgCQAFgCAEAAQAHAAAEADQAFADACAGIgGACQgCgFgDgCQgCgCgFAAQgDAAgEACQgEAEgBADIgBAHQAAAFACAEQABADAEADQADACADAAQAFAAADgDQADgCACgGg");
	this.shape_2.setTransform(9.4,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJATQgFgDgCgFQgDgGAAgFQABgGADgFQACgGAFgCQAEgCAFAAQAGAAAFADQAFADACAGIgHACQgBgFgDgCQgDgCgEAAQgEAAgDACQgEAEgBADIgBAHQAAAFABAEQACADAEADQADACADAAQAEAAAEgDQADgCABgGIAHACQgDAIgFADQgDADgIAAQgGAAgEgDg");
	this.shape_3.setTransform(9.4,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AhWgwIA6gOIAGAGIACgBIABgFIBVgWIAVBHIgFALIACAEIgLACIgdAMIgIgBIgDADIAAAFIgDABIgRADIgXALIgDgEIgOAQIghAcIgNAHIgKgKIAPgQIABgHIgHgIg");
	this.shape_4.setTransform(8.8,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AhTBLIAPgQIABgHIgHgIIgMhcIA6gOIAGAGIACgBIABgFIBVgWIAVBHIgFALIACAEIgLACIgdAMIgIgBIgDADIAAAFIgDABIgRADIgXALIgDgEIgOAQIghAcIgNAHg");
	this.shape_5.setTransform(8.8,8.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.6,19.1);


(lib.coSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AlzDYIBGn5IHfAzIDCAQIgfIAIhkgGg");
	this.shape.setTransform(38.2,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("ADxEcIpkhEIBGn5IHfAzIDCAQIgfIAg");
	this.shape_1.setTransform(38.2,29.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,76.5,60.2);


(lib.co = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgOAAQAAAIAFAFQAEAEAFAAQAGAAAFgEQAEgFAAgIQAAgEgCgEQgCgEgDgCQgEgDgEAAQgFAAgEAFQgFAEAAAIgAgUAAQAAgJAGgGQAGgHAIAAQAGAAAFADQAEADAEAFQACAGAAAFQAAAGgDAFQgCAFgFAEQgGACgFAAQgEAAgGgCQgFgEgCgFQgDgGAAgFg");
	this.shape.setTransform(39.6,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgKAUQgFgEgCgFQgDgGAAgFQAAgJAGgGQAGgGAIgBQAGAAAEAEQAFACADAFQADAGAAAFQAAAGgDAFQgCAFgGAEQgGACgEAAQgEAAgGgCgAgJgMQgFAFAAAHQAAAIAFAFQAEAEAFABQAGgBAEgEQAFgFAAgIQAAgDgCgFQgCgEgDgCQgEgDgEABQgFgBgEAFg");
	this.shape_1.setTransform(39.6,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AANAGIAGABQgDAIgEADQgFAEgHAAQgFAAgFgCQgFgEgCgFQgCgFAAgGQAAgHADgEQACgFAFgDQAGgDADAAQAGAAAGAEQAEAEACAFIgGACQgBgFgDgCQgEgDgEAAQgDAAgEADQgEAEAAACIgCAIQAAAFACAEQABAEAEACQADACADAAQAFAAADgCQADgEACgFg");
	this.shape_2.setTransform(35,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJAUQgFgEgCgFQgCgFAAgGQAAgHACgEQACgFAGgCQAFgEAEAAQAFABAGADQAFAEABAGIgFABQgCgEgDgDQgDgDgEABQgDgBgEADQgEAEgBADIgBAHQAAAGABADQACAEAEADQACACADAAQAFAAAEgEQADgDABgFIAGACQgCAHgFAEQgFADgGAAQgGAAgEgCg");
	this.shape_3.setTransform(34.9,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AlzDYIBGn5IHfAzIDCAQIgfIAIhkgGg");
	this.shape_4.setTransform(37.2,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("ADxEcIpkhEIBGn5IHfAzIDCAQIgfIAg");
	this.shape_5.setTransform(37.2,29.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,76.5,60.2);


(lib.caSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgJgIIAUAMIgIgPg");
	this.shape.setTransform(20,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgJgEIALgDIAIAPg");
	this.shape_1.setTransform(20.1,108.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgHAPIAUgEIgcgSg");
	this.shape_2.setTransform(24.5,108.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgNgLIAbATIgTAEg");
	this.shape_3.setTransform(24.3,108.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AADAjIALAAIgUgkg");
	this.shape_4.setTransform(33.4,124.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AAAATIgJglIATAlg");
	this.shape_5.setTransform(33.8,126.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AGXHyIgGgIIgGgEIgEgPIgEgJIAAgMIgIgQIABgFIgBgHIABgSImlpkIBfl5Il+hoIgFAHIgHARIAHAQIgDAjIgJAPIgIAHIgEAQIAAAIIgkAoIgNAVIABANIgDAFIACAQIAEAMIAGAFIADAHIABAHIAMAbIADAbIgDAHIgJAOIgIAcIAFAWIgIANIAXA4IAUAWIAAAuIgHAOIAPAGIAPAVIAOAFIAEgGIAAgHIALgLIADABIgCASIACAOIAHAXIgBAMIgDAEIgPgLIgCgFIAAgQIgEgIIgEACIgDAUIgFACIACALIgDAGIgBAqIAGAPIAQAOIAQAHIAHAHIgCAUIgLAMIgGACIgGAGIgCAgIAWAgIACAMIAGAMIACAPIAgA3IAMAKIgBANIgDAAIgDAEIABAOIAMAGIAEAQIgDAGIgHAkIgHAJIAAAKIAMALIATANIAPAAIAvAVIAQADIAQAMIALAcIASAQIAPAGIAaADIAJAKIgBAHIAEAIIgFAMIAIAJIAQgBIAWAWIALATIAMAMIAWAtIABApIgBAEIAEALIACAAIADAEIgCABIgDAHIADAMIACAEID5AYIAVAEIAJgJIADgIIAEgGIgCgFIgPgMIgEgIIAFgQIABgHIgDgJIABgHIAMAAIAUgaIAIgjIALgPIAPgFIANgLIAEADIACgEg");
	this.shape_6.setTransform(41,69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("AEwKuIj5gYIgCgEIgDgMIADgHIACgBIgDgEIgCAAIgEgLIABgEIgBgpIgWgtIgMgMIgLgTIgWgWIgQABIgIgJIAFgMIgEgIIABgHIgJgKIgagDIgPgGIgSgQIgLgcIgQgMIgQgDIgvgVIgPAAIgTgNIgMgLIAAgKIAHgJIAHgkIADgGIgEgQIgMgGIgBgOIADgEIADAAIABgNIgMgKIggg3IgCgPIgGgMIgCgMIgWggIACggIAGgGIAGgCIALgMIACgUIgHgHIgQgHIgQgOIgGgPIABgqIADgGIgCgLIAFgCIADgUIAEgCIAEAIIAAAQIACAFIAPALIADgEIABgMIgHgXIgCgOIACgSIgDgBIgLALIAAAHIgEAGIgOgFIgPgVIgPgGIAHgOIAAguIgUgWIgXg4IAIgNIgFgWIAIgcIAJgOIADgHIgDgbIgMgbIgBgHIgDgHIgGgFIgEgMIgCgQIADgFIgBgNIANgVIAkgoIAAgIIAEgQIAIgHIAJgPIADgjIgHgQIAHgRIAFgHIF+BoIhfF5IGlJkIgBASIABAHIgBAFIAIAQIAAAMIAEAJIAEAPIAGAEIAGAIIACAMIgCAEIgEgDIgNALIgPAFIgLAPIgIAjIgUAaIgMAAIgBAHIADAJIgBAHIgFAQIAEAIIAPAMIACAFIgEAGIgDAIIgJAJg");
	this.shape_7.setTransform(41,69);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,140.1);


(lib.ca = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgHAGIANAAIgGgTgAgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANg");
	this.shape.setTransform(42.7,82.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAVIgGgMIgQAAIgFAMIgGAAIARgqIAEAAIASAqgAgHADIAOAAIgHgTg");
	this.shape_1.setTransform(42.7,83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AANAGIAGABQgCAHgFAEQgFAEgHAAQgFAAgEgCQgFgEgCgFQgDgGAAgFQAAgFADgGQADgGAFgCQAEgDAEAAQAHAAAFAEQAEADACAGIgGACQgBgFgDgCQgEgDgEAAQgDAAgDADQgEADgBADIgCAIQAAAFACAEQACAEADACQAEACACAAQAFAAADgCQAEgEABgFg");
	this.shape_2.setTransform(38.4,83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AgJAUQgFgDgCgGQgCgGAAgFQAAgFACgGQADgGAFgBQAFgEAEAAQAGABAFADQAFADACAHIgGABQgCgEgDgDQgDgDgEABQgDgBgEADQgDADgCAEIgBAHQAAAGACADQABAEAEADQADACACAAQAFAAAEgEQAEgDAAgFIAGACQgBAGgFAFQgGADgGAAQgFAAgFgCg");
	this.shape_3.setTransform(38.3,83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AgJgIIAUAMIgIgPg");
	this.shape_4.setTransform(20,108.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AgJgEIALgDIAIAPg");
	this.shape_5.setTransform(20.1,108.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").ss(0.5).p("AgHAPIAUgEIgcgSg");
	this.shape_6.setTransform(24.5,108.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#417BAA").s().p("AgNgLIAbATIgTAEg");
	this.shape_7.setTransform(24.3,108.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A171B").ss(0.5).p("AADAjIALAAIgUgkg");
	this.shape_8.setTransform(33.4,124.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#417BAA").s().p("AAAATIgJglIATAlg");
	this.shape_9.setTransform(33.8,126.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1A171B").ss(0.5).p("AGXHyIgGgIIgGgEIgEgPIgEgJIAAgMIgIgQIABgFIgBgHIABgSImlpkIBfl5Il+hoIgFAHIgHARIAHAQIgDAjIgJAPIgIAHIgEAQIAAAIIgkAoIgNAVIABANIgDAFIACAQIAEAMIAGAFIADAHIABAHIAMAbIADAbIgDAHIgJAOIgIAcIAFAWIgIANIAXA4IAUAWIAAAuIgHAOIAPAGIAPAVIAOAFIAEgGIAAgHIALgLIADABIgCASIACAOIAHAXIgBAMIgDAEIgPgLIgCgFIAAgQIgEgIIgEACIgDAUIgFACIACALIgDAGIgBAqIAGAPIAQAOIAQAHIAHAHIgCAUIgLAMIgGACIgGAGIgCAgIAWAgIACAMIAGAMIACAPIAgA3IAMAKIgBANIgDAAIgDAEIABAOIAMAGIAEAQIgDAGIgHAkIgHAJIAAAKIAMALIATANIAPAAIAvAVIAQADIAQAMIALAcIASAQIAPAGIAaADIAJAKIgBAHIAEAIIgFAMIAIAJIAQgBIAWAWIALATIAMAMIAWAtIABApIgBAEIAEALIACAAIADAEIgCABIgDAHIADAMIACAEID5AYIAVAEIAJgJIADgIIAEgGIgCgFIgPgMIgEgIIAFgQIABgHIgDgJIABgHIAMAAIAUgaIAIgjIALgPIAPgFIANgLIAEADIACgEg");
	this.shape_10.setTransform(41,69);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#417BAA").s().p("AEwKuIj5gYIgCgEIgDgMIADgHIACgBIgDgEIgCAAIgEgLIABgEIgBgpIgWgtIgMgMIgLgTIgWgWIgQABIgIgJIAFgMIgEgIIABgHIgJgKIgagDIgPgGIgSgQIgLgcIgQgMIgQgDIgvgVIgPAAIgTgNIgMgLIAAgKIAHgJIAHgkIADgGIgEgQIgMgGIgBgOIADgEIADAAIABgNIgMgKIggg3IgCgPIgGgMIgCgMIgWggIACggIAGgGIAGgCIALgMIACgUIgHgHIgQgHIgQgOIgGgPIABgqIADgGIgCgLIAFgCIADgUIAEgCIAEAIIAAAQIACAFIAPALIADgEIABgMIgHgXIgCgOIACgSIgDgBIgLALIAAAHIgEAGIgOgFIgPgVIgPgGIAHgOIAAguIgUgWIgXg4IAIgNIgFgWIAIgcIAJgOIADgHIgDgbIgMgbIgBgHIgDgHIgGgFIgEgMIgCgQIADgFIgBgNIANgVIAkgoIAAgIIAEgQIAIgHIAJgPIADgjIgHgQIAHgRIAFgHIF+BoIhfF5IGlJkIgBASIABAHIgBAFIAIAQIAAAMIAEAJIAEAPIAGAEIAGAIIACAMIgCAEIgEgDIgNALIgPAFIgLAPIgIAjIgUAaIgMAAIgBAHIADAJIgBAHIgFAQIAEAIIAPAMIACAFIgEAGIgDAIIgJAJg");
	this.shape_11.setTransform(41,69);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,140.1);


(lib.azSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AD2GOIBnrNIn6hPIgNBCIgTA2IgLAAIgIgIIABgEIgHgJIgUgFIgPADIgFAGIAEAYIgGA9IAFAJIgJAaIgFAJIABAGIgBASIABAHIgBAFIAJAQIAAAMIAEAJIAEAPIAGAEIAGAIIACAMIgCAEIgEgDIgNALIgQAFIgLAPIgIAhIgUAaIgLAAIgBAHIADAJIgBAHIgFAQIAEAIIAOAMIACAFIgEAGIgCAIIgJAJIgVgEIgIAeIF1DVIDcAkg");
	this.shape.setTransform(34.9,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAaFrIl2jVIAJgeIAUAEIAJgJIADgIIAEgGIgCgFIgPgMIgDgIIAEgQIABgHIgCgJIAAgHIAMAAIAUgaIAIghIALgPIAPgFIAOgLIADADIADgEIgDgMIgFgIIgHgEIgDgPIgFgJIAAgMIgIgQIABgFIgBgHIABgSIgBgGIAFgJIAJgaIgGgJIAHg9IgFgYIAGgGIAPgDIAUAFIAHAJIgBAEIAIAIIALAAIATg2IAMhCIH7BPIhoLNIAAABg");
	this.shape_1.setTransform(34.9,40);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.8,82);


(lib.az = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgQAWIAAgGIAZgfIgXAAIAAgGIAeAAIAAAGIgZAfIAaAAIAAAGg");
	this.shape.setTransform(46.5,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgQAWIAAgGIAZgfIgXAAIAAgGIAeAAIAAAGIgZAfIAaAAIAAAGg");
	this.shape_1.setTransform(46.5,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAbIARgrIAFAAIASArIgHAAIgFgOIgRAAIgFAOgAgHAIIANAAIgGgTQgBAGgBACg");
	this.shape_2.setTransform(42.5,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAOAWIgGgOIgRAAIgEAOIgHAAIASgrIAEAAIATArgAgCgIIgFALIANAAIgGgTIgCAIg");
	this.shape_3.setTransform(42.5,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AD2GOIBnrNIn6hPIgNBCIgTA2IgLAAIgIgIIABgEIgHgJIgUgFIgPADIgFAGIAEAYIgGA9IAFAJIgJAaIgFAJIABAGIgBASIABAHIgBAFIAJAQIAAAMIAEAJIAEAPIAGAEIAGAIIACAMIgCAEIgEgDIgNALIgQAFIgLAPIgIAhIgUAaIgLAAIgBAHIADAJIgBAHIgFAQIAEAIIAOAMIACAFIgEAGIgCAIIgJAJIgVgEIgIAeIF1DVIDcAkg");
	this.shape_4.setTransform(34.9,40);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AAaFrIl2jVIAIgeIAVAEIAJgJIADgIIAEgGIgCgFIgPgMIgDgIIAEgQIABgHIgDgJIABgHIAMAAIAUgaIAIghIALgPIAQgFIANgLIADADIADgEIgDgMIgFgIIgHgEIgDgPIgFgJIAAgMIgIgQIABgFIgBgHIABgSIgBgGIAFgJIAJgaIgGgJIAHg9IgFgYIAFgGIAQgDIAUAFIAHAJIgBAEIAIAIIALAAIATg2IAMhCIH7BPIhoLNIAAABg");
	this.shape_5.setTransform(34.9,40);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.8,82);


(lib.arSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AkAjSIHIgUIgCAFIAKAHIAEALIgCAKIgOALIgMAOIgBAJIBGgFIgEAGIACAGIgEALIgNAOIgFAaIgOARIACASIgBAWIgEACIgLAKIgBAHIgUASIgHARIACAVIgDALIgTAMIgSAYIAAARIgKALIAAANIgGARIgLARIAFATIAJAKIABANIAEAEIAAAFIgGAEIgCALIAAAHIk1AJIAAhDIgQgEIgOAGIgFgBIgQgMIADjfg");
	this.shape.setTransform(25.8,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("Ai8CjIgPgDIgPAGIgFgCIgQgMIADjeIgSiMIHJgUIgCAFIAKAHIADALIgBAKIgPALIgMAOIgBAJIBGgFIgEAGIACAGIgEALIgNAOIgFAaIgNARIACASIgBAWIgFACIgLAKIAAAHIgUASIgIARIACAUIgDALIgTANIgSAXIAAARIgJALIAAAOIgGARIgLARIAEATIAJAKIABANIAFAEIAAAFIgHAEIgBALIAAAHIk2AJg");
	this.shape_1.setTransform(25.6,23.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.1,48.3);


(lib.ar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAVIAAgpIAUAAQADAAAEABQACABADADQACAEAAACQAAAFgEAEQgDABgGAAIAEADIAEAGIAIALIgHAAIgKgPIgBgCIgDgCIgKAAIAAATgAgOgBIAMAAIAFgBQABAAACgCQABgCAAgDQAAgDgCgCQgCgBgDAAIgOAAg");
	this.shape.setTransform(27.1,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAMAVIgKgPIgCgDIgCgBIgKAAIAAATIgGAAIAAgqIASAAIAJABIAFAFIACAHQAAAEgEADQgDACgGABIAEACIAEAGIAIALgAgMgBIAMAAIAFgBIADgCIABgEQAAgEgCgCQgCgBgFAAIgMAAg");
	this.shape_1.setTransform(26.9,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgTg");
	this.shape_2.setTransform(22.3,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAOAVIgGgMIgQAAIgFAMIgGAAIARgqIAEAAIASAqgAgHADIAOAAIgHgTg");
	this.shape_3.setTransform(22.3,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AkAjSIHIgUIgCAFIAKAHIAEALIgCAKIgOALIgMAOIgBAJIBGgFIgEAGIACAGIgEALIgNAOIgFAaIgOARIACASIgBAWIgEACIgLAKIgBAHIgUASIgHARIACAVIgDALIgTAMIgSAYIAAARIgKALIAAANIgGARIgLARIAFATIAJAKIABANIAEAEIAAAFIgGAEIgCALIAAAHIk1AJIAAhDIgQgEIgOAGIgFgBIgQgMIADjfg");
	this.shape_4.setTransform(25.8,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("Ai8CjIgPgDIgPAGIgFgCIgQgMIADjeIgSiMIHJgUIgCAFIAKAHIADALIgBAKIgPALIgMAOIgBAJIBGgFIgEAGIACAGIgEALIgNAOIgFAaIgNARIACASIgBAWIgFACIgLAKIAAAHIgUASIgIARIACAUIgDALIgTANIgSAXIAAARIgJALIAAAOIgGARIgLARIAEATIAJAKIABANIAFAEIAAAFIgHAEIgBALIAAAHIk2AJg");
	this.shape_5.setTransform(25.6,23.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.1,48.3);


(lib.alSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AjCkdIALALIgJF1IAaDPIALgIIARAGIAEgIIADgbIAHgTIALATIgBAHIAFAPIAMARIAMABIAJgBIANgOIADgBIAGgFIAAgDIgCgDIgGgDIAAgDIAFgMIgCgEIgIgHIgDAAIgGgFIgIgMIgBgJIADgDIgBgDIAAgFIEagcIgCgIIgNgUIACggIgNgcIgBgXIAGgPIAAgRIAKgOIABgEIgJgLIAEgLIgHgGIgJgGIgEgIIgGgTIgHgHIhMkMg");
	this.shape.setTransform(19.5,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AhjE1IgMgRIgFgPIABgHIgLgTIgHATIgDAbIgEAIIgRgGIgLAIIgajQIAJl1IgLgLIENgYIBLEMIAIAHIAGATIAEAIIAJAGIAHAGIgEALIAJALIgBAEIgKAOIAAARIgGAPIABAXIANAcIgCAhIANAUIACAIIkaAcIAAAFIABADIgDADIABAJIAIAMIAFAFIAEAAIAHAHIADAEIgGAMIAAADIAHADIABADIAAADIgGAFIgCABIgNAOIgJABg");
	this.shape_1.setTransform(19.8,33);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,1,41.5,64.1);


(lib.al = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgMAWIAAgrIAGAAIAAAlIAUAAIAAAGg");
	this.shape.setTransform(22.8,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AgMAWIAAgrIAFAAIAAAlIAVAAIAAAGg");
	this.shape_1.setTransform(22.8,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANgAgHAGIAOAAIgHgUg");
	this.shape_2.setTransform(18.8,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAOAWIgGgOIgQAAIgFAOIgHAAIASgrIAFAAIASArgAgGADIANAAIgHgTg");
	this.shape_3.setTransform(18.8,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AjCkdIALALIgJF1IAaDPIALgIIARAGIAEgIIADgbIAHgTIALATIgBAHIAFAPIAMARIAMABIAJgBIANgOIADgBIAGgFIAAgDIgCgDIgGgDIAAgDIAFgMIgCgEIgIgHIgDAAIgGgFIgIgMIgBgJIADgDIgBgDIAAgFIEagcIgCgIIgNgUIACggIgNgcIgBgXIAGgPIAAgRIAKgOIABgEIgJgLIAEgLIgHgGIgJgGIgEgIIgGgTIgHgHIhMkMg");
	this.shape_4.setTransform(19.5,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AhjE1IgMgRIgFgPIABgHIgLgTIgHATIgDAbIgEAIIgRgGIgLAIIgajQIAJl1IgLgLIENgYIBLEMIAIAHIAGATIAEAIIAJAGIAHAGIgEALIAJALIgBAEIgKAOIAAARIgGAPIABAXIANAcIgCAhIANAUIACAIIkaAcIAAAFIAAADIgCADIABAJIAIAMIAFAFIAEAAIAIAHIACAEIgGAMIAAADIAHADIABADIAAADIgGAFIgDABIgMAOIgJABg");
	this.shape_5.setTransform(19.8,31);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,41.5,64.1);


(lib.akSelected = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#417BAA").s().p("AHNHSIgNgUIgGgOQgCAIgEgCIgFgFIgDgEIALgMIgJgJIAAgeIgFAAIgFAVIgHACIgJgtIgFgDIACAqIgJgIIgWglIgNgDIgEgWIgJgSIgKgHIAAgNIANgIIgDgCIgQAEIgVgPIgPgSIg2gfIAIgUIAAgKIgLAKIgSAHIgWgHIgjgPIghAAIgEADIgngXIgNgCIgRgkIgVADIgWAIIADAcIAHgSIAGACIgJAbIAUgRIAEAKIgYAaIgIgCIgDgMIgHgEIgGAGIgRgKIgTAMIgLANIgUANIgdgBIgCgNIAWgEIAAgIIgOgDIAGgPIAOgYIAAgLIABgEIAagOIAHAIIAQAAIgIgQIgWgCIgfARIgZAkIgHAOIgaAJIgSAPIgCAKIAOAGIAEANIgQATIhkA6IggAHIggAOIAKAIIgIAJIgDAHIgRgGIgUAAIgEAOIgHAAIADgOIgoANIgUgHIgSALIgUAAIgWANIgNgCIgQgHIgNAEIgGAGIgKgHIAAgMIATgIIAmAEIAbgJIAMgNIASgEIAKgFIARABIAKAIIAGgCIAOgRIAvgLIAEACIAFAAIAHgWIAZgJIAZgyIAKgJIACgQIgJAIIgVAEIgEgPIgIgCIgGAGIgBASIgJgBIgIgjIgIAIIgHgDIgCgMIgYABIgNAHIgQgCIAJgJIADgQIgEgMIAJgFIAIgCIgEgKIAAgbIgGgGIgFAJIgmAAIgIgIIgEgXIgNgWIAAgGIANgFIABgMIAHgHIgFgDIgIADIgHgPIAGgeIArgeIAMgWIARgIIAPAHIACAOIAPgCIATgOIAKAEIAGADIAKAAIAOgHIAFgbIABgJQACgKADgBIAGgHIgHgLIgkAKIgLgDIgWgLIgfgBIgVgXIADgXIAEgPIgNgLIgMgWIADgFIA2gDIAGAGIAEAAIgBgKIAXgEIAQACIAJAHIgJANIgDAJIARAJIAeALIALgGIgOgaIgGgUIAGgFIgUgMIgDgGIADgKIgFgYIggg2IARgMIAUAAIAKAEIAagBIAXgVIAGgTIAXgPIAKAGIARgEIAWgNIAHAAIAGAEIAbAAIARgTIAHAAIAWAPIAMAMIgEAHIAEAHIAKgKIAYACIACAXIAJAJIAsAEIAmAZIAJgGIAfAQIAZgJIAdAMIAbARIgCIFIAKAGIASABIAJgHIAQAAIABARIAqAqIACAPIAVgMIAEAAIACgTIAJgKIAHgBIAMgJIASANIAEASIAMAHIAHAOIAXALIAVAkIAeApIAJAWIA+AYIAJAtIgGAUIgLAOIgKgFIgIgSIgcgQIgFAFIAJARIABAWIgHADIgMgMIgNgHIAEAJIAHALIgEAFQgGgCgCgEg");
	this.shape.setTransform(55.2,47.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,94.6);


(lib.ak = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgUAWIAAgqIAGAAIAAAUIAUgUIAIAAIgRASIASAYIgIAAIgOgWIgHAHIAAAPg");
	this.shape.setTransform(72.2,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAKAVIgOgVIgHAHIAAAOIgGAAIAAgqIAGAAIAAAVIAUgVIAIAAIgRASIASAYg");
	this.shape_1.setTransform(71.9,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAbIARgrIAFAAIASArIgHAAIgFgOIgRAAIgFAOgAgHAIIANAAIgGgTQgBAGgBACg");
	this.shape_2.setTransform(67.3,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAOAWIgGgOIgRAAIgEAOIgHAAIASgrIAEAAIATArgAgCgIIgFALIANAAIgGgTIgCAIg");
	this.shape_3.setTransform(67.3,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").ss(0.5).p("AHdo8IgDNUIAQAKIAfABIAOgLIAaAAIACAdIBFBEIAFAaIAigUIAGgBIADgfIAPgQIALgCIAUgOIAeAVIAHAdIATALIAMAYIAmASIAiA8IAyBCIAPAlIBmAnIAOBLIgJAhIgSAXIgQgIIgPgfIgtgaIgIAJIAOAbIACAlIgLAFIgUgTIgVgNIAFAQIANASIgIAIQgIgDgFgHIgVgiIgKgXQgDANgGgDQgEgCgFgGIgEgGIASgUIgPgOIAAgyIgIAAIgIAiIgMAEIgQhKIgIgFIADBEIgOgNIgkg8IgVgFIgGglIgQgdIgQgLIAAgXIAVgNIgFgDIgaAHIgigZIgagdIhYg0IANggIAAgQIgSAQIgdALIgmgLIg4gYIg3AAIgHAFIhAgnIgVgDIgcg7IgjAEIgkAOIAFAuIALgeIAKAEIgPArIAhgbIAGAQIgnAsIgMgEIgFgTIgNgIIgNALIgcgSIgeAVIgSAVIgiAWIgtgCIgFgVIAjgHIAAgNIgUgGIAJgYIAVgnIAAgSIACgIIArgXIAKANIAbAAIgMgZIgmgEIgwAcIgqA8IgLAWIgqAPIgfAaIgDAQIAXAKIAIAVIgcAgIhAAqIhjA1Ig1AMIg2AWIASANIgPAPIgEALIgcgKIggACIgIAXIgKAAIADgZIhAAXIgigNIgdATIghAAIglAVIgVgDIgagLIgXAGIgJAKIgQgLIAAgUIAegNIA/AHIAsgQIAVgVIAdgHIASgIIAbACIARANIAJgEIAXgbIBOgTIAGAEIAIAAIANglIAogOIAqhTIARgOIADgaIgQANIgiAGIgHgYIgNgDIgJAJIgCAeIgPgCIgOg6IgNANIgLgFIgEgUIgoACIgVALIgagDIAPgOIAFgaIgHgUIAPgJIANgCIgHgSIAAgsIgKgJIgIAOIg9AAIgPgNIgGgmIgVgkIAAgKIAVgIIACgVIALgLIgIgFIgNAFIgMgaIAKgyIBHgwIAUglIAbgNIAaALIADAYIAZgDIAggYIAQAGIAKAHIAQAAIAXgNIAIgsQABgHABgIQADgQAEgDIAKgKIgLgTIg6AQIgUgFIgjgRIgzgCIgjglIAFgnIAGgYIgVgSIgTglIAFgIIBYgFIAKAKIAHAAIgCgRIAngGIAaADIAOAMIgOAVIgFAOIAbAQIAyASIASgKIgWgrIgKghIAKgIIgigTIgFgLIAFgRIgIgmIg2hZIAdgUIAhAAIARAHIAqgCIAmgjIALgfIAlgYIAQAJIAcgGIAlgVIALgCIAKAIIAtgBIAbgfIAKAAIAkAYIATAVIgFAMIAHALIAQgQIAnADIADAlIATAPIBHAGIA/AqIAPgKIA0AaIAogOIAxATgAqgkaIAVA1IgBAKIgdgEIgSgoIgSgPIgYAAIgCgZIASgZIALAZIAPAOgAq6AyIBLASIAIAKIgQAlIgfgCIgigjgAuJhYIAMAZIALARIgLAIIgVgfIAAgTgAwSKAIAigWIAigKIAaADIAFAQIATAFIATgTIgDgQIAcgHIAdAaIgMASIgrALIgcgFIglgLIgrAPIgRADgAooJTIAQATIAVgQIgOgNgAoLJyIALgXIAVADIgIAUgAjIHiIAMA6IAdAIIBdg3IgQgYIAFgYIgVANIgdgIIAQgMIAUAIIAmgRIAFgPIgYgIIAIgTIhKA2IgxAegAkfJeIAPASIAJgLIgIgUgADeEbIAYgOIgKgSIgRAJg");
	this.shape_4.setTransform(63.3,47.3,0.607,0.607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#417BAA").s().p("AN/MBIgVgiIgKgYQgDAOgHgEQgDgCgGgGIgDgGIASgTIgQgPIAAgyIgIAAIgIAiIgLAFIgQhLIgIgFIADBFIgPgOIgjg8IgVgEIgHglIgQgdIgPgMIAAgWIAUgOIgFgCIgZAGIgigZIgagcIhZg1IAOggIAAgQIgSAQIgeAMIglgMIg4gYIg3AAIgHAFIhAgnIgVgDIgcg7IgjAEIgkAOIAEAuIAMgdIAKADIgPArIAggbIAHAQIgnAsIgNgEIgEgTIgOgIIgNAMIgbgSIgeAVIgSAUIgiAWIgtgCIgFgVIAlgHIAAgMIgWgHIAJgYIAVgnIAAgSIABgIIAsgWIAKAMIAbAAIgNgZIglgEIgwAcIgqA8IgMAWIgpAPIgfAaIgDAQIAWAKIAIAVIgbAgIhBAqIhjA1Ig1AMIg1AXIARAMIgOAPIgFALIgbgKIghACIgHAXIgLAAIAEgZIhAAXIgigNIgdATIghAAIglAWIgVgEIgagLIgXAHIgKAKIgQgMIAAgUIAfgMIA/AGIAsgQIAVgVIAdgGIARgIIAcABIAQANIAKgEIAXgbIBNgTIAHAFIAIAAIAMgmIApgOIAqhSIAQgPIAEgaIgQANIgjAGIgGgYIgNgDIgJAJIgCAeIgPgCIgPg6IgMANIgLgFIgEgTIgoACIgVAKIgagCIAOgPIAGgaIgHgUIAPgJIAMgCIgGgRIAAgtIgKgJIgIAPIg9AAIgPgOIgHgmIgUgjIAAgKIAUgIIACgVIAMgMIgIgEIgOAEIgLgaIAKgxIBHgxIATglIAcgNIAaALIADAZIAYgEIAhgYIAQAGIAKAHIAPAAIAXgNIAJgrIACgQQADgQAEgDIAKgJIgLgTIg7AQIgTgGIgkgRIgygBIgjgmIAEgnIAHgYIgVgSIgUglIAFgIIBZgFIAKAKIAHAAIgCgRIAngGIAaADIAOAMIgOAVIgGAOIAcAQIAyASIASgKIgXgrIgKggIAKgIIgigUIgEgLIAEgRIgHgmIg2hZIAdgUIAgAAIASAHIAqgBIAlgkIALgfIAmgYIAQAKIAbgHIAmgVIALgCIAKAIIAtgBIAcgfIAJAAIAjAYIAUAWIgFALIAHALIAPgQIAoADIACAlIAUAPIBHAGIA/AqIAPgJIAzAaIApgPIAwATIAsAeIgDNTIAQAKIAeACIAPgMIAaAAIACAdIBFBEIAFAaIAigTIAGgCIADgfIAPgQIALgCIAUgOIAeAVIAHAdIATAMIALAXIAnASIAiA8IAyBCIAPAlIBmAoIAOBKIgKAiIgSAWIgPgIIgPgeIgtgbIgJAJIAPAcIACAkIgLAGIgUgUIgVgNIAFAQIANASIgIAIQgIgDgFgGgAwUKAIAigWIAigKIAaADIAEAQIAUAGIATgUIgDgQIAbgGIAdAaIgLARIgsALIgbgFIglgLIgsAPIgQADgAoNJyIALgXIAVAEIgIATgAkiJfIARgOIAIAUIgJAMgAoqJTIAWgKIAPAOIgVAQgAi/IcIgLg6IANgLIAxgeIBKg2IgIATIAYAIIgFAPIgmASIgUgJIgQAMIAdAIIAVgNIgFAYIAQAYIheA3gADYEEIASgJIAKASIgYAPgAqZByIghgkIgCgbIBLASIAIAJIgQAlgAuVhFIAAgTIAKAAIAMAZIALARIgLAIgAqsjfIgSgnIgSgQIgXAAIgCgZIARgYIAMAYIAOAOIAcAHIAVA1IgCAKg");
	this.shape_5.setTransform(63.5,47.3,0.607,0.607);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,129,97.2);




(lib.meSelected = function() {
	this.initialize();

	// buttonMe
	this.me = new lib.me();
	this.me.setTransform(18.7,29.9,1,1,0,0,0,18.7,29.9);
	this.me.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.me.cache(-3,-3,44,66);
	new cjs.ButtonHelper(this.me, 0, 1, 2, false, new lib.me(), 3);

	this.addChild(this.me);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.5,61.6);


(lib.ma = function() {
	this.initialize();

	// maSelected
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").ss(0.5).p("AgHAGIAOAAIgHgUgAgUAYIASgqIAEAAIASAqIgGAAIgGgNIgQAAIgFANg");
	this.shape.setTransform(14.9,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417BAA").s().p("AAOAWIgFgOIgRAAIgFAOIgHAAIASgrIAFAAIASArgAgGADIANAAIgHgTg");
	this.shape_1.setTransform(14.9,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").ss(0.5).p("AgUAdIAAgqIAJAAIALAkIANgkIAIAAIAAAqIgFAAIAAgjIgNAjIgEAAIgNgkIAAAkg");
	this.shape_2.setTransform(10.2,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#417BAA").s().p("AAPAWIAAgkIgMAkIgEAAIgNgkIAAAkIgGAAIAAgrIAJAAIALAkIANgkIAIAAIAAArg");
	this.shape_3.setTransform(10.2,9.1);

	this.maSelected = new lib.maSelected();
	this.maSelected.setTransform(16.9,8.8,1,1,0,0,0,16.9,8.8);
	new cjs.ButtonHelper(this.maSelected, 0, 1, 1);

	this.addChild(this.maSelected,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.1,19.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;