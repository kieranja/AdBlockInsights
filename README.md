AdBlockInsights
===============

This plugin will allow you to detect when an impression on your site is ad blocked. It's super simple to use and install.

You only need two files:

  1. AdBlockInsights.js
  2. advertisement.js

Just include AdBlockInsights.js into either your footer or header.

<script src="AdBlockInsights.js"></script>

Then, after invoke:
```javascript
AdBlockInsights.init(function() {
  alert("You have an ad blocker installed");
});
```

NOTE: AdBlockInsights.init MUST be invoked when the DOM is ready. If you're using jQuery you can use

```javascript
$(function(){ 
  AdBlockInsights.init(function() {
    alert("You have an ad blocker installed");
  });
});
```

You can use Google Analytics events to track - as generally ad blockers are quite generous and allow GA calls through. 
However, for the most accurate results I recommend using some internal tracking software.
