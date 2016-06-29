# audioplyr

### version .9

#### Overview
A simple HTML5 audio player using JavaScript.  The player can be easily dropped into a web page and is ready for playing MP3, OGG/OGA, and WAV files.  This is an initial beta version using the default player with controls.

#### Future Enhancements
  - Custom player UI and player controls as alternative to default player.
  - Custom styling for player elements.
  - Integrate picklist of files to play with an ability to pass in a list of files to include in the picklist.
  - Full cross-browser support.
  - Increased error handling and messaging.

#### AudioPlyr Options
| Property | Description |
| --- | --- |
| styleName | Default and custom styles.  Currently use "basic" for default. |
| autoPlay | Whether to automatically start playing when file is loaded.  true or false |
| soundItem | Sound Item object. |

#### SoundItem Properties
| Property | Description |
| --- | --- |
| title | Title for display. |
| mediaFile |mediaFile |

#### Usage
In the page, add a DIV element with an ID for the player container:
```html
  <div id="audio-player-container"></div>
```

Include the AudioPlyr.js file:
```html
  <script type="text/javascript" src="js/AudioPlyr.js"></script>
```

Call init function with container ID and options:
```html
  <script type="text/javascript">
    var plyrOptions = {
      styleName: "basic",
      autoPlay: true,
      soundItem: {
        title: "Satellite MP3",
        mediaFile: "media/space_satellite.mp3"
      }
    };
    AudioPlyr.init("audio-player-container", plyrOptions);
  </script>
```



