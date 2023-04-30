import { Container } from 'react-bootstrap'
import FormUser from './components/FormUser'
import ListDrinks from './components/ListDrinks'
import { CategoryProvider } from './context/CategoryProvider'
import { DrinkProvider } from './context/DrinksProvider'
import ModalDrink from './components/ModalDrink'
import { BaseProvider } from './context/BaseProvider'
import Header from './components/Header'
import gifBarraLibre45 from './assets/barraLibre45.gif'

function App() {


  return (

    <CategoryProvider>
      <BaseProvider>
        <DrinkProvider>
          <Header />
          <div className='wrap-img'>{<img src={gifBarraLibre45} alt="gif de muestra" />}</div>
          <Container>
            <FormUser />
            <ListDrinks />
            <ModalDrink />
          </Container>
        </DrinkProvider>
      </BaseProvider>
    </CategoryProvider>
  )
}

export default App
