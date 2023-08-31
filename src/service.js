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
    }
};