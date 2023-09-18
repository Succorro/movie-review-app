class User < ApplicationRecord
    has_secure_password 
    has_many :reviews, dependent: :destroy
    has_many :movies, -> { distinct }, through: :reviews

    validates :username, presence: true, uniqueness: true 
    validates :password, length: {minimum: 4, maximum: 10}
end
