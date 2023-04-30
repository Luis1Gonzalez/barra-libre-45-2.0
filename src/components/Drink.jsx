import { Col, Card, Button } from "react-bootstrap"
import useDrinks from "../hooks/usedrinks"


export default function Drink({ oDrink }) {

const { handleModalClick, handleDrinkIdClick, } = useDrinks()

  return (
    <Col sm={5} md={5} lg={4} className="mt-5">
      <Card className="mb-4">
        <Card.Img
          variant='top'
          src={oDrink.strDrinkThumb}
          alt={`imagen de ${oDrink.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{oDrink.strDrink}</Card.Title>

          <Button
            variant='warning'
            className="mt-2 w-100"
            onClick={ () => {
              handleModalClick()
              handleDrinkIdClick(oDrink.idDrink)
            }}
          >Ver Receta</Button>
        </Card.Body>
      </Card>

    </Col>
  )
}


// El variant='top' de la imagen lo requiere para funcionar correctamente.
// En en  Button se colocó un arrow function dentro del onClick porque se va a agregar vaarias funciones.