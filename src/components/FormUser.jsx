import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategory from '../hooks/useCategory'
import { useState } from 'react'
import useDrinks from '../hooks/useDrinks'
import useBase from '../hooks/useBase'


export default function FormUser() {

  const [search, setSearch] = useState({
    nameDrink: '',
    categoryDrink: '',
    baseDrink: ''
  })

  const { categories } = useCategory()
  const { consultDrink, alert } = useDrinks()
  const { base } = useBase()

  const handleSubmit = e => {
    e.preventDefault()

    consultDrink(search)
    search.categoryDrink=''
    search.baseDrink=''
    search.nameDrink=''
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >

      {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}

      <Row>
        <Col lg={4}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nameD'>Nombre de la Bebida</Form.Label>
            <Form.Control
              id='nameD'
              type="text"
              placeholder='Ej: Margarita, Avalanche, Afterglow, etc... '
              name='nameDrink'
              value={search.name}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            />
          </Form.Group>
        </Col>

        <Col lg={4}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='category'>Categoría</Form.Label>
            <Form.Select
              id='category'
              name='categoryDrink'
              value={search.categoryDrink}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            >
              <option value = ''>-- Selecciona Categoria --</option>
              {categories.map(categor => (
                <option
                  key={categor.strCategory}
                  value={categor.strCategory}
                >{categor.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col lg={4}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='baseIngredient'>Ingredientes</Form.Label>
            <Form.Select
              id='baseIngredient'
              name='baseDrink'
              placeholder='Ej: Tequila, Vodka, etc'
              value={search.baseDrink}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            >
              <option value = ''>-- Selecciona un Ingrediente --</option>
              {base.map(bas => (
                <option
                  key={bas.strIngredient1}
                  value={bas.strIngredient1}
                >{bas.strIngredient1}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Button
            variant='secondary'
            className='text-uppercase w-100'
            type='submit'
          >
            Buscar
          </Button>
        </Col>

      </Row>

      <Row className='justify-content-end'>
        

      </Row>

      <Row className='justify-content-end'>


        

      </Row>
    </Form>
  )
}

{/* <Form.Group></Form.Group> se usa para agrupar el label con el input */ }
{/* <Form.Control /> se usa para el input en bootstrap  */ }