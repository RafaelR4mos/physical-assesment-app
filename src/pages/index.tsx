import Image from "next/image";
import { Inter } from "next/font/google";
import { ImcCards } from "@/components/custom/imc-cards";
import { Header } from "@/components/custom/header";
import { imcData } from "@/components/custom/heart-cards copy";
import { HeartCards } from "@/components/custom/heart-cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const imcData: imcData[] = [
    { height: 1.70, weight: 69.70, imc: 24.12, pas: 127, pad: 77, fCrep: 68 },
    { height: 1.57, weight: 52.40, imc: 21.26, pas: 112, pad: 77, fCrep: 84 },
    { height: 1.58, weight: 67.00, imc: 26.84, pas: 108, pad: 69, fCrep: 84 },
    { height: 1.75, weight: 69.00, imc: 22.53, pas: 155, pad: 87, fCrep: 71 },
    { height: 1.60, weight: 47.10, imc: 18.40, pas: 122, pad: 80, fCrep: 74 },
    { height: 1.71, weight: 96.50, imc: 33.00, pas: 158, pad: 98, fCrep: 132 },
    { height: 1.63, weight: 48.00, imc: 18.07, pas: 116, pad: 73, fCrep: 85 },
    { height: 1.66, weight: 73.20, imc: 26.56, pas: 133, pad: 68, fCrep: 62 },
    { height: 1.65, weight: 67.80, imc: 24.90, pas: 138, pad: 90, fCrep: 83 },
    { height: 1.61, weight: 68.00, imc: 26.23, pas: 125, pad: 82, fCrep: 74 },
    { height: 0.00, weight: 0.00, imc: 0.00, pas: 0, pad: 0, fCrep: 0 },
    { height: 1.79, weight: 99.50, imc: 31.05, pas: 161, pad: 93, fCrep: 94 },
    { height: 1.70, weight: 78.00, imc: 26.99, pas: 133, pad: 88, fCrep: 79 },
    { height: 1.53, weight: 49.90, imc: 21.32, pas: 112, pad: 76, fCrep: 109 },
    { height: 1.82, weight: 73.90, imc: 22.31, pas: 148, pad: 75, fCrep: 65 },
    { height: 1.85, weight: 178.00, imc: 52.01, pas: 158, pad: 91, fCrep: 70 },
    { height: 1.67, weight: 81.50, imc: 29.22, pas: 120, pad: 74, fCrep: 73 },
    { height: 0.00, weight: 0.00, imc: 0.00, pas: 0, pad: 0, fCrep: 0 },
    { height: 0.00, weight: 0.00, imc: 0.00, pas: 0, pad: 0, fCrep: 0 },
    { height: 1.91, weight: 127.00, imc: 34.81, pas: 174, pad: 99, fCrep: 95 },
    { height: 1.76, weight: 55.80, imc: 18.01, pas: 135, pad: 75, fCrep: 59 },
    { height: 1.73, weight: 76.40, imc: 25.53, pas: 117, pad: 82, fCrep: 85 },
    { height: 1.70, weight: 77.83, imc: 26.48, pas: 134.32, pad: 81.79, fCrep: 81 }
  ]

  return (
    <div className="flex flex-col bg-custom-bg max-w-md m-auto p-4">
      <Header/>

      <main
        className={`flex min-h-screen  flex-col my-6 justify-between ${inter.className}`}>
        <div className="z-10 flex-col gap-4 w-full items-center justify-between font-mono text-sm lg:flex">
          <ImcCards title="Média IMC" data={imcData}/>
          <HeartCards data={imcData} />
        </div>
      </main>
    </div>
  );
}
