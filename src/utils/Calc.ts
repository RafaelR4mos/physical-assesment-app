import { dataDTO, heartBeatLabels, heartBeatResponse, heartFrequencyLabels, heartFrequencyResponse, imcLabels, imcResponse } from "@/types/dataTypes";

export function calculateAverageIMC(data: dataDTO[]): imcResponse {
  const validImcValues = data
  .map(item => item.imc)
  .filter(imc => imc > 0);

  const totalImc = validImcValues.reduce((sum, imc) => sum + imc, 0); 
  const averageImc = totalImc / validImcValues.length;
  let imcLabel: imcLabels = "DESCONHECIDO";

  if (averageImc < 18.5) imcLabel = "MAGREZA"
  if (averageImc >= 18.5 && averageImc <= 24.99) imcLabel = "NORMAL"
  if (averageImc >= 25 && averageImc <= 29.99) imcLabel = "SOBREPESO"
  if (averageImc >= 30 && averageImc <= 39.99) imcLabel = "OBESIDADE"
  if (averageImc >= 40) imcLabel = "OBESIDADE_GRAVE"

  return {
    imcAverage: Number(averageImc.toFixed(2)),
    label: imcLabel,
    peopleQuantity: validImcValues.length
  }
}

export function calculateAverageHeartFrequency(data: dataDTO[]): heartFrequencyResponse {
  const validHeartFrequencyValues = data
  .map(item => {
    return { pas: item.pas, pad: item.pad }
  }).filter(item => item.pas > 0 && item.pad > 0)

  const totalPadAverage = (validHeartFrequencyValues
    .map(item => item.pad).reduce((sum, pad) => sum + pad, 0)) / validHeartFrequencyValues.length

  const totalPaSAverage = (validHeartFrequencyValues
    .map(item => item.pas).reduce((sum, pas) => sum + pas, 0)) / validHeartFrequencyValues.length

  let heartFrequencyLabel: heartFrequencyLabels = "DESCONHECIDO" 

  if(totalPadAverage < 80 && totalPaSAverage < 120) {
    heartFrequencyLabel = "NORMAL"
  } else if (totalPadAverage < 80 && totalPaSAverage >= 120 && totalPaSAverage <= 129) {
    heartFrequencyLabel = "ELEVADO"
  } else if ((totalPadAverage >= 80 && totalPadAverage <= 89) || (totalPaSAverage >= 130 && totalPaSAverage <= 139)) {
    heartFrequencyLabel = "HIPERTENSAO_MODERADA"
  } else if ((totalPadAverage >= 90 && totalPadAverage <= 120) || (totalPaSAverage >= 140 && totalPaSAverage <= 180)) {
    heartFrequencyLabel = "HIPERTENSAO_GRAVE"
  } else if (totalPadAverage > 120 || totalPaSAverage > 180) {
    heartFrequencyLabel = "CRISE_HIPERTENSA"
  } else {
    heartFrequencyLabel = "DESCONHECIDO"
  }

  return {
    heartAverageFrequency: `${totalPadAverage.toFixed(1)} / ${totalPaSAverage.toFixed(1)}`,
    label: heartFrequencyLabel,
    peopleQuantity: validHeartFrequencyValues.length
  }
}

export function calculateHeartBeat(data: dataDTO[]): heartBeatResponse {
  const validHeartbeatValues = data
  .map(item => item.fCrep)
  .filter(fcrep => fcrep > 0)

  const heartBeatAverage = Math.round((validHeartbeatValues.reduce((acc, heartbeat) => acc + heartbeat, 0)) / validHeartbeatValues.length)
  let heartbeatLabel: heartBeatLabels = "DESCONHECIDO"
  
  //Homens em repouso.
  if(heartBeatAverage >= 56 && heartBeatAverage <= 61) {
    heartbeatLabel = "EXCELENTE"
  } else if (heartBeatAverage >= 62 && heartBeatAverage <= 69) {
    heartbeatLabel = "BOA"
  } else if (heartBeatAverage >= 70 && heartBeatAverage <= 73) {
    heartbeatLabel = "NORMAL"
  } else if (heartBeatAverage >= 74 && heartBeatAverage <= 81) {
    heartbeatLabel = "ELEVADA"
  } else if (heartBeatAverage >= 82) {
    heartbeatLabel = "RUIM"
  } else {
    heartbeatLabel = "DESCONHECIDO"
  }

  return {
    heartBeatAverage,
    label: heartbeatLabel,
    peopleQuantity: validHeartbeatValues.length
  }
}