module AnalyzerHelper
  def markov(clean_feed)
    markov = MarkyMarkov::TemporaryDictionary.new

    clean_feed.each do |entry|
      entry.each do |sentence|
        markov.parse_string sentence
      end
    end

    markov.generate_n_sentences 5
  end

  def word_cloud(clean_feed)
    big_block_of_text = clean_feed.each { |entry| entry.join(' ') }.join(' ')
    tokens = WordsCounted::Tokeniser.new(big_block_of_text).tokenise(exclude: ->(t) { t.length < 3 })

    sieve = Stopwords::Snowball::WordSieve.new
    filtered_tokens = sieve.filter lang: :en, words: tokens
    counter = WordsCounted::Counter.new(filtered_tokens)
  end

  # Takes an array of entries, and returns an array of arrays (sentences from summary)
  def clean_entries(feed)
    full_sanitizer = Rails::Html::FullSanitizer.new
    feed.entries.map do |entry|
      clean_summary = full_sanitizer.sanitize(entry.summary)
      clean_sentences(clean_summary)
    end
  end

  def clean_sentences(string)
    string.gsub(/\t|\n|\r/, ' ') # separators to whitespace
      .split(/\.\s*/).map do |s| # split on ". " pattern
        s.gsub(/\W+/, ' ').strip # sanitize non-alphanumerics
      end
  end
end
