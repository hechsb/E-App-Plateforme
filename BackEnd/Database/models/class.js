module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("class", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {

  });
  return Class;
};
