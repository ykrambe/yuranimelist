"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const back = () => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between mb-4 mx-4">
      <button className="text-color-primary">
        <ArrowSquareLeft size={32} onClick={back} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
