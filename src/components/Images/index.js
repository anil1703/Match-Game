import './index.css'

const Images = props => {
  const {data, clickingImage} = props
  const {id, imageUrl, thumbnailUrl, category} = data
  const seletingImg = () => {
    clickingImage(id)
  }
  return (
    <li>
      <button onClick={seletingImg} className="images-buton">
        <img src={thumbnailUrl} className="image-thumb" alt="thumbnail" />
      </button>
    </li>
  )
}
export default Images
