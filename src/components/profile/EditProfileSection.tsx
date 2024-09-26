import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../common/Input";
import Button from "../common/Button";
import Message from "../common/Message";

import { PROFILE_PAGE } from "../../constants/profilePage";
import { AuthContext } from "../../contexts/AuthContext";
import { EditUser, EditUserSchema } from "../../types/Auth.types";
import { useEditUser } from "./hooks/useEditUser";

export default function EditProfileSection() {
  const { user } = useContext(AuthContext);
  const { isLoading, error, editUser } = useEditUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUser>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
    resolver: zodResolver(EditUserSchema),
  });

  const onSubmit: SubmitHandler<EditUser> = (data) => editUser(data);

  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-2xl">{PROFILE_PAGE.EDIT_PROFILE_SECTION.TITLE}</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {PROFILE_PAGE.EDIT_PROFILE_SECTION.EDIT_INPUTS.map(
            ({ LABEL, HTML_FOR, PLACEHOLDER, NAME }) => (
              <div key={LABEL} className="flex w-full flex-col gap-1">
                <label htmlFor={HTML_FOR}>{LABEL}</label>
                <Input
                  placeholder={PLACEHOLDER}
                  id={HTML_FOR}
                  {...register(NAME)}
                />
                {errors[NAME] && (
                  <Message variant="error">{errors[NAME].message}</Message>
                )}
              </div>
            ),
          )}
          {error && (
            <Message variant="error" className="text-center">
              {error}
            </Message>
          )}
          <Button
            w="half"
            className="mt-2 self-center"
            disabled={isLoading}
            isLoading={isLoading}
          >
            {PROFILE_PAGE.EDIT_PROFILE_SECTION.BUTTON}
          </Button>
        </form>
      </div>
    </section>
  );
}
