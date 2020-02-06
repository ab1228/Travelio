module.exports = function (sequelize, DataTypes) {
    var Hotels = sequelize.define("Hotels", {
        Hotel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        location: {
            type: DataTypes.STRING

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
    return Hotels;
};

