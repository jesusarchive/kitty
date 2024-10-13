import { LoginForm } from "./components/login-form";

function LoginPageInternals() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="h-full w-full flex">
      <LoginPageInternals />
    </div>
  );
}
