import { Person, Barbell, ArrowsVertical } from "@phosphor-icons/react";

type SummaryCardProps = {
  type: "people" | "weight" | "height";
  data: string;
};

export function SummaryCard({ type, data }: SummaryCardProps) {
  return (
    <>
      {type === "people" && (
        <div className="px-3 py-3 min-h-24 bg-white flex flex-col flex-1 rounded-lg">
          <div className="flex flex-row justify-between">
            <span>Total</span>
            <Person />
          </div>
          <div className="flex mt-auto flex-row gap-1 items-center">
            <strong className="font-black text-2xl text-primary-custom">
              {data}
            </strong>
            <span className="text-xxs">pessoas</span>
          </div>
        </div>
      )}

      {type === "weight" && (
        <div className="px-3 py-3 min-h-24 bg-white flex flex-col flex-1 rounded-lg">
          <div className="flex flex-row justify-between">
            <span>Média</span>
            <Barbell />
          </div>
          <div className="flex mt-auto flex-row gap-1 items-center">
            <strong className="font-black text-2xl text-primary-custom">
              {data}
            </strong>
            <span className="text-xxs">kg</span>
          </div>
        </div>
      )}

      {type === "height" && (
        <div className="px-3 py-3 min-h-24 bg-white flex flex-col flex-1 rounded-lg">
          <div className="flex flex-row justify-between">
            <span>Média</span>
            <ArrowsVertical />
          </div>
          <div className="flex mt-auto flex-row gap-1 items-center">
            <strong className="font-black text-2xl text-primary-custom">
              {data}
            </strong>
            <span className="text-xxs">m</span>
          </div>
        </div>
      )}
    </>
  );
}
