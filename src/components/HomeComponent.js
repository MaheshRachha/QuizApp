import React,{Component ,useEffect} from 'react';

class Home extends Component{
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    function onSignIn(googleUser) {
      // get user profile information
      console.log('User is:'+JSON.stringify(googleUser.getBasicProfile()))
    }
  }
    render() {

        return (    
          <div className="container">
            <header className="p-2">
              <div className="row">
                <div className="col-6">
                  <h3>Dashboard</h3>
                </div>
              </div>
            </header>
            <meta name="google-signin-client_id" content="473525258129-tfubcdl9em6em7hp235grsrhbjrv60pf.apps.googleusercontent.com"></meta>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
            <center>
            <h1 >
                   Login
              </h1>
              </center>
              <div class="g-signin2" data-onsuccess="onSignIn"></div>
  <button onclick="signOut()">Sign out</button>
            </div>
        );
      }
}
export default Home;
