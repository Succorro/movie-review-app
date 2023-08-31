class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  # has_one :movie_id
  # has_one :user_id

  belongs_to :movie 
  belongs_to :user 
end
