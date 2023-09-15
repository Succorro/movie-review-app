class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_year, :genre, :director, :description
  has_many :reviews

end
