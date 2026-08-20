import { AgentsArea } from "../components/AgentsArea"
import {HeroSection} from "../components/Listing/HeroSection"

export const Agents = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <AgentsArea/>
    </div>
  )
}
