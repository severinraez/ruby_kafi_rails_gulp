Rails.application.routes.draw do
  namespace :api do
    resources :foos, only: [:index]
  end
end
