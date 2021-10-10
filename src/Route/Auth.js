import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Auth {
    constructor(){
        this.authenticated = false
    }

    getAccessToken = () => {
		return window.localStorage.getItem('Near_By_You');
	};

    // login(cb){
    //     this.authenticated = true
    //     cb()
    // }

    // logout(cb){
    //     this.authenticated = false
    //     cb()
    // }

    isAuthenticated(){
        const access_token = this.getAccessToken();

        if (!access_token) {
            localStorage.removeItem('Near_By_You');
            delete axios.defaults.headers.common['x-auth-token'];
			return false;
		}

        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;

        console.log("decoded.exp :- ", decoded.exp);

        console.log("currentTime :- ", currentTime);
        
		if (decoded.exp < currentTime) {
            localStorage.removeItem('Near_By_You');            
            delete axios.defaults.headers.common['x-auth-token'];
			return false;
		}

        axios.defaults.headers.common['x-auth-token'] = access_token;
        return true;
        // return this.authenticated;
    }
}

export default new Auth()