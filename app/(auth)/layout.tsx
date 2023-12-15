import { Logo } from "./_components/Logo"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            {/* <nav className="bg-red-500 w-full">
                Auth Navbar
            </nav> */}
            <Logo />
            {children}
        </div>
    );
}

export default AuthLayout;