import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen"
              placeholder="Username"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-lightGreen hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-lightGreen text-white hover:bg-lightGreen-dark focus:outline-none"
          >
            Sign in
          </button>
        </form>
        <p className="text-sm font-light text-gray-400 text-center">
          Don’t have an account yet?{" "}
          <a
            href="/register"
            className="font-medium text-lightGreen hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
