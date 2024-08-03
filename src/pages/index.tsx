'use client';


import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { SummaryCard } from "@/components/summary-card";
import { FilterBtn } from "@/components/filter-button";
import { useEffect, useState } from "react";
import { CardImc } from "@/components/card-imc";
import {
  calculateAverageHeartFrequency,
  calculateAverageIMC,
  calculateHeartBeat,
} from "@/utils/Calc";
import {
  dataDTO,
  heartBeatResponse,
  heartFrequencyResponse,
  imcResponse,
} from "@/types/dataTypes";
import { CardHeartFrequency } from "@/components/card-heart-frequency";
import { CardHeartBeat } from "@/components/card-heartbeat";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = {
    measures: [
      {
        id: 1,
        date: "01/08/2024",
        data: [
          {
            height: 1.7,
            weight: 69.7,
            imc: 24.12,
            pas: 127,
            pad: 77,
            fCrep: 68,
          },
          {
            height: 1.57,
            weight: 52.4,
            imc: 21.26,
            pas: 112,
            pad: 77,
            fCrep: 84,
          },
          {
            height: 1.58,
            weight: 67.0,
            imc: 26.84,
            pas: 108,
            pad: 69,
            fCrep: 84,
          },
          {
            height: 1.75,
            weight: 69.0,
            imc: 22.53,
            pas: 155,
            pad: 87,
            fCrep: 71,
          },
          {
            height: 1.6,
            weight: 47.1,
            imc: 18.4,
            pas: 122,
            pad: 80,
            fCrep: 74,
          },
          {
            height: 1.71,
            weight: 96.5,
            imc: 33.0,
            pas: 158,
            pad: 98,
            fCrep: 132,
          },
          {
            height: 1.63,
            weight: 48.0,
            imc: 18.07,
            pas: 116,
            pad: 73,
            fCrep: 85,
          },
          {
            height: 1.66,
            weight: 73.2,
            imc: 26.56,
            pas: 133,
            pad: 68,
            fCrep: 62,
          },
          {
            height: 1.65,
            weight: 67.8,
            imc: 24.9,
            pas: 138,
            pad: 90,
            fCrep: 83,
          },
          {
            height: 1.61,
            weight: 68.0,
            imc: 26.23,
            pas: 125,
            pad: 82,
            fCrep: 74,
          },
          { height: 0.0, weight: 0.0, imc: 0.0, pas: 0, pad: 0, fCrep: 0 },
          {
            height: 1.79,
            weight: 99.5,
            imc: 31.05,
            pas: 161,
            pad: 93,
            fCrep: 94,
          },
          {
            height: 1.7,
            weight: 78.0,
            imc: 26.99,
            pas: 133,
            pad: 88,
            fCrep: 79,
          },
          {
            height: 1.53,
            weight: 49.9,
            imc: 21.32,
            pas: 112,
            pad: 76,
            fCrep: 109,
          },
          {
            height: 1.82,
            weight: 73.9,
            imc: 22.31,
            pas: 148,
            pad: 75,
            fCrep: 65,
          },
          {
            height: 1.85,
            weight: 178.0,
            imc: 52.01,
            pas: 158,
            pad: 91,
            fCrep: 70,
          },
          {
            height: 1.67,
            weight: 81.5,
            imc: 29.22,
            pas: 120,
            pad: 74,
            fCrep: 73,
          },
          { height: 0.0, weight: 0.0, imc: 0.0, pas: 0, pad: 0, fCrep: 0 },
          { height: 0.0, weight: 0.0, imc: 0.0, pas: 0, pad: 0, fCrep: 0 },
          {
            height: 1.91,
            weight: 127.0,
            imc: 34.81,
            pas: 174,
            pad: 99,
            fCrep: 95,
          },
          {
            height: 1.76,
            weight: 55.8,
            imc: 18.01,
            pas: 135,
            pad: 75,
            fCrep: 59,
          },
          {
            height: 1.73,
            weight: 76.4,
            imc: 25.53,
            pas: 117,
            pad: 82,
            fCrep: 85,
          },
          {
            height: 1.7,
            weight: 77.83,
            imc: 26.48,
            pas: 134.32,
            pad: 81.79,
            fCrep: 81,
          },
        ],
      },
      {
        id: 2,
        date: "01/09/2024",
        data: [
          {
            height: 1.7,
            weight: 69.7,
            imc: 24.12,
            pas: 127,
            pad: 77,
            fCrep: 68,
          },
          {
            height: 1.57,
            weight: 52.4,
            imc: 21.26,
            pas: 112,
            pad: 77,
            fCrep: 84,
          },
          {
            height: 1.58,
            weight: 67.0,
            imc: 26.84,
            pas: 108,
            pad: 69,
            fCrep: 84,
          },
          {
            height: 1.75,
            weight: 69.0,
            imc: 22.53,
            pas: 155,
            pad: 87,
            fCrep: 71,
          },
          {
            height: 1.6,
            weight: 47.1,
            imc: 18.4,
            pas: 122,
            pad: 80,
            fCrep: 74,
          },
          {
            height: 1.63,
            weight: 48.0,
            imc: 18.07,
            pas: 116,
            pad: 73,
            fCrep: 85,
          },
          {
            height: 1.66,
            weight: 73.2,
            imc: 26.56,
            pas: 133,
            pad: 68,
            fCrep: 62,
          },
          {
            height: 1.65,
            weight: 67.8,
            imc: 24.9,
            pas: 138,
            pad: 90,
            fCrep: 83,
          },
          {
            height: 1.61,
            weight: 68.0,
            imc: 26.23,
            pas: 125,
            pad: 82,
            fCrep: 74,
          },
          {
            height: 1.7,
            weight: 78.0,
            imc: 26.99,
            pas: 133,
            pad: 88,
            fCrep: 79,
          },
          {
            height: 1.53,
            weight: 49.9,
            imc: 21.32,
            pas: 112,
            pad: 76,
            fCrep: 109,
          },
          {
            height: 1.82,
            weight: 73.9,
            imc: 22.31,
            pas: 148,
            pad: 75,
            fCrep: 65,
          },
          {
            height: 1.67,
            weight: 81.5,
            imc: 29.22,
            pas: 120,
            pad: 74,
            fCrep: 73,
          },
          {
            height: 1.91,
            weight: 127.0,
            imc: 34.81,
            pas: 174,
            pad: 99,
            fCrep: 95,
          },
          {
            height: 1.76,
            weight: 55.8,
            imc: 18.01,
            pas: 135,
            pad: 75,
            fCrep: 59,
          },
          {
            height: 1.73,
            weight: 76.4,
            imc: 25.53,
            pas: 117,
            pad: 82,
            fCrep: 85,
          },
          {
            height: 1.7,
            weight: 77.83,
            imc: 26.48,
            pas: 134.32,
            pad: 81.79,
            fCrep: 81,
          },
        ],
      },
    ],
  };
  const [filter, setFilter] = useState("01/08/2024");
  const [imcData, setImcData] = useState<imcResponse>({
    imcAverage: 0,
    label: "DESCONHECIDO",
    peopleQuantity: 0,
  });
  const [heartFrequencyData, setHeartFrequencyData] =
    useState<heartFrequencyResponse>({
      heartAverageFrequency: "00 / 00",
      label: "DESCONHECIDO",
      peopleQuantity: 0,
    });

  const [heartbeatData, setheartbeatData] = useState<heartBeatResponse>({
    heartBeatAverage: 0,
    label: "DESCONHECIDO",
    peopleQuantity: 0,
  });

  const [summaryData, setSummaryData] = useState({
    peopleQuantity: 0,
    averageWeight: 0,
    averageHeight: 0
  })


  function handleDateFilter(filter: string) {
    setFilter(filter);
  }

  function handleImcData(data: imcResponse) {
    setImcData(data);
  }

  function handleHeartbeatData(data: heartBeatResponse) {
    setheartbeatData(data);
  }

  function handleHeartFrequencyData(data: heartFrequencyResponse) {
    setHeartFrequencyData(data);
  }

  function getSummaryData(data: dataDTO[]) {
    const validWeightAndHeight = data
    .map((item) => {
      return { weight: item.weight, height: item.height };
    })
    .filter((item) => item.weight > 0 && item.height);

    const weightAverage =
    validWeightAndHeight
      .map((item) => item.weight)
      .reduce((acc, weight) => acc + weight, 0) / validWeightAndHeight.length;
  
  const heightAverage =
    validWeightAndHeight
      .map((item) => item.height)
      .reduce((acc, height) => acc + height, 0) / validWeightAndHeight.length;

    setSummaryData({
      peopleQuantity: validWeightAndHeight.length,
      averageHeight: heightAverage,
      averageWeight: weightAverage
    })
  }

  useEffect(() => {
    const selectedData = data.measures.find((item) => item.date === filter) ?? data.measures[0]
    handleImcData(calculateAverageIMC(selectedData?.data));
    handleHeartFrequencyData(
      calculateAverageHeartFrequency(selectedData?.data)
    );
    handleHeartbeatData(calculateHeartBeat(selectedData?.data));

    getSummaryData(selectedData.data)

  }, [filter]);



  return (
    <div
      className={`flex flex-col bg-custom-bg max-w-md m-auto p-8 ${inter.className}`}>
      <Header />

      <main className="flex min-h-screen flex-col my-6">
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex flex-row gap-2">
            {data.measures.map((item) => {
              return (
                <FilterBtn
                  key={item.id}
                  className={`${
                    filter === item.date
                      ? "bg-primary-custom text-white"
                      : "bg-white border-gray-300 text-black"
                  } text-xs py-1 px-2 rounded-lg border`}
                  text={item.date}
                  onClick={() => handleDateFilter(item.date)}
                />
              );
            })}
          </div>
          <span className="text-xs text-gray-500">{`dados de: ${filter}`}</span>
        </div>
        <div className="flex flex-row gap-3 md:gap-6">
          <SummaryCard
            type="people"
            data={summaryData.peopleQuantity.toString()}
          />
          <SummaryCard
            type="weight"
            data={summaryData.averageWeight.toFixed(2)}
          />
          <SummaryCard
            type="height"
            data={summaryData.averageHeight.toFixed(2)}
          />
        </div>
        <div className="flex flex-col gap-4 w-full mt-4">
          <CardImc
            averageImc={imcData.imcAverage}
            imcLabel={imcData.label}
            peopleQuantity={imcData.peopleQuantity}
          />
          <CardHeartFrequency
            heartAverageFrequency={heartFrequencyData.heartAverageFrequency}
            label={heartFrequencyData.label}
            peopleQuantity={heartFrequencyData.peopleQuantity}
          />
          <CardHeartBeat
            heartBeatAverage={heartbeatData.heartBeatAverage}
            label={heartbeatData.label}
            peopleQuantity={heartbeatData.peopleQuantity}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4DA3F6" }}>
            Adicionar registros
          </Button>
        </div>
      </main>
    </div>
  );
}
