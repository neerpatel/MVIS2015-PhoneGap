$('body').append('<div id="ajaxBusy" style="display: none;"><div id="ajaxBusyMsg">Please wait...</div></div>');


function TweetUpdate(){
  var html = '<ul class="list-group">';
  var tweeturl = "http://spectrum.np-dev.com/twitter.json.php?q=" + $("#twitter-search").val();
   $('#ajaxBusy').show();
  $.getJSON(tweeturl, function(d) {
    $.each(d.statuses, function(i, tweet) {
      if(tweet.text !== undefined) {
                    html += '<li class="list-group-item">';
                    html    += ' <a href="http://twitter.com/' + tweet.user.screen_name + '"> ' + tweet.user.screen_name + '</a> - ';
                    html    += tweet.text + '</li>';    
                  }
                });
    html += "</ul>";
    $('#twitter_feed').html(html);
     $('#ajaxBusy').hide();
  })
}

$( document ).on( "click","#twitter-button", function( event) {
 TweetUpdate();
});

