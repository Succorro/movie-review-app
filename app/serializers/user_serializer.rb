class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_information, :image, :unique_movies

  def unique_movies 
    object.movies.uniq
  end

end
