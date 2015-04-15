/**
 * STEP 2 (Implementing the "Add Topic" button)
 * - Encode object as JSON string -> toJSON(obj)
 * - Decode JSON string into an object -> toObject(str)
 * - Stores data in the OpenSocial gadget -> addInput()
 */
 
/** Encode object as JSON string */
function toJSON(obj) { 
	return gadgets.json.stringify(obj); 
}

/** Decode JSON string into an object */
function toObject(str) {
    return gadgets.json.parse(str);
}

/** Stores data in the OpenSocial gadget */
function addInput(){
	// Getting the state
//	var state = wave.getState();
	
	// Retrieves topics from storage.
//	var jsonString = state.get('topics','[]');
//	var snapshoturl = wave.getState().get('snapshot');
	// Converts JSON to an array of topics
//	var topics = toObject(jsonString);
	
	// Push textbox value into the array and set the textbox to blank
//	topics.push(document.getElementById('textBox').value);
	
	
	// Create an array for the topic and add it to the "master" array.
//	var votes = toObject(state.get('votes','[]'));
//	votes.push(new Array());
	
	// Submit everything to storage
//	state.submitDelta({'topics' : toJSON(topics), 'votes' : toJSON(votes)});
//	state.submitDelta({'topics' : toJSON(topics)});
	document.getElementById('body').innerHTML = document.getElementById('textBox').value;
	state.submitDelta({'snapshot' : document.getElementById('textBox').value});
	document.getElementById('textBox').value = '';
	document.getElementById('body').innerHTML = 
}

/** 
 * STEP 3 (Rendering topics)
 * - Get state
 * - Retrieve topics
 * - Add topics to the canvas
 * - Create "Add topic" button to the footer
 * - Adjust window size dynamically
 */

// Renders the gadget
function renderInfo() {
    /** Get state */
    if (!wave.getState()) {
        return;
    }
  //  var state = wave.getState();
    
    /** Retrieve topics */
 //   var topics = toObject(state.get('topics','[]'));
   // var votes = toObject(state.get('votes','[]'));
    var snapshoturl = wave.getState().get('snapshot');
    var html="";
    /** Create "Add topic" button to the footer */
    html += '<input type="text" id="textBox" value=""/><button id="addInput" onclick="addInput()">Add Topic</button>';
    document.getElementById('footer').innerHTML = html;
    html='TEST';
//    document.getElementById('body').innerHTML = html;
    /** Add topics to the canvas */

//    for (var i = 0; i < topics.length; i++){
//    	var frame_name = 'topic'+i;
//    	html='<iframe width="100%" src="'+ topics[i] + '" name="'+frame_name+'" height="300"></iframe>';
//	document.getElementById('body').innerHTML = html;
//    }
    /** Adjust window size dynamically */
    gadgets.window.adjustHeight();
}

// Initializes gadget, sets callbacks
function init() {
    if (wave && wave.isInWaveContainer()) {
    	// Loads the gadget's initial state and the subsequent changes to it
        wave.setStateCallback(renderInfo);
        
        // Loads participants and any changes to them
        wave.setParticipantCallback(renderInfo);
    }
}

// Initializes gadget after receiving a notification that the page is loaded and the DOM is ready.
gadgets.util.registerOnLoadHandler(init);
