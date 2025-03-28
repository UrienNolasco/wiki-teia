import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-gray-200 relative">
      <div className="flex items-center gap-2 px-4 bg-gray-200">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <Image
        src={"/squareshomepage1.svg"}
        alt="Home"
        width={300}
        height={200}
        className="absolute top-0 right-0"
      />
    </header>
  );
}
