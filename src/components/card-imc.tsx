import { imcLabels } from "@/types/dataTypes";
import { Person } from "@phosphor-icons/react";
import { CardTooltip } from "./card-tooltip";

type CardImcProps = {
  averageImc: number;
  imcLabel: imcLabels;
  peopleQuantity: number;
};

export function CardImc({
  averageImc,
  imcLabel,
  peopleQuantity,
}: CardImcProps) {
  const colorsIMCCard = {
    MAGREZA: "bg-sky-100",
    NORMAL: "bg-green-100",
    SOBREPESO: "bg-amber-100",
    OBESIDADE: "bg-rose-200",
    OBESIDADE_GRAVE: "bg-rose-400",
    DESCONHECIDO: "bg-white",
  };

  const colorsIMCIcon = {
    MAGREZA: "text-sky-600",
    NORMAL: "text-green-600",
    SOBREPESO: "text-amber-600",
    OBESIDADE: "text-rose-600",
    OBESIDADE_GRAVE: "text-rose-900",
    DESCONHECIDO: "text-black",
  };

  return (
    <>
      <div
        className={`flex flex-col ${colorsIMCCard[imcLabel]}  w-full min-h-[215px] rounded-lg p-6`}>
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-semibold">MÉDIA IMC</h2>
          <span className="text-xs text-gray-500">{`de ${peopleQuantity} pessoas`}</span>
        </div>

        <div className="flex flex-col items-center justify-center py-3">
          <Person
            weight="fill"
            size={24}
            className={`${colorsIMCIcon[imcLabel]}`}
          />
          <strong className="text-2xl">{averageImc}</strong>
          <span>
            {imcLabel === "OBESIDADE_GRAVE" ? "OBESIDADE GRAVE" : imcLabel}
          </span>
          <CardTooltip
            title="Índices baseados por: vidasaudavel.einstein.br "
            href="https://vidasaudavel.einstein.br/calcular-o-seu-imc/"
          />
        </div>
      </div>
    </>
  );
}
