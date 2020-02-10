module.exports = function (sequelize, DataTypes) {
    var bookedRoom = sequelize.define("bookedRoom", {
        refNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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
            type: DataTypes.DATE,

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

    bookedRoom.associate = function (models) {
        bookedRoom.belongsTo(models.Hotel, {
            foreignKey: 'refNumber'


        });
    };
    return bookedRoom;
};
