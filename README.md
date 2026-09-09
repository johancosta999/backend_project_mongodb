# MongoDB	npm install mongoose

# The Big Contrast Point for Your Video (Postgres vs Mongo relationships)

Postgres: you wrote User.hasMany(Item) and Item.belongsTo(User) — two separate association lines, and Sequelize auto-created a userId column.

MongoDB: there's no separate association step — you directly define a field (user) of type ObjectId with a ref pointing to 'User'. One field does the whole job.

Instead of id (UUID in Postgres), Mongo automatically gives every document a built-in _id field of type ObjectId — this is what user will store, a copy of some User document's _id.