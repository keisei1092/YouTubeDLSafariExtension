var target = $('.yt-lockup-meta-info');

$.each(target, function() {
  var videoId = $(this).closest('.yt-lockup').data('context-item-id');
  var element = '<li><a href="http://localhost:4568/youtube-dl/' + videoId + '" target="_blank">mp3</a>';
  $(this).append(element);
});
