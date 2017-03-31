// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

require('bootstrap-loader');
const WordCloud = require('wordcloud');

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
