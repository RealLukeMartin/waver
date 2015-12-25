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
  env     : {hold : 9001},
  panning : [1, -1, 10],
  tremolo : {
    shape     : 'sine',
    magnitude : 10,
    speed     : 3,
    attack    : 0
  }
})
drums.on = 0;
oscillator.on = 0;

Template.play.events({
  'click button': function () {

    var clickedInstrument = event.target.id;
    var instrumentObject = eval(clickedInstrument);
    var $oscillatorFilter = $('#osc-filter');
    if ( instrumentObject.on === 0 ) {
      instrumentObject.play({
        volume : 0.8,
        filter  : {
            type      : 'lowpass',
            frequency : $oscillatorFilter.val(),
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
    var effectInput = event.target;
    var bridgeFrequency = $('#osc-filter').val();

    if (oscillator.on === 1){
      if (effectInput.id == 'osc-speed') {
        oscillator.tremolo.speed = effectInput.value;
        console.log(oscillator.tremolo.speed);
      }
      console.log(event.target.id);
      oscillator.stop();
      oscillator.play({ 
        filter : {
          frequency : $('#osc-filter').val()
        }
      });
    }
  }
});