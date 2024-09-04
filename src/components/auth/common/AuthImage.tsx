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
    <div className="hidden h-full overflow-hidden rounded-2xl bg-auth bg-cover bg-center bg-no-repeat text-secondary lg:block">
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center backdrop-blur">
        <h2 className="mb-6 text-3xl font-medium">
          Discovering the Best <br />
          Accessories for Your Desk
        </h2>

        <p className="mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          dicta qui. Sapiente neque doloremque qui?
        </p>

        <div className="mx-auto flex flex-col items-center gap-4 xl:flex-row">
          {tags.map((tag) => (
            <div
              key={tag.text}
              className="flex items-center gap-2 rounded-full border border-secondary px-2.5 py-2"
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
