class AnalyzerController < ApplicationController
  def index
  end

  def analyze
    feed = Feedjira::Feed.fetch_and_parse(params[:url])
  end

  private # this should probably go in a model

  def clean(feed)
    # For 10 most recent entries
    # For each entry, split into sentences.
  end

  def markov
    markov = MarkyMarkov::TemporaryDictionary.new
    entries.each { |e| markov.parse_string e }
    puts markov.generate_n_sentences 5
  end

  def word_cloud
    # Strip all punctuation
    # Get array of ['word', freq_num]
    # Pass object back
  end
end
