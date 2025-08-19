import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button/Button'
import { useState } from 'react'
import {ways, differences} from './data'

export default function App() {
  const [newContent, setNewContent] = useState(null)

  function clicker(type) {
    setNewContent(type)
  }

  function WayToTeach({title, description}) {
    return (
      <li>
          <p>
              <strong>{title}</strong>
              {description}
          </p>
      </li>
    )
  }

  return (
    <div>
      <Header/>
      <Main/>
      <section>
        <ul>
            <WayToTeach {...ways[0]}/>
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
        </ul>

        <div className="btns">
          <Button isActive={newContent === 'way'} onClick={() => clicker('way')}>Кнопка 1</Button>
          <Button isActive={newContent === 'easy'} onClick={() => clicker('easy')}>Кнопка 2</Button>
          <Button isActive={newContent === 'program'} onClick={() => clicker('program')}>Кнопка 3</Button>
        </div>

        { newContent ? <p>{differences[newContent]}</p> : <span>Нажатия нет</span>}

      </section>
    </div>
  )
}

