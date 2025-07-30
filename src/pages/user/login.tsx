// import login from '../../components/login/login'
import dynamic from 'next/dynamic'


const LoginPage = dynamic(()=> import ('../../components/login/login'), { ssr: false},
);

const LoginPageHome = () => {
<LoginPage/>
}
export default LoginPageHome