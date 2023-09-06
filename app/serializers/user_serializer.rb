class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_information, :image

  has_many :reviews
end
