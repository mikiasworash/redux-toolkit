import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
  const { isOpen } = useSelector((state) => state.modal)
  const { cartItems, isLoading } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
