class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_information, :image

  has_many :movies

  # def unique_movies 
  #   object.movies.uniq
  # end

end
