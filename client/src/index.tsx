import { createRoot } from 'react-dom/client';

import App from './components/App';
import './styles/index.scss';

const divElement = document.getElementById('root') as HTMLDivElement;

const root = createRoot(divElement);

root.render(<App />);

if (process.env.NODE_ENV === 'development') {
  // this enabled hot reload
  if (module.hot) {
    module.hot.accept();
  }
}
