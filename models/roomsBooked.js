module.exports = function (sequelize, DataTypes) {
    var bookedRooms = sequelize.define("bookedRooms", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dateOfBirth: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    bookedRooms.associate = function (models) {
        bookedRooms.belongsTo(models.Rooms, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return bookedRooms;
};
