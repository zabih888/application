"use client";
import validation from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form = () => {
  const schema = z.object({
    email: validation.email,
    password: validation.password,
  });

  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const submitForm = useMutation({
    mutationFn: async () => {
      const values = form.getValues();
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => {
        submitForm.mutate();
      })}
    >
      <TextInput size={"lg"} error={form.formState.errors.email?.message} placeholder="email" label="email" {...form.register("email")} />
      <PasswordInput
        size={"lg"}
        error={form.formState.errors.password?.message}
        placeholder="password"
        label="password"
        {...form.register("password")}
      />
      <Button type="submit" fullWidth mt="xl" size="md">
        Login
      </Button>
    </form>
  );
};

export default Form;
