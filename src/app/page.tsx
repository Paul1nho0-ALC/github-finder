import { Header } from './components/Header'
import { User } from './components/User'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:p-8 w-full h-full md:max-w-[800px] md:max-h-[500px] sm:rounded-xl">
      <Header />
      <User />
    </div>
  )
}
