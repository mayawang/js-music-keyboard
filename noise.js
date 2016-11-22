$(document).ready( function() {
  $(document).keydown(function(ev) {
    console.log("key down", ev.key);
    playNoteFunc(ev.key)();
  });

  var playNoteFunc = function(note){
    var audioElementID = '#' + note + "Audio";
    var audioElement = $(audioElementID)[0];
    return function() {
      if (!audioElement) {
        return;
      }
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };

  [
    'c',
    'd',
    'e',
    'f',
    'g',
    'a',
    'b'
  ].forEach(function(note) {
    var uiElementClass = '.note.' + note;
    $(uiElementClass).click(playNoteFunc(note));
  });

});
