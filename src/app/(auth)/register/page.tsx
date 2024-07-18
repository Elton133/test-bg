import RegisterForm from "@components/forms/sign-up-form";

export default function Register() {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-2 sm:py-[2%]">
      <div className={"v-stack gap-6 h-full"}>
        <div className={"v-stack"}>
          <h1 className="text-2xl font-semibold">Sign up</h1>
          <p className={"text-sm font-medium text-[#70787C]"}>
            Your journey to legal mastery begins here!
          </p>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
