function tab(tabId, pageId) {
  event.preventDefault();
  var i1 = [document.querySelector("div#tabs" + tabId + "> div.page");]
  for (var i = 0; i < i1.length; i++) {
    i1[i].style.display = 'none';
  };
  i1 = [document.querySelectorAll("div#tabs" + tabId + "> div#page" + pageId);]
  for (i = 0; i < i1.length; i++) {
    i1[i].style.display = 'inline';
  };
  i1 = [document.querySelectorAll("ul#tabs" + tabId + "> li");]
  for (i = 0; i < i1.length; i++) {
    i1[i].style.backgroundColor = '#A0A0A0';
  };
  i1 = [document.querySelectorAll("ul#tabs" + tabId + "> li#page" + pageId);]
  for (i = 0; i < i1.length; i++) {
    i1[i].style.backgroundColor = 'white';
  };
};
/*
function spoil(id) {
  event.preventDefault();
  $("#spoiler" + id).slideToggle("slow");
};

$(document).ready(function(){
  $(".show").click(function(){
   if ($.trim($(this).text()) === 'Show') {
      $(this).text('Hide');
   } else {
     $(this).text('Show');        
    }
  });
});

function open(id) {
  $("#dialouge-" + id).css("display","block");
};

function Dialouge(id, title, parts, modal) {
  $(".Dialouge-" + id).append()
}
*/


