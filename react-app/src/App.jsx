import { useMemo, useState } from 'react'
import pets from './data/pets'
import PetCard from './components/PetCard'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('All')

  const filteredPets = useMemo(() => {
    if (filter === 'All') return pets
    return pets.filter((pet) => pet.type === filter)
  }, [filter])

  const addToCart = (pet) => setCart((prev) => [...prev, pet])

  const removeFromCart = (id) => setCart((prev) => prev.filter((pet) => pet.id !== id))

  const total = cart.reduce((acc, pet) => acc + pet.price, 0)

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Pet Shop</h1>
          <p className="subtitle">Browse friendly pets and add them to your cart.</p>
        </div>
        <div className="cart">
          <span className="cart__count">🛒 {cart.length} item{cart.length === 1 ? '' : 's'}</span>
          <span className="cart__total">Total: ${total}</span>
          {cart.length > 0 && (
            <button className="cart__clear" type="button" onClick={() => setCart([])}>
              Clear cart
            </button>
          )}
        </div>
      </header>

      <section className="filters">
        <button
          type="button"
          className={filter === 'All' ? 'active' : ''}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          type="button"
          className={filter === 'Dog' ? 'active' : ''}
          onClick={() => setFilter('Dog')}
        >
          Dogs
        </button>
        <button
          type="button"
          className={filter === 'Cat' ? 'active' : ''}
          onClick={() => setFilter('Cat')}
        >
          Cats
        </button>
        <button
          type="button"
          className={filter === 'Bird' ? 'active' : ''}
          onClick={() => setFilter('Bird')}
        >
          Birds
        </button>
      </section>

      <main className="grid">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} onAdd={addToCart} />
        ))}
      </main>

      {filteredPets.length === 0 && (
        <p className="empty">No pets match the selected category.</p>
      )}

      <footer className="footer">
        <p>
          Built with React + Vite. You can customize this project in <code>src/</code>.
        </p>
      </footer>
    </div>
  )
}

export default App
