function tab(tabId, pageId) {
  event.preventDefault()
  $("div#tabs" + tabId + "> div.page").css('display', 'none');
  $("div#tabs" + tabId + "> div#page" + pageId).css('display', 'inline');
  $("ul#tabs" + tabId + "> li").css('background-color', '#A0A0A0');
  $("ul#tabs" + tabId + "> li#page" + pageId).css('background-color', 'white');
  $("ul.tabs>li:hover").css('background-color', '#D0D0D0');
};
