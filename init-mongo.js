db.createUser(
    {
        user: "aimarjair",
        pwd: "utd10205",
        roles: [
            {
                role: "readWrite",
                db: "GYM-MANAGEMENT"
            }
        ]
    }
);
db.createCollection("test"); //MongoDB creates the database when you first store data in that database