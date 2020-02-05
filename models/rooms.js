module.exports = function (sequelize, DataTypes) {
    var Rooms = sequelize.define("Rooms", {
        checkInPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        checkIn: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        checkOut: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        beds: {
            type: DataTypes.STRING
        },
        roomStatus: {
            type: DataTypes.STRING
        }
    });
    return Rooms;
};

