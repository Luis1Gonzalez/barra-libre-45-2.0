import { useContext } from "react";
import DrinkContext from "../context/DrinksProvider";

const useDrinks = () => {
    return useContext(DrinkContext)
}
export default useDrinks