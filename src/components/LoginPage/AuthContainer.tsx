import { useState } from "react";
import AuthForm from "./AuthForm";
import SocialLogin from "./SocialLogin";

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" flex items-center justify-center px-4 py-26">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Main auth card */}
      <div className="relative w-full max-w-md">
        <div className="relative backdrop-blur-sm bg-background/80 border border-border/50 rounded-2xl shadow-2xl p-8">
          <AuthForm isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
