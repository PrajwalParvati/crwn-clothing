import React from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util'
class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handelChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput type='email' value={this.state.email} name='Email' required label='Email' handelChange={this.handelChange} />
                    <FormInput type='password' handelChange={this.handelChange} value={this.state.password} name='password' label='Password' required />
                    <div className="button">
                        <CustomButton type='submit' >Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )


    }
}
export default SignIn