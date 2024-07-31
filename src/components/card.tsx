import { Person } from "@phosphor-icons/react";

type CardProps = {
  type: "imc" | "freqCard" | "freqCardRep";
  data: number;
  peopleQuantity: number;
};

export function Card({ type, data, peopleQuantity }: CardProps) {
  return (
    <>
      {type === "imc" && (
        <div className="flex flex-col bg-white w-full rounded-lg p-6">
          <div className="flex flex-row justify-between items-center">
            <h2>MÉDIA IMC</h2>
            <span className="text-xs text-gray-500">{`de ${peopleQuantity} pessoas`}</span>
          </div>

          <div className="flex flex-col items-center justify-center py-3">
            <Person size={24}/>
            <strong className="text-2xl">{data}</strong>
            <span>Saudável</span>
          </div>
        </div>
      )}
    </>
  );
}
