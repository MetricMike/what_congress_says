// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var rss_xhr = null;

$(document).ready(function() {
  $('#rss_form').on('ajax:success', function(event, data, status, xhr) {
    $('#markov-well').html(data.markov);
    $('#wordcloud-well').html(data.wordcloud);
    rss_xhr = xhr;
  }).on('ajax:error', function(event, xhr, status, error) {
    $('#rss_form').after(`
      <br/>
      <div class='alert alert-danger alert-dismissible fade in' role='alert'>
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
        <h4>Oh no!</h4>
        <p>We couldn't process that feed. Try another one.</p>
      </div>
    `);
  });
});

function fill_form(url) {
  $('#rss_url').val(url);
}
