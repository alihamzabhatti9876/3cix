import DashboardLayout from "@/components/templates/dashboardLayout";

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
