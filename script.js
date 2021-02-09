(function() {
  console.log('github-markdown.js');


  var breadcrumb = document.querySelector('div.breadcrumb');

  if (!breadcrumb) return false;

  // Bind Key Maps

  setTimeout(() => {
    const editor = document.querySelector('.CodeMirror').CodeMirror;

    editor.addKeyMap({
      'Cmd-B': function(cm) {
        cm.replaceSelection(`**${getSelection()}**`);
      },
      'Cmd-I': function(cm) {
        cm.replaceSelection(`*${getSelection()}*`);
      }
    });
  }, 0);


  // We use the default styles for button
  var buttonClass = 'btn flex-auto mx-3 ml-md-3 mr-md-0 ml-lg-0 mb-3 mb-md-0';

  // The container div
  var toolbar = document.createElement('div');
  toolbar.className = 'chromium-extension-github-markdown-toolbar';

  var h1Button = document.createElement('button');
  h1Button.textContent = 'H1';
  h1Button.className = buttonClass;
  toolbar.appendChild(h1Button);

  var boldButton = document.createElement('button');
  boldButton.textContent = 'B';
  boldButton.className = buttonClass;
  toolbar.appendChild(boldButton);


  var italicButton = document.createElement('button');
  italicButton.textContent = 'I';
  italicButton.className = buttonClass;
  toolbar.appendChild(italicButton);

  var codeButton = document.createElement('button');
  codeButton.textContent = 'Code';
  codeButton.className = buttonClass;
  toolbar.appendChild(codeButton);

  var codeBlockButton = document.createElement('button');
  codeBlockButton.textContent = 'Code Block';
  codeBlockButton.className = buttonClass;
  toolbar.appendChild(codeBlockButton);

  // Insert the container div into the DOM tree
  breadcrumb.parentNode.insertBefore(toolbar, breadcrumb.nextSibling);

  function getSelection() {
    return document.querySelector('.CodeMirror').CodeMirror.getSelection();
  }

  // Event handlers
  toolbar.addEventListener('click', function(event) {
    // Prevent the form from submitting.
    event.preventDefault();
  });

  h1Button.addEventListener('click', event => {
    const str = getSelection();
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`# ${str}`);
  });

  boldButton.addEventListener('click', event => {
    const str = getSelection();
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`**${str}**`);
  });

  italicButton.addEventListener('click', event => {
    const str = getSelection();
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`*${str}*`);
  });

  codeButton.addEventListener('click', event => {
    const str = getSelection();
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`\`${str}\``);
  });

  codeBlockButton.addEventListener('click', event => {
    const str = getSelection();
    document.querySelector('.CodeMirror').CodeMirror.replaceSelection(`\`\`\`\n${str}\n\`\`\``);
  });
})();