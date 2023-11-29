import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.props = props
    const {reviewsList} = this.props
    this.reviewsList = reviewsList
    this.state = {initialList: reviewsList[0], index: 0}
  }

  nextOnClick = () => {
    const {index} = this.state
    const lenArray = this.reviewsList.length
    console.log(lenArray)
    if (index < lenArray - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  prevOnClick = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {imgUrl, username, companyName, description} = this.reviewsList[index]

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Reviews</h1>

          <div className="sub-card">
            <button
              type="button"
              data-testid="leftArray"
              onClick={this.prevOnClick}
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-img"
                alt="tlks"
              />
            </button>
            <div className="detail-card">
              <img src={imgUrl} alt="tlks" />
              <h1 className="name">{username}</h1>
              <p className="role">{companyName}</p>
              <p className="des">{description}</p>
            </div>
            <button
              type="button"
              data-testid="rightArray"
              onClick={this.nextOnClick}
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-img"
                alt="tlks"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
