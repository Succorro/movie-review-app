class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  belongs_to :movie 
  belongs_to :user 
end
