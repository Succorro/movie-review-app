class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  belongs_to :user 
end
