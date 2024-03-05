import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModuleLoader from "./ModuleLoader/ModuleLoader";
import { SystemProvider } from "./contexts/SystemContext/SystemProvider";
import { ErrorBoundary } from "react-error-boundary";
import FallbackPage from "./components/FallbackPage/FallbackPage";


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<FallbackPage/>}>
        <SystemProvider>
          <Routes>
            <Route path="/" element={<ModuleLoader />} />
            <Route path="*" element={<FallbackPage heading={'404'} description={'Page not found'}/>} />
          </Routes>
        </SystemProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
export default App;
