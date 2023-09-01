import Page from './components/Page'
import { ExamProvider } from './context/ExamContext'
import './styles/App.css'

function App () {
  return (
    <div className='App'>
      <ExamProvider>
        <Page />
      </ExamProvider>
    </div>
  )
}

export default App
