//Waver Config
var Waver = function() {
	this.on = false;
	this.volume = tsw.gain(0.25); //Full volume is 1.0
	this.wave;
};
Waver.prototype.filter = tsw.filter({
	type: 'lowpass',
	frequency: 600,
	Q: 1
});
//Oscillator Instruments
var oscillator = new Waver();

//Events
Template.play.events({
	'click button': function() {
    var clickedInstrument = event.target.id;
    var instrObj = eval(clickedInstrument);
    
    if ( instrObj.on == false ) {
    	instrObj.wave = tsw.osc(440, 'sawtooth');
    	tsw.connect(instrObj.wave, instrObj.filter, instrObj.volume, tsw.speakers);
    	instrObj.wave.start();
    	instrObj.on = true;
    }
    else {
    	instrObj.wave.stop();
    	tsw.disconnect(instrObj.wave, instrObj.filter, instrObj.volume);
    	instrObj.on = false;
    }
	}
});

Template.modify.events({

});