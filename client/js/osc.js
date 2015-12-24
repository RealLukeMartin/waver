var drums = new Wad({
  source : 'dubbeat.wav',
  loop  : true
})
var oscillator = new Wad({
  source : 'sawtooth',
  volume  : 0.8,
  wait    : 0,
  pitch   : 'C2',
  filter  : {
      type      : 'lowpass',
      frequency : 10000,
      q         : 1
  },
  label   : 'C',
  env     : {hold : 3.14},
  panning : [1, -1, 10],
  tremolo : {
    shape     : 'sine',
    magnitude : 10,
    speed     : 4,
    attack    : 0
  }
})
drums.on = 0;
oscillator.on = 0;

Template.play.events({
  'click button': function () {
    var clickedInstrument = event.target.innerHTML.toLowerCase();
    var instrumentObject = eval(clickedInstrument);
    var $filter = $('#osc-filter');
    if ( instrumentObject.on === 0 ) {
      instrumentObject.play({ 
        volume : 0.8,
        filter  : {
            type      : 'lowpass',
            frequency : $filter.val(),
            q         : 1
        },
        env : {hold : 9001}
      })
      instrumentObject.on = 1;
    }
    else {
      instrumentObject.stop();
      instrumentObject.on = 0;
    }
  }
});
Template.modify.events({
  'mouseup input': function() {
    var newEffectValue = event.target.value;
    if (oscillator.on === 1){
      oscillator.stop();
      oscillator.play({
        filter  : {
            type      : 'lowpass',
            frequency : newEffectValue,
            q         : 1
        }
      })
    }
  }
});

