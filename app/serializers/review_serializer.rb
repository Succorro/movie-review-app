class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :username
  belongs_to :movie 
  belongs_to :user 

  def username 
    object.user.username
  end
end
