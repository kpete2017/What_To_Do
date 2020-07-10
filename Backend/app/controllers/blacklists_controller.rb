class BlacklistsController < ApplicationController

    def index
        @blacklists = Blacklist.where(user_id: @user.id)
        render json: @blacklists
    end

    def create
        @blacklist = Favorite.create(blacklist_params)

        render json: @blacklist
    end

    private
    
    def blacklist_params
        params.require(:blacklist).permit(:name).merge(user_id: @user.id)
    end
end
