import { useForm } from "react-hook-form";
import { PROFILE_PAGE } from "../../constants/profilePage";
import Button from "../common/Button";
import Input from "../common/Input";

export default function ChangePasswordSection() {
  const { register } = useForm();

  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-2xl">
          {PROFILE_PAGE.RESET_PASSWORD_SECTION.TITLE}
        </h2>
        <form className="flex flex-col gap-3">
          {PROFILE_PAGE.RESET_PASSWORD_SECTION.EDIT_INPUTS.map(
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
            {PROFILE_PAGE.RESET_PASSWORD_SECTION.BUTTON}
          </Button>
        </form>
      </div>
    </section>
  );
}
