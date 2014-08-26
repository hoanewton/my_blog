Rails.application.routes.draw do
 root 'application#index'
 resources :posts, only: [:index,:show,:create,:update,:destroy]
end
