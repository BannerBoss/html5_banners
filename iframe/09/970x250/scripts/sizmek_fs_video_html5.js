// ********************************************************************
//   This class is part of the  Sizmek Fullscreen HD Video HTML5 Block 
//   ALL RIGHTS RESERVED TO © 2014 Sizmek, Inc.
// ********************************************************************
// ********************************************************************

si_FS_Video_Block = function (config) {
    // Establish Method Name
    this.name = 'Fullscreen';
    // Establish Script Details
    this.script = { name: 'sizmek_fs_video_html5.js', version: '1.0.0' };
    // Establish Config Object
    this.config = config;
    // Call Init Method
    if (EB.isInitialized()) { this.init(); } else { EB.addEventListener(EBG.EventName.EB_INITIALIZED, this.init()); };
};

si_FS_Video_Block.prototype = {
    // Function That Creates Element Var
    d: function (id) { return document.getElementById(id); },
    // Function to Grab Options From Config
    fetchOptions: function () {
        // Loop through Available Options
        for (var i = 0; i < this.options.length; i++) {
            // Check to See if Options Were Included in Config File
            if (this.config.hasOwnProperty('options')) {
                // If True, Update Options from Config File
                if (this.config.options.hasOwnProperty(this.options[i].name)) {
                    this.options[i].value = this.config.options[this.options[i].name];
                };
            }
        }
    },

    // Initialize Scratch and Reveal Block
    init: function () {    
    	// Establish Default Options Array
        this.options = [
        	{ name: "div", value: 'video' },
        	{ name: "src", value: '' },
        	{ name: "typ", value: '' },
        	{ name: "controls", value: 'true' },
        	{ name: "auto", value: 'true' },
        	{ name: "poster", value: '' }
        ]; 
        // Establish Reference to all videos
        this.videos = this.config.options.vid;       
        // Check Config File for Options
        this.fetchOptions();
        // Handle Ad Setup
        this.setUpAd();
        // Handle Video Setup
        this.setUpVideo();
    },
    
    // Handle Video Setup
    setUpVideo: function () {
    	// Establish Reference to Video Div
		var div = this.d(this.options[0].value);
		// Create Video Element    	
	    var vid = document.createElement('video');
	    // Add Id to video tag
	    vid.setAttribute('id', 'si_vid');
	    // Add Controls to Video Element
	    if ( this.options[3].value.toLowerCase() == 'true' ) { vid.setAttribute('controls', 'controls'); };
	     // Add Poster Video Element
	    if ( this.options[5].value != '' ) { vid.setAttribute('poster', this.options[5].value ); };
	    // Append Video Element to Video Div
		div.appendChild(vid);
		// Create and add source elements for all videos in the video object 
		for (var i = 0; i < this.videos.length; i++) {
			// Create Source Element
			var src = document.createElement('source');
			// Update Video Source
		    src.src = this.videos[i][0];
		    // Update Video Type
		    src.type = this.videos[i][1];	
			// Append Video Source To Video Element
		    vid.appendChild(src);
		}		
		// Establish Reference to Video Div
		var video = this.d('si_vid');
		// Create an instance of the video component, which tracks the video object
		tracked_video = new EBG.VideoModule(video);
		// Play Video if autoplay is set to true
		if ( this.options[4].value.toLowerCase() == 'true' ) { tracked_video.playVideo("true") };
},
    
    // Handle Ad Setup
    setUpAd: function () {
    	// Ad Clickthrough Button
	    this.d("click").addEventListener('click', function(e){ EB.clickthrough(); }, false);
	    
    }     
    
};