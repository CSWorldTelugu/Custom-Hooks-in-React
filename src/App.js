
import './App.css'

import getAPiData from './utils'
function App() {

    let product = getAPiData('https://fakestoreapi.com/products/1')



    return (

        <>
            <h1>Custom hooks demo</h1>
            <div>{Object.keys(product)}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>

        </>
    )




}











export default App