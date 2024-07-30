import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heartbeat } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface HeartCard {
  title?: string
  data: imcData[]
}

export type imcData = {
  height: number
  weight: number
  imc: number
  pas: number
  pad: number
  fCrep: number
}


export function HeartCards({ title, data }: HeartCard) {

  // function averageHeartFrequency() {
  
  // }


  return (
    <Card className="py-2 w-full">
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <div>
        <CardTitle className="mb-1">Média Pressão Arterial</CardTitle>
        <CardDescription>{`Total de: ${data.length} pessoas`}</CardDescription>
        </div>
        <Heartbeat size={32}/>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <strong className="text-3xl">00 mm</strong>
          
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
