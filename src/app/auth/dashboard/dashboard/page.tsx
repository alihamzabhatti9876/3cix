import DashboardPage from "@/components/pages/dashboard/dashboard"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard PAge",
    description: "Here is the description about dashboard page",
  };

  
const Page = () => {
    return (
        <DashboardPage />
    )
}

export default Page;