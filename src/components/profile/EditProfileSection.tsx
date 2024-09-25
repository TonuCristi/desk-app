import Input from "../common/Input";
import Button from "../common/Button";

import { PROFILE_PAGE } from "../../constants/profilePage";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";

export default function EditProfileSection() {
  const { user } = useContext(AuthContext);
  const { register } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
  });

  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-2xl">{PROFILE_PAGE.EDIT_PROFILE_SECTION.TITLE}</h2>
        <form className="flex flex-col gap-3">
          {PROFILE_PAGE.EDIT_PROFILE_SECTION.EDIT_INPUTS.map(
            ({ LABEL, HTML_FOR, PLACEHOLDER, NAME }) => (
              <div key={LABEL} className="flex w-full flex-col gap-1">
                <label htmlFor={HTML_FOR}>{LABEL}</label>
                <Input
                  placeholder={PLACEHOLDER}
                  id={HTML_FOR}
                  {...register(NAME)}
                />
              </div>
            ),
          )}
          <Button w="half" className="mt-2 self-center">
            {PROFILE_PAGE.EDIT_PROFILE_SECTION.BUTTON}
          </Button>
        </form>
      </div>
    </section>
  );
}
