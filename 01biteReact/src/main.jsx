import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return(
//     <h2>custom App</h2>
//   )
// }
// const ReactElement={
//   type:"a",
//   props:{
//       href:"https://www.google.com",
//       target:"_blank"
//   },
//   children:"click me for visit google"

// }
const anotherUser = "chai aur react"
const ReactElement=React.createElement(
  'a',
  {href:"https://www.google.com",target:'_blank'},
  'click me',
  anotherUser
)
// const anotherElement=(
//   <a href="https://www.google.com">visit to google</a>
// )


ReactDOM.createRoot(document.getElementById('root')).render( 
  
    ReactElement
    // <App/>

)
