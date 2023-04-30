import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BaseContext = createContext()

const BaseProvider = ({ children }) => {

    const [base, setBase] = useState([])


    const getBase = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

            const { data } = await axios(url)
            setBase(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBase()
    }, [])



    return (
        <BaseContext.Provider
            value={{
                base
            }}>
            {children}

        </BaseContext.Provider>
    )
}

export { BaseProvider }
export default BaseContext
