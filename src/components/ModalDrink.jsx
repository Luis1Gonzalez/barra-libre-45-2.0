import { Modal, Image, Button } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'


export default function ModalDrink() {

    const { modal, handleModalClick, recipe, charging, setModal } = useDrinks()


    const showMix = () => {
        let mix = []

        for (let i = 1; i < 16; i++) {
            if (recipe[`strIngredient${i}`]) {
                mix.push(
                    <li key={i}>{recipe[`strIngredient${i}`]}
                        {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return mix
    }

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }
    console.log(modal)
    return (

        !charging && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={recipe.strDrinkThumb}
                    alt={`Imagen de receta ${recipe.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{recipe.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Preparación</h2>
                        {recipe.strInstructions}
                        <h2>Ingredientes y Cantidad</h2>
                        {showMix()}
                        <div className='d-flex justify-content-end'>
                            <Button onClick={closeModal} variant='danger' className='fw-bold fs-6'>X</Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        )


    )
}
