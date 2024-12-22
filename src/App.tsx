import { Navigation } from "./components"
import { Home } from "./pages"

const App = () => {

  return (
    <>
      <Navigation />
      <main className="mt-8 w-full">
        <Home />
      </main>
    </>
  )
}

export default App
