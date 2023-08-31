class User < ApplicationRecord
    has_secure_password 
    has_many :reviews
    has_many :movies, through: :reviews

    validates :username :profile_information, presence: true
    validates :username, uniqueness: true
end
