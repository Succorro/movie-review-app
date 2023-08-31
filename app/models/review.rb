class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  validates :text, length: {minimum: 50}
  validates :movie_id :user_id, presence: true
end
