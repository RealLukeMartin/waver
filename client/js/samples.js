var drums = new Wad({
  source : 'dubbeat.wav',
  volume : 0.3,
  loop  : true,
  env : {
    attack : 0.0,
    decay : 0.0,
    sustain : 1.0,
    hold : 9001,
    release : 0
  },
  filter  : {
      type      : 'lowpass',
      frequency : 10000,
      q         : 1,
      env       : {
          frequency : 10000,
          attack    : 0.5
      }
  }
});
var samples = [];
samples.push(drums);
samples.forEach(function(entry) {
  entry.on = false;
});

Template.drums.events({
  'click button': function () {
    if ( drums.on == false ) {
      drums.play();
      drums.on = true;
    }
    else {
      drums.stop();
      drums.on = false;
    }
  }
});
