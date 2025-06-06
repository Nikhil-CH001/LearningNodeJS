const makeProductTable = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        name : {
            type : DataTypes.STRING
        },
        price : {
            type : DataTypes.FLOAT
        },
        description : {
            type : DataTypes.STRING
        }
    })
    return Product
}
module.exports = makeProductTable