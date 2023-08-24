import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {AiFillTwitterCircle, } from 'react-icons/ai'
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import {TiSocialYoutubeCircular} from 'react-icons/ti'

const Footers = () => {
  return (
    <div className='p-8 bg-footer'>
      
      <div className='grid grid-cols-2 contain'>

        <div className="flex items-start gap-32 for-left">
          <div>
            <ul className='flex flex-col gap-4 font-sans text-sm text-white list-none'>
              <li><a href="# " className='text-sm font-bold'>GIFT CARDS</a></li>
              <li><a href="# " className='text-sm font-bold'>PROMOTIONS</a></li>
              <li><a href="# " className='text-sm font-bold'>FIND A STORE</a></li>
              <li><a href="# " className='text-sm font-bold'>BECOME A MEMBER</a></li>
              <li><a href="# " className='text-sm font-bold'>NIKE JOURNAL</a></li>
              <li><a href="# " className='text-sm font-bold'>SEND US FEEDBACK</a></li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-2 font-sans list-none'>
              <li><a href="#  " className='text-sm text-white'>GET HELP</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Order Status</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Shipping and Delivery</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Returns</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Order Cancellation</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Paymnet Options</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Gift Card Balance</a></li>
              <li><a href="#  " className='text-xs text-footerColor '>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-2 font-sans list-none'>
              <li><a href="#  " className='text-sm text-white'>ABOUT NIKE</a></li>
              <li><a href="#  " className='text-xs text-footerColor'>News</a></li>
              <li><a href="#  " className='text-xs text-footerColor'>Careers</a></li>
              <li><a href="#  " className='text-xs text-footerColor'>Investors</a></li>
              <li><a href="#  " className='text-xs text-footerColor'>Purpose</a></li>
              <li><a href="#  " className='text-xs text-footerColor'>Sustainability</a></li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col justify-between for-right">

          <div className='flex items-center justify-end text-white for-top'>
            <ul className='flex gap-3'>
              <li> <AiFillTwitterCircle size={32}  color='#7e7e7e' /> </li>
              <li> <BsFacebook size={32} color='#7e7e7e' /> </li>
              <li> <TiSocialYoutubeCircular size={32} color='#7e7e7e' /> </li>
              <li> <BsInstagram size={32} color='#7e7e7e' /> </li>
            </ul>
          </div>

          <div className="flex justify-end for-bottom">
            <ul className='flex items-center gap-6 text-sm text-footerColor'>
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Nike Privacy Policy</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>

        </div>

        </div>

        <div className='flex items-end justify-between'>

          <div className='flex gap-6 mt-20 text-xs'>
            <p className='flex items-center text-white'><MdLocationOn color='white' size={16}/>United States</p>
            <p className='text-footerColor'>® 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          <div>
            <p className='text-xs text-footerColor'>CA Supply Chains Act</p>
          </div>

        </div>
      

    </div>
  )
}

export default Footers