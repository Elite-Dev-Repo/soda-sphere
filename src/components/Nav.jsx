import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Notification01Icon } from "@hugeicons/core-free-icons";

const Nav = () => {
  return (
    <nav className=" cont h-[80px]  fixed left-0 right-0 top-0 flex items-center justify-between z-1">
      <div className="text-xl font-bold">
        {" "}
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="text-md font-bold">E</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-2xl font-bold">Soda Sphere</div>
      <div className="flex space-x-4">
        <div className="flex items-center gap-4">
          <HugeiconsIcon icon={Notification01Icon} size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
