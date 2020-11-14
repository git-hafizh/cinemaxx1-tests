import React from 'react';
import './App.css';
import Homepage from './components/HomePage/Homepage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/HomePage/Header/Header';
import Menubar from './components/HomePage/Menubar/Menubar';
import Footer from './components/HomePage/Footer/Footer';

function App() {
  const loading = () => <div>Loading...</div>;

  const DetailPage = React.lazy(() => import('./components/HomePage/Movie/DetailPage/DetailPage'));
  const AllUpcoming = React.lazy(() => import('./components/HomePage/Movie/AllUpcoming/AllUpcoming'));

  return (
    <div className="App">
      <Header/>
      <Menubar/>
       <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/" name="Home" render={props => <Homepage {...props}/>} />
                <Route exact path="/movie/:id" name="Detail Ship" render={props => <DetailPage {...props}/>} />
                <Route exact path="/comingsoon" name="All Upcoming" render={props => <AllUpcoming {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
