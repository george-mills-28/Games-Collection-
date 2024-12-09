import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GamesList from './GamesList.tsx'
import AddGameForm from './AddGameForm.tsx'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="app-header">
          <h1>Games Collection</h1>
        </header>
        <main>
          <AddGameForm />
          <GamesList />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
