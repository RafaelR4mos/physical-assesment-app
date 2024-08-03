import { heartBeatResponse, heartFrequencyResponse } from "@/types/dataTypes";
import { Heartbeat } from "@phosphor-icons/react";
import { Stethoscope } from "lucide-react";
import { CardTooltip } from "./card-tooltip";

interface CarHeartProps extends heartBeatResponse {}

export function CardHeartBeat({
  heartBeatAverage,
  label,
  peopleQuantity,
}: CarHeartProps) {
  const colorsHeartCard = {
    EXCELENTE: "bg-green-200",
    BOA: "bg-green-100",
    NORMAL: "bg-white",
    ELEVADA: "bg-amber-100",
    RUIM: "bg-rose-200",
    DESCONHECIDO: "bg-white",
  };

  const colorsHeartIcon = {
    EXCELENTE: "text-green-700",
    BOA: "text-green-500",
    NORMAL: "text-white",
    ELEVADA: "text-amber-500",
    RUIM: "text-rose-700",
    DESCONHECIDO: "text-white",
  };

  return (
    <>
      <div
        className={`flex flex-col ${colorsHeartCard[label]}  w-full   min-h-[215px] ssssrounded-lg p-6`}>
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-semibold">BATIMENTO CARDÍACO</h2>
          <span className="text-xs text-gray-500">{`de ${peopleQuantity} pessoas`}</span>
        </div>

        <div className="flex flex-col items-center justify-center py-3">
          <Heartbeat
            weight="fill"
            size={24}
            className={`${colorsHeartIcon[label]}`}
          />
          <strong className="text-2xl text-center">
            {heartBeatAverage}
            <span className="text-xs font-normal"> bpm</span>
          </strong>
          <span>{label}</span>
          <CardTooltip
            title="Índices baseados por: h3.med.com.br. Valores de FC normal para homens em repouso."
            href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
          />
        </div>
      </div>
    </>
  );
}
