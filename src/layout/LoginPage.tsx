import Navigation from "@/components/HomePage/Navigation";
import AuthContainer from "@/components/LoginPage/AuthContainer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <AuthContainer />
    </div>
  );
}
