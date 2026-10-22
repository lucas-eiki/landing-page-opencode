import { ReservationProvider } from './providers/ReservationProvider'
import { Header } from '../features/navigation/view/Header'
import { Hero } from '../features/hero/view/Hero'
import { Manifesto } from '../features/manifesto/view/Manifesto'
import { Editions } from '../features/editions/view/Editions'
import { Benefits } from '../features/benefits/view/Benefits'
import { Ritual } from '../features/ritual/view/Ritual'
import { House } from '../features/house/view/House'
import { Testimonials } from '../features/testimonials/view/Testimonials'
import { Offer } from '../features/offer/view/Offer'
import { Faq } from '../features/faq/view/Faq'
import { Waitlist } from '../features/waitlist/view/Waitlist'
import { Footer } from '../features/footer/view/Footer'
import { useReveal } from '../shared/lib/useReveal'

export default function App() {
  useReveal()

  return (
    <ReservationProvider>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <Editions />
        <Benefits />
        <Ritual />
        <House />
        <Testimonials />
        <Offer />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </ReservationProvider>
  )
}
