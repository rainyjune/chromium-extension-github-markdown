var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
// Note: For security reasons, Chrome prevents loading of js files. Your file must be added as a "web_accessible_resources" item
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
  this.remove();
};

// Inject another file to access the CodeMirror editor used in GitHub.
(document.head || document.documentElement).appendChild(s);