Rails.application.routes.draw do
  root 'analyzer#index'
  post '/analyze', to: 'analyzer#analyze'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
