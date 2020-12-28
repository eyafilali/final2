//raface
import React,{Fragment} from 'react'
import  {BrowserRouter  as Router,Route } from 'react-router-dom';
import Header from "./Components/header";
import Footer from "./Components/footer";
import {Container} from 'react-bootstrap';
import HomeScreens from "./front-end/screens/homeScreens"
import ProductScreen from "./front-end/screens/productScreen"
import C from './Components/carousel'
import SearchPage from './Components/searchbar'
const App = () => {
  return (
    <>
     
    <Router>
      <Header/>
      <Container className="text-center"> <SearchPage /></Container>
     
      
      <main>
        <Container className="py-3"> 
        < Route path="/" component={C} exact className="my-3 "  />
        < Route path="/" component={HomeScreens} exact />
        <Route path="/:_id" component={ProductScreen}/> 
      </Container>
        
      </main>
      <Footer/>
    </Router>
    </>
  )
}

export default App
