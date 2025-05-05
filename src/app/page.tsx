"use client";
import Header from "@/components/Header";
import GenerateCard from "@/components/GenerateCard";

export default function Home() {

  const generateModel = async () => {};

  return (
    <>
      <Header />
      <div className="grid justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] sm:items-start">
          <GenerateCard />
          <GenerateCard />
        </main>
      </div>
    </>
  );
}
