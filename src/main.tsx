import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
)
