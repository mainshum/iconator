import { FormGroup } from "@/components/form-group";
import Input from "@/components/input";
import Button from "@/components/button";
import { generateRouter } from "@/server/api/routers/generate";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
  });

  const genIcon = api.generate.generateIcon.useMutation();

  function updateForm(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [key]: e.target.value });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    genIcon.mutate({ prompt: form.prompt });
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <Button
          onClick={() => {
            signIn().catch(console.error);
          }}
        >
          Login
        </Button>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-start gap-4"
        >
          <FormGroup>
            <label>Prompt</label>
            <Input onChange={updateForm("prompt")} />
          </FormGroup>
          <Button className="bg-blue-400 px-4 py-2 hover:bg-blue-500">
            Submit
          </Button>
        </form>
      </main>
    </>
  );
};

export default GeneratePage;
