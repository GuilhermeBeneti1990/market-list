import './App.css';
import Empty from './components/Empty';
import Filters from './components/Filters';
import { Task } from './components/Task';
import GlobalContextProvider, { useGlobalContext } from './context/GlobalContext';

export default function AppPage() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  )
}

function App() {
  const {
    input,
    handleSetInput,
    handleKeyDown,
    filteredTasks
  } = useGlobalContext();
  return (
    <div className='container-app'>
      <div className='container-app__header'>
        <div className='container-app__mask' />
        <h1>Lista de Mercado</h1>
        <input type='text' placeholder='Preciso comprar...' value={input} onChange={(event) => handleSetInput(event.target.value)} onKeyDown={handleKeyDown} />
      </div>
      <ul className='content-tasks'>
        <div>
          {filteredTasks().map((task) => (
            <Task task={task} />
          ))}

          {!filteredTasks().length && (
            <Empty title='Nenhum produto necessário!' />
          )}
        </div>
        <Filters />
      </ul>
    </div>
  )
}
