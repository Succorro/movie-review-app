class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_year, :genre, :director, :description
end
