import React from 'react';
import { useSelector } from 'react-redux';

import { AuthSignedSelector } from '~/redux/auth/selectors';

import { createRouter } from './routes';

// import { Container } from './styles';

function App() {
  const signed = useSelector(AuthSignedSelector);

  const Routes = createRouter(signed);
  return <Routes />;
}

export { App };
