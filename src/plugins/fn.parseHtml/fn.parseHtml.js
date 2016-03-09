// function parseHtml(htmlString){
//   var parsed = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ ).exec(htmlString),
//       o = document.createElement(parsed[1]);
//   return u(o);
// }

function parseHtml(htmlString){
  var d = document.createElement('div');
  d.innerHTML = htmlString;
  return u(d).children();
}