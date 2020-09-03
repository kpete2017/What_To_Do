class BlacklistsController < ApplicationController

    before_action :set_blacklist, only: [:show, :update, :destroy]

    def index
        @blacklists = Blacklist.where(user_id: @user.id)
        render json: @blacklists
    end

    def show
        render json: @blacklist
    end

    def create
        @blacklist = Blacklist.new(blacklist_params)
    
        if @blacklist.save
          render json: @blacklist, status: :created, location: @blacklist
        else
          render json: @blacklist.errors, status: :unprocessable_entity
        end
    end

    def update
        if @blacklist.update(blacklist_params)
          render json: @blacklist
        else
          render json: @blacklist.favorite, status: :unprocessable_entity
        end
    end

    def destroy
        @blacklist.destroy
    end
    

    private
    
        def blacklist_params
            params.require(:blacklist).permit(:name).merge(user_id: @user.id)
        end

        def set_blacklist
            @blacklist = Blacklist.find(params[:id])
        end
end
