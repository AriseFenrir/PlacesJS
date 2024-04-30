import "@/styles/globals.css"
import Link from "next/link"

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <header className="border-b-2 border-b-stone-200 bg-stone-100">
      <div className="mx-auto max-w-5xl p-4 flex justify-between items-center">
        <Link href="/places">Liste</Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/places/createBar">Créer bar</Link>
            </li>
            <li>
              <Link href="/places/createMusee">Créer musee</Link>
            </li>
            <li>
              <Link href="/places/createParc">Créer parc</Link>
            </li>
            <li>
              <Link href="/places/createRestaurant">Créer restaurant</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section>
      <div className="mx-auto max-w-5xl p-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
)

export default App
