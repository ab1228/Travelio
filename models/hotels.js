module.exports = function (sequelize, DataTypes) {
    var Hotel = sequelize.define("Hotel", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        hotelName: {
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
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        checkOut: {
            type: DataTypes.DATE,
            validate: {
                len: [1]
            }
        },
        beds: {
            type: DataTypes.STRING
        },
        roomStatus: {
            type: DataTypes.STRING
        },
        personsPerRoom: {
            type: DataTypes.STRING
        },
        roomPrice: {
            type: DataTypes.INTEGER
        }
    });
    // Hotel.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Hotel.belongsTo(models.bookedRoom, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Hotel;
};

