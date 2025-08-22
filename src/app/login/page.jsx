import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./components/LoginForm";



export default function Login() {
  return (
    <div className="min-h-screen flex items-center bg-white dark:bg-black justify-center  p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-indigo-700">
          Log in Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
