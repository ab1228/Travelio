module.exports = function (sequelize, DataTypes) {
    var bookedRoom = sequelize.define("bookedRoom", {
        refNumber: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false

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
        },
        // HotelId: {
        //     type: DataTypes.INTEGER,
        //     required: true,
        //     allowNull: false
        // }
    });

    bookedRoom.associate = function (models) {
        bookedRoom.belongsTo(models.Hotel);
    };
    return bookedRoom;
};
