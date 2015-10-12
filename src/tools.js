function tab(tabId, pageId) {
  event.preventDefault();
  document.querySelectorAll("div#tabs" + tabId + "> div.page").style.display = 'none';
  document.querySelectorAll("div#tabs" + tabId + "> div#page" + pageId).style.display = 'inline';
  document.querySelectorAll("ul#tabs" + tabId + "> li").style.backgroundColor = '#A0A0A0';
  document.querySelectorAll("ul#tabs" + tabId + "> li#page" + pageId).style.backgroundColor = 'white';
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


