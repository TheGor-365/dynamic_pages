# frozen_string_literal: true

Rails.application.routes.draw do
  root 'products#index'
  resources :products, only: %i[index show]
  get 'up' => 'rails/health#show', as: :rails_health_check
end
