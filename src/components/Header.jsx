import {useState} from 'react'
import logo from '/logo-name.svg'


export default function Header() {
  const [now, setNow] = useState(new Date())
  setInterval(() => setNow(new Date), 1000)
  return(
    <header>
      <h3>Вася - боров</h3>
      <img src={logo} alt="" />
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  )
}