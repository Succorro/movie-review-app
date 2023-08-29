class Review < ApplicationRecord
  belongs_to :movie_id
  belongs_to :user_id

end
