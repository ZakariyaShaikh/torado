import { HeroSection } from "../components/Listing/HeroSection"
import { ListingArea } from "../components/Listing/ListingArea"

export const Listing = () => {
  return (
    <div className="flex flex-col gap-5">
        <HeroSection/>
        <ListingArea/>
    </div>
  )
}
