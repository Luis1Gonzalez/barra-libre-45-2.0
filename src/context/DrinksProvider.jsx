import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Alert } from 'react-bootstrap'

const DrinksContext = createContext()



const DrinkProvider = ({ children }) => {

    const [oneDrink, setOneDrink] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [alert, setAlert] = useState('')

    let url = ''

    useEffect(() => {
        const getRecipe = async () => {
            if (!drinkId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

                const { data } = await axios(url)
                setRecipe(data.drinks[0])

            } catch (error) {
                console.log(error)
            }
        }
        getRecipe()
    }, [drinkId])

    const consultDrink = async search => {
        try {
            if (search.categoryDrink) {
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.categoryDrink}`
            } else if (search.baseDrink) {
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.baseDrink}`
            } else if (search.nameDrink) {
                url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.nameDrink}`
            } else {
                url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
            }

            const { data } = await axios(url)
            setOneDrink(data)
            
            const errorAlert = () => {
                if (data.drinks === null) {
                    setAlert('Consulta no Encontrada')
                    return
                }
                setAlert('')
            }
            errorAlert()

        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleDrinkIdClick = (id) => {
        setDrinkId(id)
    }


    
console.log(alert)
    return (
        <DrinksContext.Provider
            value={{
                consultDrink,
                oneDrink,
                handleModalClick,
                modal,
                setModal,
                handleDrinkIdClick,
                recipe,
                alert
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinkProvider
}

export default DrinksContext
