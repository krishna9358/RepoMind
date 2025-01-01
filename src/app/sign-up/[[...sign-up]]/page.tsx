import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex justify-center h-screen items-center">
        <SignUp />
    </main>
  );
}