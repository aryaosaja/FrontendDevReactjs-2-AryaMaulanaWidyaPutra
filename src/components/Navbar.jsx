
import React, {} from 'react'
import { useLocation} from 'react-router-dom'
import { items } from './Data'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Navbar = ({setData}) => {
  // console.log(useLocation())
  const location = useLocation()



  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price == price)
    setData(element)
  }

  const filterByOpen = (opennow)=>{
    const element = items.filter((product)=>product.opennow === opennow)
    // console.log(element)
    setData(element)
  }

  return (
    <>
    <div>
      <h1 className='judul mx-3 my-3'>Restaurants</h1>

      <p className='teks mx-3 text-gray-600 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Voluptates, obcaecati ut? <br />Veritatis rem doloremque explicabo voluptates itaque libero, nam </p>
     </div>
       <header className='header sticky-top'>
       

        {
          location.pathname == '/' && (
          <div className="nav-bar-wrapper">
            <div className="items my-2 mx-3">Filter By {":"}</div>
           
            <div className="check form-check mx-3 my-2"
            onClick={()=>filterByOpen('OPEN NOW')}>
              
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label ms-2">Open Now</label>
                
            </div>
      
      
          <Nav className='kategori mx-4'>
            <NavDropdown
              id="nav-dropdown-example"
              title="Kategori" 
      
            >
            <div 
            onClick={()=>setData(items)}
            className="items mx-3">{"- "}No Filter</div>

            <div 
            onClick={()=>filterByCategory('japanesse')}
             className="items mx-3">Japanesse</div>

           <div
            onClick={()=>filterByCategory('thailand')}
             className="items mx-3">Thailand</div>
            
            <div
            onClick={()=>filterByCategory('american')}
             className="items mx-3">American</div>
            
            <div
            onClick={()=>filterByCategory('mexican')}
            className="items mx-3">Mexican</div>
      
            </NavDropdown>
          </Nav>

          <Nav className='price'>
            <NavDropdown
              id="nav-dropdown-example"
              title="Price"
      
            >
            <div 
            onClick={()=>setData(items)}
            className="items mx-3">{"- "}No Filter</div>

            <div
            onClick={()=>filterByPrice(7.15)}
            className="items mx-3">{"$. "}$</div>

            <div
            onClick={()=>filterByPrice(13.10)}
            className="items mx-3">{"$. "}$$</div>

            <div
            onClick={()=>filterByPrice(10.00)}
            className="items mx-3">{"$. "}$$$</div>

            <div
            onClick={()=>filterByPrice(15.20)}
            className="items mx-3">{"$. "}$$$$</div>
          
       
            </NavDropdown>
          </Nav>
            
          </div>
          )
        }

      
  </header>
    </>
  )
}

export default Navbar;