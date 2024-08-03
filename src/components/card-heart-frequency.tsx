import { heartFrequencyResponse } from "@/types/dataTypes";
import { Stethoscope } from "lucide-react";
import { CardTooltip } from "./card-tooltip";

interface CarHeartProps extends heartFrequencyResponse {
  peopleQuantity: number;
}

export function CardHeartFrequency({
  heartAverageFrequency,
  label,
  peopleQuantity,
}: CarHeartProps) {
  const colorsHeartCard = {
    NORMAL: "bg-green-100",
    ELEVADO: "bg-amber-100",
    HIPERTENSAO_MODERADA: "bg-rose-200",
    HIPERTENSAO_GRAVE: "bg-rose-500",
    CRISE_HIPERTENSA: "bg-rose-700",
    DESCONHECIDO: "bg-white",
  };

  const colorsHeartIcon = {
    NORMAL: "text-green-600",
    ELEVADO: "text-amber-600",
    HIPERTENSAO_MODERADA: "text-rose-600",
    HIPERTENSAO_GRAVE: "text-rose-750",
    CRISE_HIPERTENSA: "text-rose-950",
    DESCONHECIDO: "text-black",
  };

  return (
    <>
      <div
        className={`flex flex-col ${colorsHeartCard[label]}  min-h-[215px]sss w-full rounded-lg p-6`}>
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-semibold">FREQUÊNCIA CARDÍACA</h2>
          <span className="text-xs text-gray-500">{`de ${peopleQuantity} pessoas`}</span>
        </div>

        <div className="flex flex-col items-center justify-center py-3">
          <Stethoscope
            size={24}
            className={`${colorsHeartIcon[label]}`}
          />
          <strong className="text-2xl text-center">
            {heartAverageFrequency}
            <span className="text-xs font-normal"> mmHg</span>
          </strong>
          <span>
            {label === "HIPERTENSAO_MODERADA"
              ? "HIPERTENSÃO MODERADA"
              : label === "HIPERTENSAO_GRAVE"
              ? "HIPERTENSÃO GRAVE"
              : label === "CRISE_HIPERTENSA"
              ? "CRISE HIPERTENSA"
              : label}
          </span>
          <CardTooltip
            title="Índices baseados por: American Heart Association (AHA)"
            href="https://h3med.com.br/valores-da-frequencia-cardiaca-normal-alta-ou-baixa/"
          />
        </div>
      </div>
    </>
  );
}
