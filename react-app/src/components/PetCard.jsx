import './PetCard.css'

export default function PetCard({ pet, onAdd }) {
  return (
    <article className="petCard">
      <img className="petCard__img" src={pet.img} alt={pet.name} loading="lazy" />
      <div className="petCard__body">
        <h2 className="petCard__name">{pet.name}</h2>
        <p className="petCard__meta">
          <span className="petCard__type">{pet.type}</span>
          <span className="petCard__separator">•</span>
          <span className="petCard__breed">{pet.breed}</span>
        </p>
        <p className="petCard__desc">{pet.description}</p>
        <div className="petCard__footer">
          <span className="petCard__price">${pet.price}</span>
          <button className="petCard__button" type="button" onClick={() => onAdd(pet)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
