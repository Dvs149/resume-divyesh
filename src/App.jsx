import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex flex-col md:flex-row print:flex-row min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
