import { Home } from './pages/Home/Index';
import './styles/theme.css';
import './styles/global.css';
// import { NotFound } from './pages/NotFound/Index';
// import { AboutPomodoro } from './pages/AboutPomodoro/Index';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
