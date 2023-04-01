import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {CustomButton} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isTextUnderScoreActive: false,
    textAreaInput: '',
  }

  changeTextInput = event => {
    this.setState({textAreaInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      isTextUnderScoreActive: !prevState.isTextUnderScoreActive,
    }))
  }

  render() {
    const {
      isBoldActive,
      isItalicActive,
      isTextUnderScoreActive,
      textAreaInput,
    } = this.state

    const style = {
      fontWeight: isBoldActive ? 'bold' : 'normal',
      fontStyle: isItalicActive ? 'italic' : 'normal',
      textDecoration: isTextUnderScoreActive ? 'underline' : 'none',
    }

    return (
      <div className="main-bg-container">
        <div className="image-container">
          <img
            className="text-editor-img"
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
          <div className="text-input-container">
            <ul className="buttons-container">
              <li>
                <CustomButton
                  onClick={this.onClickBold}
                  outline={isBoldActive}
                  data-testid="bold"
                >
                  <VscBold />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  onClick={this.onClickItalic}
                  outline={isItalicActive}
                  data-testid="italic"
                >
                  <GoItalic />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  onClick={this.onClickUnderLine}
                  type="button"
                  outline={isTextUnderScoreActive}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </CustomButton>
              </li>
            </ul>
            <hr className="hr-line" />
            <div className="text-container">
              <textarea
                style={style}
                onChange={this.changeTextInput}
                value={textAreaInput}
                className="text-area"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
