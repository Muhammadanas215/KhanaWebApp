import React from 'react';
// import { auth, signInWithEmailAndPassword } from '../config/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../images/logo.png';
import { alpha, styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

// const RedditTextField = styled((props) => (
//   <TextField InputProps={{ disableUnderline: true }} {...props} />
// ))(({ theme }) => ({
//   '& .MuiFilledInput-root': {
//     border: '1px solid #eee',
//     overflow: 'hidden',
//     borderRadius: 4,
//     width: 350,
//     maxWidth: '100%',
//     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     '&:hover': {
//       backgroundColor: 'B0B0AF',
//     },
//     '&.Mui-focused': {
//       backgroundColor: 'B0B0AF',
//       boxShadow: `${alpha('#1d9bf0', 0.25)} 0 0 0 2px`,
//       borderColor: '#1d9bf0',
//     },
//   },
// }));


class Login extends React.Component {
  state = {
    email: 'saylani@admin.com',
    password: '123456'
  }

  render() {

    return (
      <div className='container-fluid signin'>
        <div className='row'>
          <div></div>
          <div>
            <div>
              <h2>
                <img src={logo} width='20%' /><br></br> Khana <span>Sab Kai Liye</span>
              </h2>
            </div>
            <div>
              <h4>Login as an admin</h4>
              <div>
                <input
                  placeholder='Email'
                  type='email'
                  label='Email address'
                  variant='filled'
                  style={{ marginTop: 10 }}
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value })
                  }}
                />
              </div>
              <div>
                <input
                  placeholder='password'
                  type='password'
                  label='Password'
                  variant='filled'
                  style={{ marginTop: 10 }}
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div>
                <Button
                  variant='contained'
                  id='authBtn'
                  onClick={() => {
                    let auth = getAuth()
                    if (this.state.email != '' && this.state.password != '') {
                      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
                        .then(() => {
                          console.log("siginn===")
                          this.setState({ email: '', password: '' })
                          toast.success('Sign in successfully.');
                          setTimeout(() => {
                            window.location = '/home'
                          }, 400);
                        })
                        .catch((error) => {
                          toast.error(error.message);
                        });
                    } else if (this.state.email == '') {
                      toast.error('Email address is required to sign in.');
                    } else if (this.state.password == '') {
                      toast.error('Password is required to sign in.');
                    }
                  }}
                >
                  Sign in
                </Button>
              </div>
              <p id='tc'></p>
            </div>
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
