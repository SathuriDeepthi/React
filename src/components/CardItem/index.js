// Write your code here.
import './index..css'
const cardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default cardItem
