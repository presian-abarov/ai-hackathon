"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm p-2">
      <h1
        onClick={handleRedirect}
        style={{ cursor: 'pointer' }}
        className="text-xl font-bold text-center text-gray-800"
      >
        TagGPT
      </h1>
    </header>
  );
}
