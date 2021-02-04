(function() {
  console.log('github-markdown.js');


  var breadcrumb = document.querySelector('div.breadcrumb');

  if (!breadcrumb) return false;

  // We use the default styles for button
  var buttonClass = 'btn flex-auto mx-3 ml-md-3 mr-md-0 ml-lg-0 mb-3 mb-md-0';

  // The container div
  var toolbar = document.createElement('div');
  toolbar.className = 'chromium-extension-github-markdown-toolbar';

  var boldButton = document.createElement('button');
  boldButton.textContent = 'B';
  boldButton.className = buttonClass;
  toolbar.appendChild(boldButton);

  var italicButton = document.createElement('button');
  italicButton.textContent = 'I';
  italicButton.className = buttonClass;
  toolbar.appendChild(italicButton);

  // Insert the container div into the DOM tree
  breadcrumb.parentNode.insertBefore(toolbar, breadcrumb.nextSibling);

  // Event handlers
  toolbar.addEventListener('click', function(event) {
    // Prevent the form from submitting.
    event.preventDefault();
  });

  boldButton.addEventListener('click', event => {
    const str = window.getSelection().toString();
    //console.log('Bold button was clicked. text:', str);
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`**${str}**`);
  });
  italicButton.addEventListener('click', event => {
    const str = window.getSelection().toString();
    //console.log('Bold button was clicked. text:', str);
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`*${str}*`);
  });
})();