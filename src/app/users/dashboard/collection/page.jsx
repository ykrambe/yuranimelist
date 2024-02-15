import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const Page = () => {
  return (
    <section className="mt-4 w-full">
      <Header title={"Koleksi Saya"}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="..." width={320} height={320} className="w-full"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">judul anime adalah apa ya</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="..." width={320} height={320} className="w-full"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">judul anime adalah apa ya</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="..." width={320} height={320} className="w-full"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">judul anime adalah apa ya</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="..." width={320} height={320} className="w-full"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">judul anime adalah apa ya</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
