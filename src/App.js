import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import './App.css'
import {useEffect} from 'react'
import { getUserAuth } from './action'
import { connect } from 'react-redux'

function App(props) {
    useEffect(() => {
      props.getUserAuth()
    }, [])
    
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route 
            path="/home"
            element={
              <>
                <Header/>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
      </div>
    );
  }
  const mapStateToProps = (state) => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => ({
    getUserAuth: () => dispatch(getUserAuth()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
