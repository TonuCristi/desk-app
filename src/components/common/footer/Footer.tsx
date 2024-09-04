import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-20 bg-primary px-4 py-16 text-secondary md:px-8">
      <FooterContact />
      <FooterNav />
    </footer>
  );
}
