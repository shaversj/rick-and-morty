import {QueryClient, QueryClientProvider} from 'react-query'
import './App.css'
import CharacterList from "./CharacterList.jsx";

const queryClient = new QueryClient()

function App() {


    return (
        <>
            <QueryClientProvider client={queryClient}>
                <CharacterList/>
            </QueryClientProvider>
        </>
    )
}

export default App
