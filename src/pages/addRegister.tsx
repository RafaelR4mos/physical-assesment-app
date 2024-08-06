'use client';


import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Button, TextField } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function () {

  return (
    <div
      className={`flex flex-col bg-custom-bg max-w-md m-auto p-8 ${inter.className}`}>
      <Header />

      <main className="flex min-h-screen flex-col my-6">
        <div className="flex flex-row justify-between items-center mb-3">
          <h1 className="font-bold text-center w-full">Adicionando registros</h1>
        </div>

        <div className="flex flex-col gap-6 items-center max-w[500px]">
          <div className="flex flex-1 flex-row gap-4">
            <TextField variant="outlined" placeholder="peso kg"/>
            <TextField variant="outlined" placeholder="altura m"/>
          </div>
          <div>
            <TextField variant="outlined" placeholder="altura m"/>
          </div>
          <div>
            <TextField variant="outlined" placeholder="PAS mmHg"/>
          </div>
          <div>
            <TextField variant="outlined" placeholder="PAD mmHg"/>
          </div>
          <div>
            <TextField variant="outlined" placeholder="Bpm"/>
          </div>
          <Button variant="contained">Adicionar</Button>
        </div>
      </main>
    </div>
  );
}
