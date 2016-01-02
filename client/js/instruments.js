// var tempo = 140;
// var beatTime = tempo/60;
// var drums = new Wad({
//   source : 'dubbeat.wav',
//   loop  : true
// })
// var oscillator = new Wad({
//   source : 'sawtooth',
//   volume  : 0.8,
//   wait    : 0,
//   pitch   : 'C2',
//   filter  : {
//       type      : 'lowpass',
//       frequency : 1000,
//       q         : 1
//   },
//   label   : 'C',
//   env     : {hold : 9001},
//   panning : [1, -1, 10],
//   tremolo : {
//     shape     : 'sine',
//     magnitude : 10,
//     speed     : 1 * beatTime,
//     attack    : 0
//   }
// })
// var instruments = [];
// instruments.push(drums, oscillator);
// instruments.forEach(function(entry) {
//   entry.on = 0;
// });

// Template.play.events({
//   'click button': function () {

//     var clickedInstrument = event.target.id;
//     var instrumentObject = eval(clickedInstrument);
//     var $oscillatorFilter = $('#osc-filter');
//     if ( instrumentObject.on === 0 ) {
//       instrumentObject.play({
//         volume : 0.8,
//         filter  : {
//             type      : 'lowpass',
//             frequency : $oscillatorFilter.val(),
//             q         : 1
//         },
//         env : {hold : 9001}
//       })
//       instrumentObject.on = 1;
//       if ( clickedInstrument == "oscillator" ) {
//         $('.oscillator-area').addClass('show');
//       }
//     }
//     else {
//       instrumentObject.stop();
//       instrumentObject.on = 0;
//       if ( clickedInstrument == "oscillator" ) {
//         $('.oscillator-area').removeClass('show');
//       }
//     }
//   }
// });

// Template.modify.events({
//   'mouseup input': function() {
//     var effectInput = event.target;

//     if (oscillator.on === 1){
//       if (effectInput.id == 'osc-speed') {
//         oscillator.tremolo.speed = (effectInput.value / 250) * beatTime;
//       }
//       oscillator.stop();
//       oscillator.play({ 
//         filter : {
//           frequency : $('#osc-filter').val()
//         }
//       });
//     }
//   }
// });
