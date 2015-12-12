	var drum = new Wad({ 
		source : 'dubbeat.wav', 
		label : 'D', 
		loop  : true
	});
	var saw = new Wad({
	  source : 'sawtooth',
		volume  : 0.8,
		wait    : 0,     // Time in seconds between calling play() and actually triggering the note.
		pitch   : 'C2',  // A4 is 440 hertz.
		label   : 'C',   // A label that identifies this note.
		env     : {hold : 3.14},
		panning : [1, -1, 10],
		filter  : {frequency : 900},
		tremolo : {
			shape     : 'sine',
			magnitude : 10,
			speed     : 2,
			attack    : 0  
		}
  })
  saw.on = 0;
  drum.on = 0;

	Template.synth.events({
	  'click button': function () {
			if ( saw.on === 0 ) {
				saw.play({ volume : 0.8 });
				saw.on = 1;
			}
			else {
				saw.stop();
				saw.on = 0;
			}
	  }
	});
	Template.drums.events({
  'click button': function () {
    drum.play({ loop  : true });
  }
});