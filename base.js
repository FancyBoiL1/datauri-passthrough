function loadduri(link){
  var iframe = document.createElement('iframe');   
  iframe.sandbox.add('allow-top-navigation');
  iframe.sandbox.add('allow-scripts');
  iframe.sandbox.add('allow-popups-to-escape-sandbox');
  iframe.sandbox.add('allow-popups');
  iframe.src = link;
  iframe.allowfullscreen = 'true';
  iframe.allowtransparency='true';
  document.body.appendChild(iframe);
  window.setInterval(() =>{
    if(iframe.style.width !== window.innerWidth){iframe.style.width = window.innerWidth;}
    if(iframe.style.height !== window.innerHeight){iframe.style.height = window.innerHeight;}
  }, 20);
}
