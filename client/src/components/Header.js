import Logo from '../assets/images/logo.png'
import Title from '../assets/images/lovelyandmanila.png'
import Navigations from './Navigations'

const TopBanner = (props) => {
  return(
    <div className='flex flex-row justify-between items-center bg-topbanner p-1 px-4'>
      <div>
        <p>{props.leftContent}</p>
      </div>
      <div>
        <p>{props.centerContent}</p>
      </div>
      <div>
        <p>{props.rightContent}</p>
      </div>
    </div>
  )
}

const LogoBanner = () => {
  return(
    <div className='flex justify-center items-center w-full py-3 h-full bg-white'>
      <div className='px-3'>
        <img src={Logo} alt="Lovely and Manila Flowershop" />
      </div>
      <div className='px-3'>
        <img src={Title} alt="Lovely and Manila Flowershop" />
      </div>
    </div>
  )
}

function Header(props) {
  return (
    <div>
      <TopBanner
        leftContent={props.leftContent}
        centerContent="Open from Monday to Friday - 7 AM to 10 PM"
        rightContent="Email us: example@gmail.com"
      />
      <LogoBanner/>
      <Navigations/>
    </div>
  )
}

export default Header
