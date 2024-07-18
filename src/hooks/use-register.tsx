import axiosInstance from "@/lib/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

export default function useRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const schema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    fname: z.string().min(3, {
      message: "Your first name must be at least 3 characters long",
    }),
    lname: z.string().min(3, {
      message: "Last name must be at least 2 characters long",
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fname: "",
      lname: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      setLoading(false);
      return;
    }
    toast.promise(
      async () => {
        const { confirmPassword, ...data } = values;
        try {
          await axiosInstance.get("/sanctum/csrf-cookie");
          const res = await axiosInstance.post("/api/auth/register", data, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          return res.data;
        } catch (error) {
          console.log(error)
          throw error;
        }
      },
      {
        loading: "Signing you up...",
        success: (data) => {
          if (data) {
            // form.reset();
            // some stuff
            router.push("/verify-email?email=" + values.email);
            return "Registered successfully";
          }
        },
        error: (error) => {
          form.setError("email", {
            type: "manual",
            message: error?.message,
          });
          if (error?.response?.data?.errors) {
            const errors = error.response.data.errors;
            for (const key in errors) {
              form.setError(key as any, {
                type: "manual",
                message: errors[key][0],
              });
            }
          }
          return error?.response?.data?.message;
        },
        finally: () => {
          setLoading(false);
        },
      },
    );
  };

  return { register, handleSubmit, errors, onSubmit, loading, form };
}
