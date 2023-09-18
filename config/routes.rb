Rails.application.routes.draw do
  
  # Review routes 
  resources :reviews, only: [:create, :update, :destroy]
  # Movie routes 
  resources :movies, only: [:create, :index] 
  get '/popular', to: 'movies#popular'
   
  # User routes 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"
 
  # Sessions routes 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Fallback
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
