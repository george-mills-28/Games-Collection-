import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import GamesList from './GamesList.tsx'
import AddGameForm from './AddGameForm.tsx'
import { CollectionStats } from './CollectionStats.tsx'
import { getAllGames } from '../apis/games.ts'

const queryClient = new QueryClient()

function AppContent() {
  const { data: games = [] } = useQuery({ 
    queryKey: ['games'], 
    queryFn: getAllGames 
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Game Collection</h1>
      </header>
      <main>
        <AddGameForm />
        <CollectionStats games={games} />
        <GamesList />
      </main>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App
