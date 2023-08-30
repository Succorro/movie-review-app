class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_information, :image

  has_many :reviews, class_name: "reviews", foreign_key: "reference_id"
end
