class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, :genre, :director, presence: true
    validates :description, length: {minimum: 50}
    validates :release_year, format: {with: /\A(\w+(?:[\s-]*\w+)?)(?:,\s*\g<1>)*\z/, message: "enter date in mm/dd/yyyy"}
end
