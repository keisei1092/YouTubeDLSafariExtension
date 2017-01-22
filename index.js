var target = $('.yt-lockup-meta-info');

// top
$.each(target, function() {
  var videoId = $(this).closest('.yt-lockup').data('context-item-id');
  var element = '<li><a href="http://server.dev/youtube-dl/' + videoId + '" target="_blank">mp3</a>';
  $(this).append(element);
});

// show
if ($('#watch8-secondary-actions') != undefined) {
  var videoId = $('.yt-uix-videoactionmenu').data('video-id');
  $('#watch8-secondary-actions').append('<div class="yt-uix-menu"><a href="http://server.dev/youtube-dl/' + videoId + '" target="_blank">mp3</a></div>');
}

// show=>related
$.each($('.stat.view-count'), function() {
  var videoId = $(this).closest('a').attr('href').substring(9, 100);
  $(this).closest('a').append('<span class="stat"><a href="http://server.dev/youtube-dl/' + videoId + '" target="_blank">mp3</a></span>');
});
