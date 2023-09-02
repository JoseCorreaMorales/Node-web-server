const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data,

    getUser: (id) => {
        let identifier = Number(id)

        let user = data.filter((person) => person.id === identifier)[0];
        return user;
    },

    createuser: (datauser) => {
        let newUser = {
            id: data.length + 1,
            ...datauser
        }

        data.push(newUser);

        return newUser;
    },

    updateUser: (identifier, updateData) => {
        let id = Number(identifier);
        /* find the user */
        let usuario = data.filter((user) => user.id === id)[0];
        console.log(usuario);
        console.log(updateData);
        /* replacing data */
        usuario.first_name = updateData.first_name;
        usuario.last_name = updateData.last_name;
        usuario.email = updateData.email;

        return usuario;
    },

    deleteUser: (identifier) => {
        let id = Number(identifier);

        let user = data.filter((user) => user.id === id);

        let index = data.indexOf(user[0]);

        data.splice(index, 1);
        
        return user;
    }

};