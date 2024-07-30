import ifLogo from "../../assets/if-logo.png"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-7">
      <div>
        <span>Turma</span>
        <strong className="text-highlight block">20222GR.ADS</strong>
      </div>
      <Image src={ifLogo} alt="logo ifsul" />
    </header>
  )
}