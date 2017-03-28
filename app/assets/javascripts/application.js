// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require wordcloud2
//= require_tree .

$(document).ready(function() {
  $('#rss_form').on('ajax:success', function(event, data, status, xhr) {
    $('#markov-well').html(data.markov);
    render_word_cloud(data.wordcloud);
  }).on('ajax:error', function(event, xhr, status, error) {
    $('#rss_form').after("<br/><div class='alert alert-danger alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4>Oh no!</h4><p>We couldn't process that feed. Try another one.</p></div>");
  });
});

function render_word_cloud(token_freqs) {
  WordCloud($('#wordcloud-well')[0], {
    shape: 'square',
    list: token_freqs
  });
}

function fill_form(url) {
  $('#rss_url').val(url);
}
