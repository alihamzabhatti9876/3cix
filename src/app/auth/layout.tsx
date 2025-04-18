import AuthLayout from "@/components/templates/authLayout";

export default function AuthPageLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
