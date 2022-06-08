// Read a JSON file of users and issue HTTP calls to create users
// https://github.com/axios/axios
// Use Typescript next:https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node
const fs = require("fs");
const users = require("./users.json");
const shortid = require("shortid");

// console.log(users);
let stream = fs.createWriteStream("./club-members.json", {flags:'w+'});
stream.write( "[");
for (let i = 0; i < users.length; i++) {
    let club_member = {
        id: shortid.generate(),
        first: users[i].firstName,
        last:  users[i].lastName,
        email:  users[i].email,
        rating:  users[i].rating,
        status: 'active'
    }
    let myData = i < users.length - 1 ? ", "  : ""
    stream.write( JSON.stringify(club_member) + myData + "\n");
}
stream.write( "]");
stream.end();
