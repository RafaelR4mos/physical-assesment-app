import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  imcLabel: string;
}

export function ImcCards({ title, data }: ImcCard) {
  const [imcResponse, setImcResponse] = useState<imcResponse>()

  function averageImc(data: imcData[]): imcResponse {
    const averageIMC = ((data.map((person) => Math.round(person.weight / (person.height * 2))).reduce((acc, curr) => acc + curr, 0)) / data.length)
    let imcLabel = 'NORMAL';

    if(averageIMC < 18.5) imcLabel = "MAGREZA"
    if (averageIMC >= 18.5 && averageIMC <= 24.99) imcLabel = "NORMAL"
    if (averageIMC >= 25 && averageIMC <= 29.99) imcLabel = "SOBREPESO"
    if (averageIMC >= 30 && averageIMC <= 39.99) imcLabel = "OBESIDADE"
    if (averageIMC >= 40) imcLabel = "OBESIDADE GRAVE"

    console.log(averageIMC)

    return {averageIMC, imcLabel}
  }

  useEffect(() => {
    setImcResponse(averageImc(data))
  }, [])

  console.log(imcResponse)

  return (
    <Card className="py-8">
      <CardHeader>
        <CardTitle>Média IMC</CardTitle>
        <CardDescription>{`Total de: ${data.length} pessoas`}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <strong>{imcResponse?.averageIMC}</strong>
          <p>{imcResponse?.imcLabel}</p>
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
