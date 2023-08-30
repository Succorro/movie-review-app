class UserReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating 
  belongs_to :movie
end
