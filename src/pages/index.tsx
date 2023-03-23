import Image from "next/image";
import digital from "../../public/digital.svg";
import Digital from "@/components/digital";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black relative p-10 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-image [background-size:auto_100%]">
        <div className="absolute inset-0 bg-grid"></div>
      </div>
      <div className="fixed top-2 w-full flex flex-col justify-center items-center text-white text-sm">
        <div className="">Inspired & source :</div>
        <Link href={"https://www.artstation.com/artwork/o1Ryz"} target="_blank">
          SVG Sci Fi Interface
        </Link>
        <Link
          href={"https://uiverse.io/Nawsome/cowardly-squid-50"}
          target="_blank"
        >
          CSS Animation
        </Link>
      </div>
      <Digital />
      <div className="fixed bottom-2 w-full flex flex-col justify-center items-center text-white text-sm">
        <div className="">Made with :</div>
        <Link href={"https://nextjs.org"} target="_blank">
          NextJS
        </Link>
        <Link href={"https://tailwindcss.com"} target="_blank">
          TailwindCSS
        </Link>
        <Link href={"https://www.framer.com/motion"} target="_blank">
          Framer motion
        </Link>
      </div>
    </main>
  );
}
