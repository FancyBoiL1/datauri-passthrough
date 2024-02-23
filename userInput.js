let vers = prompt("Load from script or bookmarklet from clipboard? (C) or from link (L)?");
if (vers === "L"){
  let bkmrlt = prompt('Paste CDN or RawGithub link: '); 
  try{
    loadduri('data:text/html,<script>fetch("' + bkmrlt + '").then((res) => res.text()).then((js) => eval(js));<' + '/script>');
  } catch(fail) {
    alert(`Failed to load link, please try again. [DEV] Error: "${fail}"`);
  }
  } else {
    let bkmrlt = prompt('Paste Bookmarklet or Script: ');
  try{
      loadduri('data:text/html,<script>' + bkmrlt + '<' + '/script>');
  } catch (fail){
    alert(`Failed to load link, please try again. [DEV] Error: "${fail}"`);
  }
}
