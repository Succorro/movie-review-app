class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  validates :review, length: {minimum: 25}
  validates :movie_id, :user_id, presence: true
end
