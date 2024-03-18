function loadduri(link){
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/gh/FancyBoiL1/datauri-passthrough@master/noiframe.css';
  var iframe = document.createElement('iframe');   
  iframe.sandbox.add('allow-top-navigation');
  iframe.sandbox.add('allow-same-origin');
  iframe.sandbox.add('allow-scripts');
  iframe.sandbox.add('allow-popups');
  iframe.sandbox.add('allow-popups-to-escape-sandbox');
  iframe.sandbox.add('allow-forms');
  iframe.sandbox.add('allow-modals');
  iframe.sandbox.add('allow-orientation-lock');
  iframe.sandbox.add('allow-pointer-lock');
  iframe.sandbox.add('allow-presentation');
  iframe.sandbox.add('allow-pointer-lock');
  iframe.src = link;
  iframe.allowfullscreen = 'true';
  iframe.allowtransparency='true';
  document.body.appendChild(css);
  document.body.appendChild(iframe);
  window.setInterval(() =>{
    if(iframe.style.width !== window.innerWidth){iframe.style.width = window.innerWidth;}
    if(iframe.style.height !== window.innerHeight){iframe.style.height = window.innerHeight;}
  }, 20);
}
