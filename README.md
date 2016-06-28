# audioplyr

### version .9

#### Overview
A simple HTML5 audio player using JavaScript.  The player can be easily dropped into a web page and is ready for playing MP3, OGG/OGA, and WAV files.  This is an initial beta version using the default player with controls.

#### Future Enhancements
<ul>
  <li>Custom player UI and player controls as alternative to default player.</li>
  <li>Custom styling for player elements.</li>
  <li>Integrate picklist of files to play with an ability to pass in a list of files to include in the picklist.</li>
  <li>Full cross-browser support.</li>
  <li>Increased error handling and messaging.</li>
</ul>

#### AudioPlyr Options
<table>
<tr><th>Property</th><th>Description</th></tr>
<tr><td>styleName</td><td>Default and custom styles.  Currently use "basic" for default.</td></tr>
<tr><td>autoPlay</td><td>Whether to automatically start playing when file is loaded.  true or false</td></tr>
<tr><td>soundItem</td><td>Sound Item object.</td></tr>
</table>

#### SoundItem Properties
<table>
<tr><th>Property</th><th>Description</th></tr>
<tr><td>title</td><td>Title for display.</td></tr>
<tr><td>mediaFile</td><td>URL of media file.</td></tr>
</table>

#### Setup Example for Page
In the page, add a DIV element with an ID for the player container:
  <div id="audio-player-container"></div>
 
Include the AudioPlyr.js file:
  <script type="text/javascript" src="js/AudioPlyr.js"></script>
  
Call init function with container ID and options:  
  <script type="text/javascript">
    var plyrOptions = {
      styleName: "basic",
      autoPlay: true,
      soundItem: {
        title: "Crickets MP3",
        mediaFile: "media/crickets.mp3"
      }
    };
    AudioPlyr.init("audio-player-container", plyrOptions);
  </script>




