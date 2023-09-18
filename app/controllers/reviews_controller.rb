class ReviewsController < ApplicationController
    def create 
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end 

    def update 
        review = @current_user.reviews.find_by(id: params[:id])
        if @current_user.reviews.include?(review)
            review&.update!(review_params)
            render json: review, status: :accepted
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end 
    end 

    def destroy 
        review = @current_user.reviews.find_by(id: params[:id]) 
        if @current_user.reviews.include?(review)
            review&.destroy 
            head :no_content 
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end 
    end  

    private 
    def review_params 
        params.permit(:review, :rating, :movie_id)
    end 


end
