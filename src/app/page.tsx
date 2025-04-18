import AuthLayout from "@/components/templates/authLayout";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
