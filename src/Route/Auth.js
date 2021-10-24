import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { getAuth } from "firebase/auth";

class Auth {
    constructor() {
        this.authenticated = false
    }

    getAccessToken = () => {
       
        if (window.localStorage.getItem("Near_By_You_google")) {
            console.log("google token")
            return {
                access_tocken: window.localStorage.getItem("Near_By_You_google"),
                type: "google"
            }
        }
        else if (window.localStorage.getItem('Near_By_You')) {
            return {
                access_tocken: window.localStorage.getItem("Near_By_You"),
                type: "normal"
            };
        }


    };

    // login(cb){
    //     this.authenticated = true
    //     cb()
    // }

    logout() {
        localStorage.removeItem('Near_By_You');
        localStorage.removeItem('Near_By_You_google');
        localStorage.removeItem('Near_By_You_Client');
        delete axios.defaults.headers.common['x-auth-token'];
        delete axios.defaults.headers.common['g-auth-token'];
    }

    isAuthenticated() {
        const access_token = this.getAccessToken();
       
        // console.log("access_tocken===>", access_token.access_token)

        if (!access_token) {
            localStorage.removeItem('Near_By_You');
            localStorage.removeItem('Near_By_You_Client');
            delete axios.defaults.headers.common['x-auth-token'];
            delete axios.defaults.headers.common['g-auth-token'];
            return false;
        }

        if (access_token.type == "normal") {
            const decoded = jwtDecode(access_token.access_tocken);
            const currentTime = Date.now() / 1000;

            console.log("decoded.exp :- ", decoded.exp);

            console.log("currentTime :- ", currentTime);

            if (decoded.exp < currentTime) {
                localStorage.removeItem('Near_By_You');
                localStorage.removeItem('Near_By_You_Client');
                delete axios.defaults.headers.common['g-auth-token'];
                return false;
            }

            axios.defaults.headers.common['x-auth-token'] = access_token.access_tocken;
            return true;
        }
        else {
           
            axios.defaults.headers.common['g-auth-token'] =access_token.access_tocken;
            return true;
        }


        // return this.authenticated;
    }
}

export default new Auth()