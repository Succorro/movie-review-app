class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, :genre, :director, presence: true
    validates :description, length: {minimum: 50}
    validates :release_year, format: {with: /\A(\w+(?:[\s-]*\w+)?)(?:,\s*\g<1>)*\z/, message: "enter date in dd/mm/yyyy"}

    def self.trending_movies
        # SQL Query to find trending movies, select movies and their associated reviews count
        Movie.select('movies.*, COUNT(reviews.id) as review_count')
             .joins(:reviews) #joins to combine reviews and movies table
             .where('reviews.created_at >= ?', 1.week.ago) # filtering the reviews by a weekly basis
             .group('movies.id') # grouping the results by movie id  
             .order('review_count DESC') # ordering the results in descending order by review count 
             .limit(5) #limit 5 to only display a few for the query 
        end
end
