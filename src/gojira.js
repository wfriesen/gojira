$( document ).ready(function() {

  chrome.storage.sync.get(
    null
  , function(storage) {
    var page = $("body");
    
    for (var issuekey in storage["issuekeys"]) {
      var regex = new RegExp("(" + issuekey + "-[0-9]+)", "gi");

      page.html(page.html().replace(regex, '<a href="' + storage["issuekeys"][issuekey] + '$1">$1</a>'));
    }
  }
  )
});