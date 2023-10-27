import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div>
      <div>
        <Header
          title="Contact Us"
          page="Contact Us"
        />
      </div>
      <div className='mx-40 py-16 gap-10 flex flex-row justify-center items-center'>
        <IconCard
          title="Call us: +63 123 123 1234"
          icon={<LocalPhoneIcon/>}
        />
        <IconCard
          title="Open at from: Monday - Sunday, 
7:00 am - 10:00 pm"
          icon={<AccessTimeIcon/>}
        />
        <IconCard
          title="Visit us: Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila, Marikina City, Philippines"
          icon={<LocationOnIcon/>}
        />
        <IconCard
          title="Email us: manilaflowershop@yahoo.com "
          icon={<MailOutlineIcon/>}
        />
      </div>
      <div>
        
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact

const IconCard = (props) => {
  return (
    <div className='flex flex-col justify-evenly items-center h-48 w-48 shadow-xl'>
      <div>{props.icon}</div>
      <p>{props.title}</p>
    </div>
  )
}