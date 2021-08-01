import React from 'react'
import { Body } from './auction/Body.js'
import { AuthProvider } from './context/AuthContext.js'
import Nav from './Nav.jsx'

 const App = () => {
  return  <AuthProvider>
              <Nav />
              <Body />
          </AuthProvider>
}

export default App;
