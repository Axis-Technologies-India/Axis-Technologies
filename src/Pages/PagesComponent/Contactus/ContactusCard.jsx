import { MdOutlineEmail } from 'react-icons/md'
import aboutData from '../../../Utils/AboutData';

const ContactusCard = () => {
  return (

      <div className="flex flex-col lg:flex-row gap-4">
        {
          aboutData.map((item, id) => {
            return <div className="flex flex-row justify-between items-center gap-4 bg-gray-100 p-8">
              <div className="bg-primaryColor flex items-center justify-center min-w-[2rem] min-h-[2rem] rounded-[50%]">
                <MdOutlineEmail />
              </div>
              <p className="text-sec-head"><a href={`mailto:${item.email}`}>{item.email}</a></p>
            </div>
          })
        }
      </div>

  )
}

export default ContactusCard