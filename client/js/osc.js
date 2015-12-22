var drums = new Wad({
  source : 'dubbeat.wav',
  label : 'D',
  loop  : true
});
var oscillator = new Wad({
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
});
oscillator.on = 0;
drums.on = 0;

Template.play.events({
  'click button': function () {
    var clickedInstrument = event.target.innerHTML.toLowerCase();
    var instrumentObject = eval(clickedInstrument);
    if ( instrumentObject.on === 0 ) {
      instrumentObject.play({ volume : 0.8 });
      instrumentObject.on = 1;
    }
    else {
      instrumentObject.stop();
      instrumentObject.on = 0;
    }
  }
});
