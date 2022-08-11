import Header from './Header';
import Overlay from './Overlay';
import TodoContainer from './Todo/TodoContainer';
import '../styles/App.scss';

const App = () => {
  return (
    <>
      <Overlay />
      <Header />
      <main className='py-16 px-5 max-w-4xl w-full mx-auto'>
        <TodoContainer />
      </main>
    </>
  );
};

export default App;
