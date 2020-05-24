export default class User {
    constructor({ username, email, password, bio, image }) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.image = image;
    }
}