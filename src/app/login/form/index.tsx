"use client";
import services from "@/services";
import validation from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form = () => {
  const router = useRouter();
  const schema = z.object({
    email: validation.email,
    password: validation.password,
  });

  type Schema = z.infer<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      const { accessToken } = await services.login({
        email,
        password,
      });
      setAuthTokenAndRedirect(accessToken);
    },
  });

  const setAuthTokenAndRedirect = (accessToken: string) => {
    setCookie("token", accessToken);
    router.replace("/");
  };

  return (
    <form
      onSubmit={handleSubmit(() => {
        mutate();
      })}
    >
      <TextInput size={"lg"} error={errors.email?.message} placeholder="email" label="email" {...register("email")} />
      <PasswordInput size={"lg"} error={errors.password?.message} placeholder="password" label="password" {...register("password")} />
      <Button loading={isPending} type="submit" fullWidth mt="xl" size="md">
        Login
      </Button>
    </form>
  );
};

export default Form;
