export default class User {
    constructor({ email, username, password, image, bio  }) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.image = image;
    }
}