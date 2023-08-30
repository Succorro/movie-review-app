Rails.application.routes.draw do
  resources :reviews
  resources :movies, only: [:create, :index, :show]
  
  # User controller routes 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :user, only: [:update]

  # Sessions Controller routes 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
