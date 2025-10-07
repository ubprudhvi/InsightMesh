import { Button, Input } from "@mui/material";
import { useRouter } from "next/router";
import {signIn} from '@/routes';


const Header = () => {
    const router = useRouter();

    const homeFunctions = [
        { name: 'About', route: '/about' },
        { name: 'Help', route: '/help' },
        { name: 'Sign In', route: signIn },
    ]

    return (
        <>

            <img src="/favicon.png" alt="Logo" width={50} height={50} />
            <Input
                placeholder="Search..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        // router.push(`/search?query=${e.currentTarget.value}`);
                    }
                }}
            />
            {homeFunctions.map((item: Record<string, string>) => {
                return (
                    <Button
                        key={item.name}
                        onClick={() => router.push(item.route)}
                    >
                        {item.name}
                    </Button>
                )
            })}
        </>
    )
}
export default Header;