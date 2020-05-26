import React, { useCallback, Component } from 'react'

// import app from './Components/config/fire';


// const SignUp = ({ history }) => {
//     const handleSignUp = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//             await app
//                 .auth()
//                 .createUserWithEmailAndPassword(email.value, password.value);
//             history.push("/");
//         } catch (e) {
//             alert(e);
//         }
//     }, [history]);

//     return (
//         <div>
//             <h1>SignUp</h1>
//             <from onSubmit={handleSignUp}>
//                 <label>
//                     Email
//                     <input name="email" type="email" placeholder="Email" />
//                 </label>
//                 <label>
//                     Password
//                     <input name="password" type="password" placeholder="Password" />
//                 </label>
//                 <button type="submit">SignUp</button>
//             </from>
//         </div>
//     );
// };
class SignUp extends Component {}
export default SignUp;
