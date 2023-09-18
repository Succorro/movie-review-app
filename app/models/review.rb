class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  validates :movie_id, :user_id, :review, :rating, presence: true
end
