module.exports = function (sequelize, DataTypes) {
    var Rooms = sequelize.define("Rooms", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }
    });
    return Rooms;
};

