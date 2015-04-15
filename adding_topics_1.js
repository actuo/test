/**
 * STEP 2 (Implementing the "Add Topic" button)
 * - Encode object as JSON string -> toJSON(obj)
 * - Decode JSON string into an object -> toObject(str)
 * - Stores data in the OpenSocial gadget -> addInput()
 */
 

/** Stores data in the OpenSocial gadget */
function addInput(){
	// Getting the state
	var url = wave.getState().get('snapshot');
	// Push textbox value into the array and set the textbox to blank
	document.getElementById('textBox').value = '';
	
	// Create an array for the topic and add it to the "master" array.
//	var votes = toObject(state.get('votes','[]'));
//	votes.push(new Array());
	
	// Submit everything to storage
	state.submitDelta({'snapshot' :url });
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
    /** Retrieve topics */
   // var url = wave.getState().get('snapshot');
   // var votes = toObject(state.get('votes','[]'));
        
    var html="";
    /** Create "Add topic" button to the footer */
    html += '<input type="text" id="textBox" value=""/><button id="addInput" onclick="addInput()">Add Topic</button>';
    document.getElementById('footer').innerHTML = html;
    
    /** Add topics to the canvas */
//    var html = "";
//    for (var i = 0; i < topics.length; i++){
//        var id = "topic"+i;
//        html += '<iframe width="100%" src="' + topics[i] + '" name="iframe_a" height="300"></iframe>';
//    }
    document.getElementById('body').innerHTML = '<iframe width="100%" src="https://websmp201.sap-ag.de/~SAPIDP/002006825000000234912001E" name="iframe_a" height="300"></iframe>';
 //   document.getElementById('body').innerHTML = 'TESTTEST';

    
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
