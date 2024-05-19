
import axios from 'axios';
import Cookies from 'js-cookie'
import { setAuthorizationToken } from '../helpers/Token/setAuthorizationToken';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const mainURL = useSelector(state => state.aspareSlice.mainURL);

    const login =async (username, password) => {
        return await axios.post(`${mainURL}/Login`, { userNameOrEmail:username, password :password})
            .then(user => {
                console.log(user.data)
                console.log(user.status)
             
                if (user.status) {
                    const { token } = user.data;
                    console.log(token);
                    // localStorage.setItem("jwtToken", token.accessToken);
                    Cookies.set('token',token.accessToken,{secure:true,sameSite:true})
                    Cookies.set('refreshToken',token.refreshToken,{secure:true,sameSite:true})
                    // localStorage.setItem("refreshToken", token.refreshToken);
                    setAuthorizationToken(token);
                }
                return user.data;
            })
            .catch(err => console.log(err));
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setAuthorizationToken(false);
    };

    return { login, logout };
};

export default useAuth;
