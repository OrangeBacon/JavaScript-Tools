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
    i1[i].setAttribute("onclick", i1[i].getAttribute("onclick") + "this\.innerHTML \=\=\= \'Show\' \? this\.innerHTML \= \'Hide\'\: this\.innerHTML \= \'Show\'\;");
  };
};
