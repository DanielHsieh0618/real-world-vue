export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user && user.accessToken) {
        return {
            Authorization: 'Bearer ' + user.token,
            //'x-access-token': user.accessToken   //for node.js server
        }
    } else {
        return {}
    }
}