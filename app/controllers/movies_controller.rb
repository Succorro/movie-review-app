class MoviesController < ApplicationController
    skip_before_action :authorize, only: [:index, :popular]
    
    def index
    render json: Movie.all, include: ['reviews', 'reviews.user'],  status: :ok
    end

    def show
    movie = find_movie
    render json: movie, status: :ok 
    end
    def popular 
        popular = Movie.trending_movies
        render json: popular, status: :ok 
    end 

  def create
    movie = Movie.create!(movie_params)
    render json: movie, status: :created
  end

    private 
    def movie_params 
    params.permit(:title, :release_year, :genre, :director, :description)
    end 

    def find_movie 
        Movie.find(params[:id])
    end 

end
