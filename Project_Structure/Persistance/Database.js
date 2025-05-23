class Database{

    constructor(){
        this.users = [];
    }

    /**
     * saves a new user to the db
     * @param {User} user 
     * @returns {void}
     */
    saveUser(user){
        this.users.push(user);
    }

    /**
     * retrives user from the db
     * TODO ADD OVERLOADED VERSIONS TO HAVE MULTIPLE SEARCH PARAMETERS: username, email, anything else that can be used in the future
     * @returns {User}
     */
    retrieveUser(user){
        var foundPerson;
        this.users.forEach(person => {
            //console.log("Parameter username: " + user.username +"\n Users Array Username: " +person.username);
            if(user.username === person.username){
                console.log("VALID USER FOUND: \n" +
                    "Username: " + user.username + 
                    "\nPassword: " + user.password +
                    "\nEmail: " + user.email );
                foundPerson = person;
                return;//to escape the callback function after finding the correct person
            }
        });
        return foundPerson == null ? -1 : foundPerson;
    }

    updateUsername(user, username){
        console.log("Old user's username: " + user.username);
        const userIndex = this.users.findIndex(person => person.username === user.username);

        if(userIndex != -1 && user.username !== username){
            this.users[userIndex].username = username;
        }
        else{
            console.log(userIndex);
            throw new Error("Invalid new username inputted.");
        }

        console.log("New user's username: " + user.username);            
    }
    updateEmail(user, email){
        console.log("Old user's email: " + user.email);
        const userIndex = this.users.findIndex(person => person.email === user.email);

        if(userIndex != -1 && user.email !== email){
            this.users[userIndex].email = email;
        }
        else{
            console.log(userIndex);
            throw new Error("Invalid new username inputted.");
        }

        console.log("New user's email: " + user.email);            
    }
    updatePassword(user, password){
        console.log("Old user's password: " + user.password);
        const userIndex = this.users.findIndex(person => person.password === user.password);

        if(userIndex != -1 && user.password !== password){
            this.users[userIndex].password = password;
        }
        else{
            console.log(userIndex);
            throw new Error("Invalid new username inputted.");
        }

        console.log("New user's password: " + user.password);            
    }

    deleteUser(user){
        const userIndex = this.users.findIndex(person => person === user);

        this.users.splice(userIndex, 1);
    }

}

module.exports = Database;