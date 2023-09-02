class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  validates :review, length: {minimum: 50}
  validates :movie_id, :user_id, presence: true
end
