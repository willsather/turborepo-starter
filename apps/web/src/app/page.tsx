import Image from "next/image";

import { Button } from "@repo/ui/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <Image
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
          <span className="font-bold text-3xl">+</span>
          <Image
            src="/turborepo.svg"
            alt="Turborepo Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">
          Welcome to Your Turbocharged Next.js App
        </h1>

        <p className="mb-8 text-gray-600 text-lg">
          This starter is powered by <strong>Next.js</strong> and{" "}
          <strong>Turborepo</strong>, optimized for speed, scalability, and
          smooth DX.
        </p>

        <a href="https://nextjs.org/docs">
          <Button>Learn More</Button>
        </a>
      </div>
    </main>
  );
}
