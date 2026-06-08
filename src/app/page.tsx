import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TheExperienceSection } from '@/components/sections/TheExperienceSection'
import { SignatureExperiencesSection } from '@/components/sections/SignatureExperiencesSection'
import { VehicleExperienceSection } from '@/components/sections/VehicleExperienceSection'
import { GiftExperienceSection } from '@/components/sections/GiftExperienceSection'
import { CorporateHospitalitySection } from '@/components/sections/CorporateHospitalitySection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TheExperienceSection />
        <SignatureExperiencesSection />
        <VehicleExperienceSection />
        <GiftExperienceSection />
        <CorporateHospitalitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
