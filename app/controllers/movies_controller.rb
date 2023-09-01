class MoviesController < ApplicationController

    def index
    render json: Movie.all,  status: :ok
    end

    def show
    movie = find_movie
    render json: movie, status: :ok 
    end

#   def create
#     @ = .new(params[:])
#   end

    private 
    def movie_params 
    params.permit(:title, :release_year, :genre, :director, :description)
    end 

    def find_movie 
        Movie.find(params[:id])
    end 

end
