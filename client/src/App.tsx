import './App.css'
import PrimaryNavigation from './components/PrimaryNavigation'
import ErrorBoundary from './ErrorBoundary'
import useInitials from './hooks/useInitials'
import AppRouter from './router'

function App() {
  const loading = useInitials()

  return (
    loading ? <div>Loading...</div> : 
    <ErrorBoundary>
      <PrimaryNavigation>
        <AppRouter />
      </PrimaryNavigation>
    </ErrorBoundary>
  )
}

export default App
