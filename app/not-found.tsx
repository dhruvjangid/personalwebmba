import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl text-white">This part of the journey doesn&apos;t exist.</h1>
      <Link href="/" className="btn btn-primary mt-10">
        Back to the beginning
      </Link>
    </main>
  );
}
