class AnalyzerController < ApplicationController
  include AnalyzerHelper
  rescue_from Feedjira::FetchFailure, with: :fail_message

  def index
  end

  def analyze
    feed = Feedjira::Feed.fetch_and_parse(params[:rss_url])
    clean_feed = clean_entries(feed)

    render json: {
      markov: markov(clean_feed),
      wordcloud: word_cloud(clean_feed)
      }, status: :ok
  end

  def fail_message
    head :internal_server_error
  end
end
