class FavoritesController < ApplicationController
    
    before_action :set_favorite, only: [:show, :update, :destroy]

    def index
        @favorites = Favorite.where(user_id: @user.id)
        render json: @favorites
    end

    def show
        render json: @favorite
    end

    def create
        @favorite = Favorite.new(favorite_params)
    
        if @favorite.save
          render json: @favorite, status: :created, location: @favorite
        else
          render json: @favorite.errors, status: :unprocessable_entity
        end
    end

    def update
        if @favorite.update(favorite_params)
          render json: @favorite
        else
          render json: @favorite.favorite, status: :unprocessable_entity
        end
    end
    
    def destroy
        @favorite.destroy
    end

    private
    
        def favorite_params
            params
            .require(:favorite)
            .permit(:name)
            .merge(user_id: @user.id)
        end

        def set_favorite
            @favorite = Favorite.find(params[:id])
        end

end
