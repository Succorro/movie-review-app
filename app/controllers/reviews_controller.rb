class ReviewsController < ApplicationController
    def index 
        render json: Review.all, status: :ok 
    end 

    def create 
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end 

    def update 
        review = @current_user.find_review
        review.update!(review_params)
        render json: review, status: :accepted 
    end 

    def destroy 
        review = find_review 
        review.destroy 
        head :no_content 
    end  

    private 
    def review_params 
        params.permit(:review, :rating, :user_id, :movie_id)
    end 

    def find_review
        Review.find(params[:id])
    end 
end
