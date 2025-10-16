'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import MainHeader from "@/components/layout/main-header";
import MainSidebar from "@/components/layout/main-sidebar";
import { Loader2 } from 'lucide-react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full">
      <MainSidebar />
      <div className="flex flex-col flex-1">
        <MainHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-muted/30">
            {children}
        </main>
      </div>
    </div>
  );
}
