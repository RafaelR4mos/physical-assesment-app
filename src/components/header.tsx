
import Image from "next/image"

export function Header() {
  return (
    <header className="flex justify-between items-center py-8">
      <div>
        <span>Relatório Turma</span>
        <strong className="text-highlight block">20222GR.ADS</strong>
      </div>
      <Image 
        src="/if-logo.png" 
        alt="logo ifsul"
        width={37}
        height={37}
         />
    </header>
  )
}