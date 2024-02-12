import { QueryClientProvider, QueryClient } from "react-query";
import Welcome from "./components/welcome";
import Header from "./components/header";
import Filter from "./components/filter";

export const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Welcome/>
      <Filter/>

    </QueryClientProvider>
  )
}

export default App
