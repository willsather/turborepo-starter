import Link from "next/link";
import { Suspense } from "react";

import { showHeroCTA } from "@/lib/flags";

const workspace = [
  ["apps/web", "Next.js application"],
  ["packages/ui", "shared components and styles"],
  ["packages/config", "shared project configuration"],
] as const;

const commands = [
  ["pnpm dev", "start the development workspace"],
  ["pnpm build", "build every package and app"],
  ["pnpm test", "run the test suite"],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-12 text-neutral-100 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <header className="border-neutral-800 border-b pb-12">
          <p className="mb-6 font-mono text-neutral-500 text-xs uppercase tracking-[0.18em]">
            Turborepo starter / web
          </p>
          <h1 className="max-w-xl font-semibold text-4xl text-white tracking-[-0.04em] sm:text-5xl">
            A focused starting point for modern web projects.
          </h1>
          <p className="mt-6 max-w-lg text-base text-neutral-400 leading-7">
            A small, production-ready monorepo with a Next.js app, shared UI,
            consistent tooling, and room to grow without getting in the way.
          </p>
        </header>

        <div className="divide-y divide-neutral-800">
          <section className="grid gap-6 py-10 sm:grid-cols-[8rem_1fr]">
            <h2 className="font-mono text-neutral-500 text-xs uppercase tracking-wider">
              Workspace
            </h2>
            <ul className="space-y-5">
              {workspace.map(([name, description]) => (
                <li key={name} className="group">
                  <p className="font-mono text-neutral-200 text-sm transition-colors group-hover:text-white">
                    {name}
                  </p>
                  <p className="mt-1 text-neutral-500 text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 py-10 sm:grid-cols-[8rem_1fr]">
            <h2 className="font-mono text-neutral-500 text-xs uppercase tracking-wider">
              Commands
            </h2>
            <ul className="space-y-5">
              {commands.map(([command, description]) => (
                <li key={command}>
                  <code className="text-neutral-200 text-sm">$ {command}</code>
                  <p className="mt-1 text-neutral-500 text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 py-10 sm:grid-cols-[8rem_1fr]">
            <h2 className="font-mono text-neutral-500 text-xs uppercase tracking-wider">
              Resources
            </h2>
            <nav aria-label="Project resources">
              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <Link
                    className="text-neutral-300 transition-colors hover:text-white"
                    href="https://turbo.build/repo/docs"
                  >
                    Turborepo documentation ↗
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-300 transition-colors hover:text-white"
                    href="https://nextjs.org/docs"
                  >
                    Next.js documentation ↗
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <footer className="flex min-h-16 items-start justify-between gap-6 border-neutral-800 border-t pt-6 font-mono text-xs">
          <p className="text-neutral-600">Ready to make your own.</p>
          <Suspense fallback={null}>
            <CTA />
          </Suspense>
        </footer>
      </div>
    </main>
  );
}

async function CTA() {
  const showCTA = await showHeroCTA();

  if (!showCTA) {
    return null;
  }

  return (
    <Link
      className="text-neutral-400 transition-colors hover:text-white"
      href="https://github.com/willsather/turborepo-starter"
    >
      View source →
    </Link>
  );
}
