import { Head } from "./componentes/Head"
import { MainArticle } from "./componentes/MainArticle"
import { NewContainer } from "./componentes/NewContainer"

function App() {


  return (
    <main className= "px-4 pt-6">
    <Head />
    <div className="sm:flex sm:gap-8">
    <MainArticle />
    <NewContainer />
    </div>
    </main>
  ) 
}

export default App
