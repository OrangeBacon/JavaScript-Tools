function tab(tabId, pageId) {
  event.preventDefault();
  var i1 = document.querySelectorAll("div#tabs" + tabId + "> div.page");
  for (var i = 0; i < i1.length; i++) {
    i1[i].style.display = 'none';
  };
  i1 = document.querySelectorAll("div#tabs" + tabId + "> div#page" + pageId);
  for (i = 0; i < i1.length; i++) {
    i1[i].style.display = 'inline';
  };
  i1 = document.querySelectorAll("ul#tabs" + tabId + "> li");
  for (i = 0; i < i1.length; i++) {
    i1[i].style.backgroundColor = '#A0A0A0';
  };
  i1 = document.querySelectorAll("ul#tabs" + tabId + "> li#page" + pageId);
  for (i = 0; i < i1.length; i++) {
    i1[i].style.backgroundColor = 'white';
  };
};

function spoil(id) {
  event.preventDefault();
  if (document.querySelector('#spoiler1').style.display === 'none') {
    document.querySelector('#spoiler1').style.display = 'block';
  } else {
    document.querySelector('#spoiler1').style.display = 'none';
  }
};

window.onload = function(){
  var i1 = document.querySelectorAll('.show');
  for (var i = 0; i < i1.length; i++) {
    i1[i].setAttribute("onclick", i1[i].getAttribute("onclick") + "\; this\.innerHTML \=\=\= \'Show\' \? this\.innerHTML \= \'Hide\'\: this\.innerHTML \= \'Show\'\;");
  };
  i1 = document.querySelectorAll('.content');
  for (i = 0; i < i1.length; i++) {
    i1[i].style.display = 'none';
  };
};

window.onload = function(){
  var c = document.querySelectorAll('pre');
  for (var i = 0; i < c.length; i++) { //for each code block
    var c2 = c[i].innerHTML.length;
    c[i].innerHTML = "";
    for (var i1 = 0; i1 < c2; i1++) { // for each letter in code block
      c[i].innerHTML = c[i].innerHTML + "<span>" + c[i].innerHTML.charAt(i1) + "</span>";
    };
  };
};










