// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import { showToast } from "@/app/components/Toast";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { createNewUserApi, updateUserApi } from "@/_lib/data-services";

// const schema = {
//   edit: z.object({
//     name: z.string(),
//     lastName: z.string(),
//     newEmail: z.string().email({ message: "Invalid email" }),
//   }),
//   create: z.object({
//     name: z.string(),
//     lastName: z.string(),
//     newEmail: z.string().email({ message: "Invalid email" }),
//   }),
// };

// type FormInput = z.infer<(typeof schema)[keyof typeof schema]>;

// const UserForm = ({ type = "create", userId, onClose, onSubmitMutation }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver:
//       type === "create" ? zodResolver(schema.create) : zodResolver(schema.edit),
//   });

//   const router = useRouter();

//   const { mutate: submitMutate, isPending } = useMutation({
//     mutationFn: type === "create" ? updateUserApi : createNewUserApi,

//     onSuccess: (data: any) => {
//       const successMessage =
//         type === "login" ? "You are logged in" : "Registration successful!";
//       showToast("success", successMessage);
//       setCookie(data.token);
//       router.replace("/user");
//     },
//     onError: (err) => showToast("error", err.message),
//   });

//   const onSubmit: SubmitHandler<FormInput> = (data) => {
//     submitMutate(data);
//   };

//   const initialValues = {
//     name: "",
//     lastName: "",
//     email: "",
//     job: "",
//   };

//   if (type === "edit" && userId) {
//     // Fetch user data and populate initial values (use appropriate data fetching)
//     // ... (replace with your user data fetching logic)
//   }

//   return (
//     <div className="flex items-center justify-center bg-primary-100 h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-8 text-secondary">
//           {type === "login" ? "Login" : "Register"}
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Email
//             </label>

//             <input
//               {...register("email")}
//               type="email"
//               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-xs">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-8">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               {...register("password")}
//               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
//             />
//             {errors.password && (
//               <span className="text-red-500 text-xs">
//                 {errors.password.message}
//               </span>
//             )}
//           </div>

//           <Button type="submit" variant="tertiary">
//             {isPending ? (
//               <Spinner size="small" />
//             ) : type === "login" ? (
//               "Login"
//             ) : (
//               "Submit"
//             )}
//           </Button>
//         </form>

//         <div className="flex items-center justify-center gap-2 mt-4 text-xs">
//           {type === "login" ? (
//             <p>Don&apos;t have an account?</p>
//           ) : (
//             <p>Already have an account?</p>
//           )}

//           <Link
//             href={type === "login" ? "/register" : "/login"}
//             className="text-primary-950 transition-all hover:underline"
//           >
//             {type === "login" ? "Register now" : "Login Now"}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserForm;
