import { CartDiv } from './StyledComponents';
import { useLocation } from 'react-router-dom';
import { StyledInput, StyledProductDelete } from './StyledComponents';
import { useEffect,useState } from 'react';

const Carts = ({ getShoeDetails, setGetShoeDetails }) => {
  const location = useLocation();
  const iscart = location.pathname === '/cart';

  const removeFromShoeDetails = (itemId) => {
    setGetShoeDetails((prevDetails) =>
      prevDetails.filter((item) => item.id !== itemId)
    );
  };

  const groupItems = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (!groupedItems[item.id]) {
        groupedItems[item.id] = {
          ...item,
          quantity: 1,
        };
      } else {
        groupedItems[item.id].quantity++;
      }
    });
    return Object.values(groupedItems);
  };  

  const groupedShoeDetails = groupItems(getShoeDetails);

  console.log(groupedShoeDetails)

  const handleQuantityChange = (itemId, change) => {
    setGetShoeDetails((prevDetails) =>
      prevDetails.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(item.quantity + change, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const [totalPrice, setTotalPrice] = useState(0);

const removeTimes = () => {
  const removed = groupedShoeDetails
  .map((item) => item.quantity)
}
removeTimes()

const totalPriceCalculator = () => {
  const totalPrice = groupedShoeDetails
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  return totalPrice;
};

useEffect(() => {
  const calculatedTotalPrice = totalPriceCalculator();
  setTotalPrice(calculatedTotalPrice);
}, [groupedShoeDetails]);

const shipping = 7
const calcTotal = () => {
  if(totalPrice >= 70){
    return totalPrice
  }else {
    return totalPrice + shipping
  }
}
const totalPayment = calcTotal()

const [isCouponNeos, setIsCouponNeos] = useState(false)
const coupon = 'neos'
const couponDiscount = (event) => {
  if(event.target.value === coupon){
    setIsCouponNeos(!isCouponNeos)
  }
}



  
  return (
    <CartDiv iscart={iscart.toString()}>
    <div className='py-16'>
      <h1 className='text-5xl text-center'>YOUR CART</h1>
    </div>
    
    <div className='flex flex-col pl-12 pr-16 lg:flex-row'>
      <table className='w-12/12 lg:w-8/12'>
      <thead>
          <tr>
            <th >PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th className='invisible text-white'>a</th>
          </tr>
        </thead>
        <tbody>
        {groupedShoeDetails.map((e,i) => (
          <tr key={i} className='border-t border-b'>
            <td className='flex items-center px-4 md:px-12'>
              <div className='w-32 h-[150] sm:w-40 sm:h-[200px] forImg'>
                <img src={e.image} alt="" className='w-100' />
              </div>
              <div className='hidden sm:block'>
                <h2>{e.title}</h2>
                <p>{e.category}</p>
              </div>
            </td>
            <td>
              <p className='text-center'>${e.price}</p>
            </td>
            <td>
              <div className='flex items-center justify-center'>
                <p className='px-2 py-1 text-xl text-center'>{e.quantity}</p>
              </div>
            </td>
            <td><p id='subtotal' className='text-center'>${e.price * e.quantity}</p></td>
            <td>
              <div>
                <StyledProductDelete
                  onClick={() => removeFromShoeDetails(e.id)}
                />
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>



      <div className='sticky w-full pt-6 bg-gray-100 lg:w-4/12 lg:top-4 h-min checkout'>
        <div className='px-12 py-4'>
          <p>Order Summary</p>
        </div>
        <div className='h-px bg-gray-500'></div>
        <div className='flex flex-col gap-4 px-12 py-4 bottom-side'>
          <div className='flex items-center justify-between'>
            <p className='text-center'>Subtotal</p>
            <p id='showTotal' className='text-center'>${totalPrice}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-center'>Shipping</p>
            <p className='text-center'>{totalPrice >= 70 ? 'Free' : '$7'}</p>
          </div>
          <div className='flex items-center justify-between'>
            <button style={{color: '#6FA86E'}}>Add coupon code &#8594;</button>
            <StyledInput 
            onChange={couponDiscount}
            className='bg-transparent border rounded-xl' 
            type="text"
            placeholder='Enter coupon code here'
            />
          </div>
        </div>
        <div className='flex items-center justify-between px-12 py-4 bg-gray-300 total-payment'>
          <p>Total</p>
          <div className='flex gap-4'>
            <p className={isCouponNeos ? 'line-through' : 'no-underline'}>${totalPayment }</p>
            <p className={isCouponNeos ? 'block' : 'hidden'}>${0}</p>
            
          </div>
          </div>
      </div>




    </div>


    </CartDiv>
  )
}

export default Carts