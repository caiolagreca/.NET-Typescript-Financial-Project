import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

type RegisterFormsInputs = {
  userName: string;
  email: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required."),
  email: Yup.string().required("Email is required."),
  password: Yup.string().required("Password is required"),
});

const RegisterPage = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handleRegister = (form: RegisterFormsInputs) => {
    registerUser(form.userName, form.password, form.email);
  };
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Create a new account
        </h1>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
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
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-lightGreen text-white hover:bg-lightGreen-dark focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
