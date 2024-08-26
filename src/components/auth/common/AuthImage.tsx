import { HiMiniReceiptPercent, HiMiniShoppingCart } from "react-icons/hi2";

const tags = [
  {
    text: "100% Guarantee",
    icon: <HiMiniReceiptPercent />,
  },
  {
    text: "Free delivery in Romania",
    icon: <HiMiniShoppingCart />,
  },
];

export default function AuthImage() {
  return (
    <div className="bg-auth h-full bg-center bg-cover bg-no-repeat rounded-2xl text-slate-50 overflow-hidden hidden lg:block">
      <div className="backdrop-blur h-full w-full p-8 flex flex-col justify-center text-center items-center">
        <h2 className="text-3xl mb-6 font-medium">
          Discovering the Best <br />
          Accessories for Your Desk
        </h2>

        <p className="mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          dicta qui. Sapiente neque doloremque qui?
        </p>

        <div className="flex items-center mx-auto gap-4 flex-col xl:flex-row">
          {tags.map((tag) => (
            <div
              key={tag.text}
              className="border border-slate-50 flex items-center gap-2 py-2 px-2.5 rounded-full"
            >
              <span className="text-xl">{tag.icon}</span>
              <p>{tag.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
