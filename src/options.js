function save_options() {
  var issuekeys = {};

  $("#issue-keys").children().each(function() {
    var issuekey = $(this).find("input[name='issuekey']").val();
    var url = $(this).find("input[name='url']").val();
    issuekeys[issuekey] = url;
  });
  
  chrome.storage.sync.set({
    "issuekeys": issuekeys
  }, function() {
    $("#saveMessage").show().delay(800).fadeOut(300)
  });
}

function restore_options() {
  chrome.storage.sync.get(
    null
  , function(storage) {
    for (var issuekey in storage["issuekeys"]) {
      append_row(issuekey, storage["issuekeys"][issuekey])
    }
  }
  )
}

function append_row(issuekey, url) {
  $("#issue-keys").append(
    $("<li><input type='text' name='issuekey' value='" + issuekey + "' size='20'/><input type='text' name='url' size='100' value='" + url + "'/><img src='icons/delete.png' name='delete'/></li>")
  );

  $('#issue-keys').children().last().find("img").click(function() {
    $(this).closest("li").remove();
  });
}

$(document).ready(function() {

  $("#save").click(save_options);

  $("#add-row").click(function() {
    append_row("ISSUEKEY", "http://jirainstanceurl/")
  });

  restore_options();
});