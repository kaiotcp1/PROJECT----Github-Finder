import {errorMessageProps} from '../types/errorMessage'

const Error = ({errorMessage}: errorMessageProps) => {
  return (
    <div>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error