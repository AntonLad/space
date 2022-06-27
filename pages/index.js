import { Header } from "../components/header"
import Main from '../components/Main'



export default function Home() {
  return (
    <div className="main">
      <header>
        <Header />
      </header>
      <div>
        <Main />  
      </div>
    </div>
  )
}
