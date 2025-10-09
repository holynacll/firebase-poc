import MainHeader from "@/components/layout/main-header";
import MainSidebar from "@/components/layout/main-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <MainSidebar />
      <div className="flex flex-col flex-1">
        <MainHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background animate-fade-in-up">
            {children}
        </main>
      </div>
    </div>
  );
}
