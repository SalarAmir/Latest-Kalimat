import { useContext } from 'react';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import UserContext from '../contexts/UserContext';
import './login.css'; // Import the CSS file here
const clientId = '467769474365-subo3k3h1cbp63u3pec5f4q6etdmtuqq.apps.googleusercontent.com';

function Login(){

    const {setUser} = useContext(UserContext);
    const [cookies, setCookie] = useCookies(['user']);
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        setCookie('user', res.profileObj, { path: '/' })
        console.log("cookies:", cookies)
        setUser(res.profileObj);
        //rfresh the page:
        // window.location.reload();

      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // window.location.reload();
        
      };
    
      return (
        <div id="g_login_button">
          <GoogleLogin
            clientId={clientId}
            buttonText="صفحة شخصية"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            theme="dark" // this will make the button text white
            // style={{ marginTop: '100px' }}
          />
        </div>
      );
}

export default Login;
