var AudioPlyr = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var containerId = "";
  var opts = null;
  var plyrTitleText = "";
  
  var playerBoxUser = null;
  var plyrAudio = null;

  //----------------- END MODULE SCOPE VARIABLES ---------------

  //--------------------- BEGIN PRIVATE METHODS --------------------  
  var _getFileObj = function() {	
    return {
      type: "mp3",
      name: "crickets.mp3"
    };
  };
  
  var _assignOptions = function() {	
    plyrTitleText = opts.title || "";
  };

  var _setupUi = function() {
    playerBoxUser = document.getElementById(containerId);
    console.log("_setupUi: containerId=" + containerId + " playerBoxUser=" + playerBoxUser);

    var plyrContainer = document.createElement('div');
    plyrContainer.className = "player-container";
    var plyrTitle = document.createElement('div');
    plyrTitle.className = "player-title";
    plyrTitle.innerHTML = plyrTitleText;
    plyrContainer.appendChild(plyrTitle);
    var plyrFrame = document.createElement('div');
    plyrFrame.className = "player-frame";
    plyrContainer.appendChild(plyrFrame);
    
    plyrAudio = document.createElement('audio');
    plyrAudio.setAttribute('id', 'player-unit');
    //plyrAudio.setAttribute('autoplay', false);
    plyrAudio.setAttribute('controls', 'controls');
    plyrAudio.innerHTML = "Your browser does not support the audio element.";
    plyrFrame.appendChild(plyrAudio);
    
    var plyrAudioSrc = document.createElement('source');
    plyrAudioSrc.setAttribute('id', 'src-audio-mp3');
    plyrAudioSrc.setAttribute('type', 'audio/mp3');
    plyrAudioSrc.setAttribute('src', '');
    plyrAudio.appendChild(plyrAudioSrc);
    plyrAudioSrc = document.createElement('source');
    plyrAudioSrc.setAttribute('id', 'src-audio-ogg');
    plyrAudioSrc.setAttribute('type', 'audio/ogg');
    plyrAudioSrc.setAttribute('src', '');
    plyrAudio.appendChild(plyrAudioSrc);
    
    playerBoxUser.appendChild(plyrContainer);
  };
  
  var _getExt = function(fileName) {	
    var pos1 = fileName.lastIndexOf('.');
    return fileName.substring(pos1 + 1, fileName.length);
  };

  //--------------------- END PRIVATE METHODS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  var init = function(conId, options) {
    console.log("init INPUTS: conId=" + conId + " options=" + options);
    containerId = conId;
    opts = options || {};
    _assignOptions();
    _setupUi();
  };

  var updateAudioSource = function(soundItem, doPlay) {
    console.log("updateAudioSource: title=" + soundItem.title + " mediaFile=" + soundItem.mediaFile);
    var sourceMp3 = document.getElementById('src-audio-mp3');
    var sourceOgg = document.getElementById('src-audio-ogg');
    var ext = _getExt(soundItem.mediaFile);
    if (ext == "mp3")
      sourceMp3.src = soundItem.mediaFile;
    if (ext == "ogg" || ext == "oga")
      sourceOgg.src = soundItem.mediaFile;
    plyrAudio.load();
    if (doPlay)
      plyrAudio.play();
    
    document.getElementsByClassName('player-title')[0].innerHTML = soundItem.title;
  };


  return {
    init: init,
    updateAudioSource: updateAudioSource
  };
  //--------------------- END PUBLIC METHODS --------------------
}());

