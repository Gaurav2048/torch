import './App.css'
import PrimaryNavigation from './components/PrimaryNavigation'
import useInitials from './hooks/useInitials'
import AppRouter from './router'

function App() {
  const loading = useInitials()

  return (
    loading ? <div>Loading...</div> : 
    <PrimaryNavigation>
      <AppRouter />
    </PrimaryNavigation>
  )
}

export default App
