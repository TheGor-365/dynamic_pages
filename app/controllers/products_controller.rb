class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])

    # respond_to do |format|
    #   format.html
    #   format.js   # show.js.erb
    #   format.turbo_stream
    #   format.json { render json: @product }
    # end
  end
end
