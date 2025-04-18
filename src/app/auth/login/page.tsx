import LoginPage from "@/components/pages/auth/login"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Page",
    description: "Here is the description about login page",
  };

const Page = () => {
    return (
        <LoginPage />
    )
}

export default Page;