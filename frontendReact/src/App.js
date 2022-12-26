import AppRouter from './AppRouter/AppRouter';
import ErrorBoundary from './Components/ErrorBoundry/ErrorBoundry';
import { AuthProvider } from './AuthProvider/AuthProvider';


function App() {
  return (
    <ErrorBoundary>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
