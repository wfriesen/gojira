$( document ).ready(function() {
  var page = $("body");

  page.html(page.html().replace(/(ISSUEKEY-\d+)/ig, '<a href="http://jira.com/$1">$1</a>'));
});