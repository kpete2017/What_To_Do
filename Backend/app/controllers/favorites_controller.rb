class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.where(user_id: @user.id)
        render json: @favorites
    end

    def create
        @favorite = Favorite.create(favorite_params)

        render json: @favorite
    end

    private
    
    def favorite_params
        params
        .require(:favorite)
        .permit(:name)
        .merge(user_id: @user.id)
    end
end
