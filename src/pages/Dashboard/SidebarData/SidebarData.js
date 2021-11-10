import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons'
import { faClipboardList, faCommentDots, faPlus, faShoppingCart, faSignOutAlt, faUser } 
from '@fortawesome/free-solid-svg-icons'

const sidebarData = [
   {
      id:1,
      icon:<FontAwesomeIcon icon={faAmazonPay}/>,
      title:'Pay',
      link:''
   },
   {
      id:2,
      icon:<FontAwesomeIcon icon={faShoppingCart}/>,
      title:'My Orders',
      link:'/myOrder'
   },
   {
      id:3,
      icon:<FontAwesomeIcon icon={faCommentDots}/>,
      title:'Review',
      link:'/review'
   },
   {
      id:4,
      icon:<FontAwesomeIcon icon={faClipboardList}/>,
      title:'Manage All Orders',
      link:'/manageAllOrder'
   },
   {
      id:5,
      icon:<FontAwesomeIcon icon={faPlus}/>,
      title:'Add Product',
      link:'/addProduct'
   },
   {
      id:6,
      icon:<FontAwesomeIcon icon={faUser}/>,
      title:'Make Admin',
      link:'/makeAdmin'
   },
   {
      id:7,
      icon:<FontAwesomeIcon icon={faClipboardList}/>,
      title:'Manage All Product',
      link:'/manageProduct'
   },
   {
      id:8,
      icon:<FontAwesomeIcon icon={faSignOutAlt}/>,
      title:'Logout',
      logout:true,
      link:'/login'
   },
]

export default sidebarData;