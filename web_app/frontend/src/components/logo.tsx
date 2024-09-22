import Link from "next/link";
import { Text } from "@/components/ui/text";
import logo from "/public/logo.png";
import Image from "next/image";

export default function Logo({
  variant = "large",
  className,
  theme = "dark",
}: {
  variant?: "large" | "small";
  className?: string;
  theme?: "light" | "dark";
}): JSX.Element {
  return (
    <Link href={"/"} className="block w-fit text-black">
      <p className="sr-only">Padhai Lekhai</p>
      <Image src={logo} alt="logo" height={1000} width={1000} className="max-h-32 w-auto" />
    </Link>
  );
}
