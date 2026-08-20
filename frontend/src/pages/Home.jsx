import { BrowseNewAddedProperties } from "../components/Home/BrowseNewAddedProperties"
import { DiscoverHouseListing } from "../components/Home/DiscoverHouseListing"
import { FAQs } from "../components/Home/FAQs"
import { FunFactArea } from "../components/Home/FunFactArea"
import { HomeHeroSection } from "../components/Home/HomeHeroSection"
import { LivingWhereYouLoveMeansLovingYourLife } from "../components/Home/Living Where You Love Means Loving Your Life"
import { MeetOurAwesomeAgents } from "../components/Home/MeetOurAwsomeAgents"
import { OurHottestCities } from "../components/Home/OurHottestCities"
import { SeeHowToradoCanHelpYou } from "../components/Home/SeeHowToradoCanHelpYou"
import { WhatOurUsersSayAboutUs } from "../components/Home/WhatOurUsersSayAboutUs"




export const Home = () => {
  return (
    <div className="flex flex-col mt-16 lg:mt-20">
        <HomeHeroSection/>
        <FunFactArea/>
        <DiscoverHouseListing/>
        <SeeHowToradoCanHelpYou/>
        <LivingWhereYouLoveMeansLovingYourLife/>
        <OurHottestCities/>
        <MeetOurAwesomeAgents/>
        <WhatOurUsersSayAboutUs/>
        <BrowseNewAddedProperties/>
        <FAQs/>
    </div>
  )
}
