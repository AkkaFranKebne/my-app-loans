import React, { FunctionComponent } from 'react';
import { Footer, Header } from './components/presentional';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

interface OwnProps {}

type AppProps = JSX.IntrinsicElements['div'] & OwnProps;

const App: FunctionComponent<AppProps> = props => {
  const { className, ...rest } = props;

  console.log('Render!');

  return (
    <HashRouter>
      <div {...rest}>
        <Header />
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route key={`page-static-routes-${index}`} exact={true} {...route} />
            ))}
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
