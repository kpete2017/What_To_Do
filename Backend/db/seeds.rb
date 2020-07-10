# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Favorite.destroy_all
Blacklist.destroy_all
User.destroy_all

kyle = User.create({
    username: "kyle",
    password: "password"
})

Blacklist.create({
    name: "Taco Bell",
    user_id: kyle.id
})

Blacklist.create({
    name: "Arbys",
    user_id: kyle.id
})

Blacklist.create({
    name: "KFC",
    user_id: kyle.id
})


Favorite.create({
    name: "Chick Fil A",
    user_id: kyle.id
})

Favorite.create({
    name: "McDonald's",
    user_id: kyle.id
})

Favorite.create({
    name: "Sonic",
    user_id: kyle.id
})
