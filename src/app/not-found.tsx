import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
async function NotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center py-20 gap-10">
        <Image className="w-11/12 max-w-md" src="/images/logo.jpg" height={500} width={500} unoptimized priority alt="404 Error" />
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="font-bebas-neue text-4xl md:text-5xl">Something Went Wrong</h1>
          <Button className="rounded-full w-fit" asChild>
            <Link href="/">Go Back to Homepage</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
