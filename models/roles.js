
module.exports = (sequelize, dataType) => {

    const Role = sequelize.define('temp_role',
        {
            title: {
                type: dataType.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: {msg: 'Please enter role title'}
                }
            },
            description: {
                type: dataType.STRING,
                allowNull: false,
                validate: {
                    notNull: {msg: 'Please enter role description'}
                }
            }
        }
    );
    return Role;
}
