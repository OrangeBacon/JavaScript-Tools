function css(prop,val) {
  var toCSS = this.querySelectorAll(prop);
  for (var i = 0; i < toCSS.length; i++) {
    toCSS[i].style.val = 0;
  };
};

function tab(tabId, pageId) {
  event.preventDefault();
  document.querySelectorAll("div#tabs" + tabId + "> div.page").css('display', 'none');
  document.querySelectorAll("div#tabs" + tabId + "> div#page" + pageId).css('display', 'inline');
  document.querySelectorAll("ul#tabs" + tabId + "> li").css('background-color', '#A0A0A0');
  document.querySelectorAll("ul#tabs" + tabId + "> li#page" + pageId).css('background-color', 'white');
};

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



