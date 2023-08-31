const data =  require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data,

    createuser: (datauser) => {
        let newUser = {
            id: data.length + 1,
            ...datauser
        }

        data.push(newUser);

        return newUser;
    }
};