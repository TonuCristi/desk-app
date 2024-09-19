import { SubmitHandler, useForm } from "react-hook-form";

const filters = [
  {
    title: "Wool",
    htmlFor: "wool",
  },
  {
    title: "Wood",
    htmlFor: "wood",
  },
];

export default function Filter() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full">
      <h3 className="font-semibold">Material</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        {/* <ul className="flex flex-col gap-1"> */}
        {filters.map(({ title, htmlFor }) => (
          <div key={title} className="flex items-center gap-2 font-medium">
            <input type="checkbox" id={htmlFor} {...register(htmlFor)} />
            <label htmlFor={htmlFor}>{title}</label>
          </div>
        ))}
        {/* </ul> */}
      </form>
    </div>
  );
}
