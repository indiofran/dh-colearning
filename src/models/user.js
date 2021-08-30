const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const data = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const user = {
    getAll: () => {
        return data;
    },
    modifiedAll: (data)=>{
        fs.writeFileSync(usersFilePath, JSON.stringify(data))
    },
    findById: (id)=>{
        return  data.find(elem => String(elem.id) === id)
    },
    findByEmail: (email)=>{
        return  data.find(elem => elem.email === email)
    },
    login: (email, password) =>{

    }
}

module.exports = user;