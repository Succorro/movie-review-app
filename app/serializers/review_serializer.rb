class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
  belongs_to :movie 
  belongs_to :user 
end
