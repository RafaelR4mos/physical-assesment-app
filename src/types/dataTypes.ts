export type dataDTO = {
  height: number
  weight: number
  imc: number
  pas: number
  pad: number
  fCrep: number
}

export type imcLabels = "MAGREZA" | "NORMAL"  |  "SOBREPESO" | "OBESIDADE" | "OBESIDADE_GRAVE" | "DESCONHECIDO"
export type heartFrequencyLabels = "NORMAL" | "ELEVADO" | "HIPERTENSAO_MODERADA" | "HIPERTENSAO_GRAVE" | "CRISE_HIPERTENSA" | "DESCONHECIDO"
export type heartBeatLabels = "EXCELENTE" | "BOA" | "NORMAL" | "ELEVADA" | "RUIM" | "DESCONHECIDO"

export type imcResponse = {
  imcAverage: number
  label: imcLabels
  peopleQuantity: number
}

export type heartFrequencyResponse = {
  heartAverageFrequency: string
  label: heartFrequencyLabels
  peopleQuantity: number
}

export type heartBeatResponse = {
  heartBeatAverage: number;
  label: heartBeatLabels
  peopleQuantity: number;
}