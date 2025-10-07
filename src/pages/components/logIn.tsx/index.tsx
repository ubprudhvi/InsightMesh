import { Box, Button, Input, ThemeProvider, } from "@mui/material";
import { get } from "http";
import { useRouter } from "next/router";
import { useState } from "react";
import theme from "@/theme";


const RegistrationPage = () => {

    const [isSignInPage, setIsSignInPage] = useState(true);

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const getSignInForm = () => {
        return (
            <>
                <Input placeholder="UserName/Email" onChange={handleUserNameChange} />
                <Input placeholder="Enter Password" type="password" />
            </>
        )
    }

    const getSignUpForm = () => {
        return (
            <>
                <Input placeholder="First Name" onChange={handleUserNameChange} />
                <Input placeholder="Last Name" onChange={handleUserNameChange} />
                <Input placeholder="Email" type="email" onChange={handleUserEmailChange} />
            </>
        )
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        innerHeight: '200px',
                        innerWidth: '300px',
                        border: '1px solid black',
                        borderRadius: '8px',
                        padding: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '12px',
                        // position: 'absolute',
                        top: '50%',
                        left: '50%',
                        // margin:'40px'
                    }}
                >
                    <Box>
                        {isSignInPage ? <span>
                            Create an Account <Button onClick={() => setIsSignInPage(false)}>Click here</Button>
                        </span> :
                            <span>Do you have an account already? <Button onClick={() => setIsSignInPage(true)}>click</Button>here to sign in</span>}
                    </Box>
                    <form>
                        {isSignInPage ?
                            getSignInForm() :
                            getSignUpForm()
                        }
                        <Button type='submit' children={isSignInPage ? 'Sign In' : 'Sign Up'} />
                    </form>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default RegistrationPage;