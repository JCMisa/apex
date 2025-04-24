import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between gap-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Apex</h2>
        </Link>

        <Button
          className="cursor-pointer"
          variant={"destructive"}
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          Sign Out
        </Button>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
