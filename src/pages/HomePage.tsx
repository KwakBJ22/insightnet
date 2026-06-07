import HeroSection from '../components/sections/HeroSection'
import HistorySection from '../components/sections/HistorySection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HistorySection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
