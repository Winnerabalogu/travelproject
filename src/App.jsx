import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import data from './data'

export default function App() {
      const traveData = data.map(items => {
        return <Content 
        key = {items.id}
        items ={items}
        />
      }

      )
 return(
      <>
        <Header/>
        {traveData}
      </>
 )
}

