//Waver Config
var Waver = function() {
	this.on = false;
	this.volume = tsw.gain(0.25); //Full volume is 1.0
	this.wave;
    this.filter = tsw.filter({
        type: 'lowpass',
        frequency: 600,
        Q: 1
    });
    this.lfo = tsw.lfo(3);
};
//Oscillator Instruments
var oscillator = new Waver();

//Events
Template.play.events({
	'click button': function() {
    var clickedInstrument = event.target.id;
    var oscObj = eval(clickedInstrument);
    
    if ( oscObj.on == false ) {
    	oscObj.wave = tsw.osc(261.6, 'sawtooth');
    	tsw.connect(oscObj.wave, oscObj.filter, oscObj.volume, tsw.speakers);
    	oscObj.wave.start();
      // oscillator.lfo.modulate(oscillator.volume.params.gain);
    	oscObj.on = true;
    }
    else {
    	oscObj.wave.stop();
    	tsw.disconnect(oscObj.wave, oscObj.filter, oscObj.volume);
    	oscObj.on = false;
    }
	}
});

Template.oscillatorfilter.events({
  'mouseup input': function() {
    var $cutoff = $("#osc-filter").val();
    if ( oscillator.on == true ) {
      oscillator.filter.frequency($cutoff);
    }
  }
});
Template.oscillatorspeed.events({
  'mouseup input': function() {
    var $speed = $("#osc-speed").val();
    if ( oscillator.on == true ) {
      oscillator.lfo.stop();
      oscillator.lfo = tsw.lfo($speed / 250);
      // oscillator.lfo.modulate(oscillator.volume.params.gain);
    }
  }
});