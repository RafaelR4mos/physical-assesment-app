import Image from "next/image";
import { Inter } from "next/font/google";
import { ImcCards } from "@/components/custom/imc-cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const imcData = [
    { height: 1.70, weight: 69.70 },
    { height: 1.57, weight: 52.40 },
    { height: 1.58, weight: 67.00 },
    { height: 1.75, weight: 69.00 },
    { height: 1.60, weight: 47.10 },
    { height: 1.71, weight: 96.50 },
    { height: 1.63, weight: 48.00 },
    { height: 1.66, weight: 73.20 },
    { height: 1.65, weight: 67.80 },
    { height: 1.61, weight: 68.00 },
    { height: 1.79, weight: 99.50 },
    { height: 1.70, weight: 78.00 },
    { height: 1.53, weight: 49.90 },
    { height: 1.82, weight: 73.90 },
    { height: 1.85, weight: 178.00 },
    { height: 1.67, weight: 81.50 },
    { height: 1.91, weight: 127.00 },
    { height: 1.76, weight: 55.80 },
    { height: 1.73, weight: 76.40 },
    { height: 1.70, weight: 77.83 }
  ]

  return (
    <div className="flex flex-col bg-white max-w-md m-auto p-4">
      <header className="flex flex-row justify-center">
        <h1 className="text-black text-4xl">Fitness Stats</h1>
      </header>

      <main
        className={`flex min-h-screen  lex-col my-6 justify-between ${inter.className}`}>
        <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
          <ImcCards title="Média IMC" data={imcData}/>
        </div>
      </main>
    </div>
  );
}
