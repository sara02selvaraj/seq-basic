module.exports=(sequelize,DataTypes)=>{
    const User= sequelize.define("User",{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
          type:DataTypes.INTEGER,
          allowNull:false
      }
    });
    return User
  }
  