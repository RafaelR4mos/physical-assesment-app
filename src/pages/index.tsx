import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { SummaryCard } from "@/components/summary-card";
import { FilterBtn } from "@/components/filter-button";
import { useState } from "react";
import { Card } from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filter, setFilter] = useState("01/08");

  function handleDateFilter(filter: string) {
    setFilter(filter);
  }

  return (
    <div
      className={`flex flex-col bg-custom-bg max-w-md m-auto p-8 ${inter.className}`}>
      <Header />

      <main className="flex min-h-screen flex-col my-6">
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex flex-row gap-2">
            <FilterBtn
              className={`${
                filter === "01/08"
                  ? "bg-primary-custom text-white"
                  : "bg-white border-gray-300 text-black"
              } text-xs py-1 px-2 rounded-lg border`}
              text="01/08"
              onClick={() => handleDateFilter("01/08")}
            />
            <FilterBtn
              className={`${
                filter === "01/09"
                  ? "bg-primary-custom text-white"
                  : "bg-white border-gray-300 text-black"
              } text-xs py-1 px-2 rounded-lg border`}
              text="01/09"
              onClick={() => handleDateFilter("01/09")}
            />
            <FilterBtn
              className={`${
                filter === "01/10"
                  ? "bg-primary-custom text-white"
                  : "bg-white border-gray-300 text-black"
              } text-xs py-1 px-2 rounded-lg border`}
              text="01/10"
              onClick={() => handleDateFilter("01/10")}
            />
          </div>
          <span className="text-xs text-gray-500">{`dados de: ${filter}`}</span>
        </div>
        <div className="flex flex-row gap-3 md:gap-6">
          <SummaryCard
            type="people"
            data={20}
          />
          <SummaryCard
            type="weight"
            data={60}
          />
          <SummaryCard
            type="height"
            data={1.65}
          />
        </div>
        <div className="flex-col gap-4 w-full mt-4">
          <Card type="imc" data={22.32} peopleQuantity={20}/>
        </div>
      </main>
    </div>
  );
}
