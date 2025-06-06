const makeBlogTable = (sequelize, DataTypes) =>{
    const Blog = sequelize.define("blog",{
        title : {
            type : DataTypes.STRING
        },
        description : {
            type : DataTypes.STRING
        }
    })
    return Blog
}
module.exports = makeBlogTable