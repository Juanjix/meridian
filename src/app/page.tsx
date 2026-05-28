import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TheExperienceSection } from '@/components/sections/TheExperienceSection'
import { FoundersMembershipSection } from '@/components/sections/FoundersMembershipSection'
import { VehicleExperienceSection } from '@/components/sections/VehicleExperienceSection'
import { CorporateHospitalitySection } from '@/components/sections/CorporateHospitalitySection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { ExecutiveExperiencesSection } from '@/components/sections/ExecutiveExperiencesSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TheExperienceSection />
        <FoundersMembershipSection />
        <ExecutiveExperiencesSection />
        <VehicleExperienceSection />
        <CorporateHospitalitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
