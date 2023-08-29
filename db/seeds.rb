# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Movie.create(title: "Sleeping Beauty", release_year: "01/29/1959", genre: "fantasy", director: "Clyde Geronimi", description: "Filled with jealousy, the evil witch Maleficent curses Princess Aurora to die on her 16th birthday. Thanks to Aurora's guardian fairies, she only falls into a deep sleep that can be ended with a kiss from her betrothed, Prince Phillip. To prevent Phillip from rescuing Aurora, Maleficent kidnaps and imprisons him. The good fairies are the last hope to free Phillip so that he can awaken Aurora.")
Review.create(user_id: 1, movie_id: 1, rating: 4, review: "Great movie. Not perfect!")