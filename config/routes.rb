Rails.application.routes.draw do
  root 'analyzer#index'

  get 'analyzer/markov'
  get 'analyzer/word_cloud'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
