import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import SolutionPhonesModal from './SolutionPhonesModal/SolutionPhonesModal';
import SolutionTypescript from './SolutionTypescript/SolutionTypescript';
import GlobalStyleProvider from './styles/globalStyles';

type TSolutions = 'typedFreeze' | 'phonesModal';

function App() {
  const queryClient = new QueryClient();
  const [selectedTask, setSelectedTask] = useState<TSolutions>('typedFreeze');

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyleProvider />
      <div>
        <button onClick={() => setSelectedTask('typedFreeze')}>
          TypedFreeze
        </button>
        <button onClick={() => setSelectedTask('phonesModal')}>
          PhonesModal
        </button>
        {selectedTask === 'typedFreeze' ? (
          <SolutionTypescript />
        ) : (
          <SolutionPhonesModal />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
