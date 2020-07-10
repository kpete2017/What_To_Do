class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.where(user_id: @user.id)
        render json: @favorites
    end

    def create
        @favorite = Favorite.create(favorite_params)

        render json: @favorite
    end

    
    def destroy

        @favorite = Favorite.find(params[:id])
        @favorite.destroy

        redirect_to "http://localhost:3002/"
    end

    private
    
    def favorite_params
        params
        .require(:favorite)
        .permit(:name)
        .merge(user_id: @user.id)
    end

end
