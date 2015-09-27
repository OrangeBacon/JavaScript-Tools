function tab(tabId, pageId) {
  event.preventDefault();
  $("div#tabs" + tabId + "> div.page").css('display', 'none');
  $("div#tabs" + tabId + "> div#page" + pageId).css('display', 'inline');
  $("ul#tabs" + tabId + "> li").css('background-color', '#A0A0A0');
  $("ul#tabs" + tabId + "> li#page" + pageId).css('background-color', 'white');
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

