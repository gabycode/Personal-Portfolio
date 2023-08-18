import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SDQImage from '../../imgs/sdq.jpg'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mz43gdb',
        'template_d4iml9n',
        refForm.current,
        'bwwSwF-PGCgP7YbpF'
      )
      .then(
        () => {
          alert('Message succesfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Feel free to reach out! Whether you have a project in mind, want to
            collaborate, or just want to say hi, I'd love to hear from you.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="container-img">
        <img src={SDQImage} alt="Santo Domingo City" />
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}

export default Contact
