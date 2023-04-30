import useDrinks from "../hooks/usedrinks"
import { Row } from "react-bootstrap"
import Drink from "./Drink"


export default function ListDrink() {

  const { oneDrink } = useDrinks()
  return (
    <Row>
      {oneDrink?.drinks?.map(oDrink => (
        <Drink
        key={oDrink.idDrink}
          oDrink={oDrink}
        />
      ))}
    </Row>
  )
}
