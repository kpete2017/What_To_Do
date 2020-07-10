class BlacklistsController < ApplicationController

    def index
        @blacklists = Blacklist.where(user_id: @user.id)
        render json: @blacklists
    end

    def create
        @blacklist = Blacklist.create(blacklist_params)

        render json: @blacklist
    end

    def destroy

        @blacklist = Blacklist.find(params[:id])
        @blacklist.destroy

        redirect_to "http://localhost:3002/"
    end

    private
    
    def blacklist_params
        params.require(:blacklist).permit(:name).merge(user_id: @user.id)
    end
    
end
