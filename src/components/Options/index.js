import './index.css'

const Options = props => {
  const {opt, changingOpt, light} = props
  const {tabId, displayText} = opt
  const clickingOpt = () => {
    changingOpt(tabId)
  }
  return (
    <li>
      <button
        onClick={clickingOpt}
        className={light === tabId ? 'clr-style' : 'opt-style'}
      >
        {displayText}
      </button>
    </li>
  )
}
export default Options
