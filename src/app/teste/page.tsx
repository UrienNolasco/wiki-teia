import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Teste() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <iframe
            src="https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=d9089d7c-5795-40cd-9b0c-7492e802c3b6&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="1280"
            height="720"
            allowFullScreen
            title="Formação ABAP_01 - Overview ABAP-20240806_130640-Gravação de Reunião.mp4"
          ></iframe>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
