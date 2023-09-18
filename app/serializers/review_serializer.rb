class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :movie_id, :username
  belongs_to :movie 

  # custom attribute username used to find associated user.username, '&' safe operation navigator used to find username if user is not nil
  def username 
    object.user&.username
  end
end
