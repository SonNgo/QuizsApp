# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
physic = Subject.create!(title: 'Physic')
science = Subject.create!(title: 'Science')
math = Subject.create!(title: 'Math')
physic.quizzes.create!(name: "Physic 1")
science.quizzes.create!(name: "Science 1")
math.quizzes.create!(name: "Math 1")