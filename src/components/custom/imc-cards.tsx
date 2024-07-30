import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Person } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface ImcCard {
  title: string
  data: imcData[]
}

type imcData = {
  height: number
  weight: number
}

type imcResponse = {
  averageIMC: number;
  imcLabel: imcLabel;
}

type imcLabel = "MAGREZA" | "NORMAL" | "SOBREPESO" | "OBESIDADE" | "OBESIDADE_GRAVE"

export function ImcCards({ title, data }: ImcCard) {
  const [imcResponse, setImcResponse] = useState<imcResponse>()

  function averageImc(data: imcData[]): imcResponse {
    const averageIMC = ((data.map((person) => {
       return Math.round(person.weight / (person.height != 0 ? (person.height * 2) : 1))
    }).reduce((acc, curr) => acc += curr, 0)) / data.length)
    let imcLabel: imcLabel = 'NORMAL';

    if(averageIMC < 18.5) imcLabel = "MAGREZA"
    if (averageIMC >= 18.5 && averageIMC <= 24.99) imcLabel = "NORMAL"
    if (averageIMC >= 25 && averageIMC <= 29.99) imcLabel = "SOBREPESO"
    if (averageIMC >= 30 && averageIMC <= 39.99) imcLabel = "OBESIDADE"
    if (averageIMC >= 40) imcLabel = "OBESIDADE_GRAVE"

    console.log(averageIMC)

    return {averageIMC, imcLabel}
  }

  useEffect(() => {
    setImcResponse(averageImc(data))
  }, [])

  console.log(imcResponse)

  return (
    <Card className="py-2 w-full">
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <div>
        <CardTitle className="mb-1">Média IMC</CardTitle>
        <CardDescription>{`Total de: ${data.length} pessoas`}</CardDescription>
        </div>
        <Person size={32}/>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <strong className="text-3xl">{imcResponse?.averageIMC.toFixed(2)}</strong>
          {imcResponse?.imcLabel === "MAGREZA" && <p className="text-sky-600 text-lg">Magreza</p>}
          {imcResponse?.imcLabel === "NORMAL" && <p className="text-green-600 text-lg">Normal</p>}
          {imcResponse?.imcLabel === "SOBREPESO" && <p className="text-orange-500 text-lg">Sobrepeso</p>}
          {imcResponse?.imcLabel === "OBESIDADE" && <p className="text-red-600 text-lg">Obesidade</p>}
          {imcResponse?.imcLabel === "OBESIDADE_GRAVE" && <p className="text-red-900 text-lg">Obesidade Grave</p>}
          
        </div>
        <div className="flex gap-1 justify-center items-center mt-2">
          <div className="flex-1 max-w-[62px] h-[4px] bg-blue-200 rounded-sm"></div>
          <div className="flex-1 max-w-[62px] h-[4px] bg-green-400 rounded-sm"></div>
          <div className="flex-1 max-w-[62px] h-[4px] bg-orange-400 rounded-sm"></div>
          <div className="flex-1 max-w-[62px] h-[4px] bg-red-500 rounded-sm"></div>
          <div className="flex-1 max-w-[62px] h-[4px] bg-red-800 rounded-sm"></div>
        </div>
        <div className="flex justify-between">
        </div>
      </CardContent>
    </Card>
  );
}
