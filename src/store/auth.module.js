import AuthService from '../services/auth.service';

const user = JSON.parse(window.localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user)
                .then(response => {
                    commit('loginSuccess', response)
                    return Promise.resolve(response)
                })
                .catch(error => {
                    commit('loginFailure')
                    return Promise.reject(error)
                });
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout')
        },
        register({ commit }, user) {
            return AuthService.register(user)
                .then(response => {
                    commit('registerSuccess',response );
                    return Promise.resolve(response);
                })
                .catch(error => {
                    commit('registerFailure');
                    return Promise.reject(error)
                });
        }
    },
    mutations: {
        loginSuccess(state, response) {
            state.status.loggedIn = true;
            state.user = response.user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state, response) {
            state.status.loggedIn = true;
            state.user = response.user;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}