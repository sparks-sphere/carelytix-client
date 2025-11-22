"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login'); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button size="lg" className="cursor-pointer" onClick={handleButtonClick}>Go to Admin Dashboard</Button>
    </div>
  );
}
