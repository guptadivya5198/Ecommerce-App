import React from 'react';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarsIcon from '@mui/icons-material/Stars';

const Footer = () => {
  return (
    <div className="bg-slate-700 w-[1600px] fixed bottom-0 mt-3">
      <div className="flex gap-2 text-white   justify-evenly">
        <div className="mt-3">
          <p className="font-semibold">ONLINE SHOPPING</p>
          <div className="text-xs leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Men</p>
            <p className="hover:text-blue-400 hover:underline">Women</p>
            <p className="hover:text-blue-400 hover:underline">Kids</p>
            <p className="hover:text-blue-400 hover:underline">Home & Living</p>
            <p className="hover:text-blue-400 hover:underline">Gift Cards</p>
            <p className="hover:text-blue-400 hover:underline">Beauty</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-semibold">GROUP COMPANIES</p>
          <div className="text-xs leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Myntra</p>
            <p className="hover:text-blue-400 hover:underline">Cleartrip</p>
            <p className="hover:text-blue-400 hover:underline">Shopsy</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-semibold">HELP</p>
          <div className="text-xs leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Payments</p>
            <p className="hover:text-blue-400 hover:underline">Shipping</p>
            <p className="hover:text-blue-400 hover:underline">
              Cancellation & Returns
            </p>
            <p className="hover:text-blue-400 hover:underline">FAQ</p>
            <p className="hover:text-blue-400 hover:underline">
              Report Infringement
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-semibold">CUSTOMER POLICIES</p>
          <div className="text-xs leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Contact Us</p>
            <p className="hover:text-blue-400 hover:underline">Terms of Use</p>
            <p className="hover:text-blue-400 hover:underline">Security</p>
            <p className="hover:text-blue-400 hover:underline">Privacy</p>
            <p className="hover:text-blue-400 hover:underline">Track Orders</p>
          </div>
        </div>
      </div>
      <div className="h-[2px] my-4 w-full bg-white"></div>
      <div className="flex justify-evenly mt-2 mb-0 text-white">
        <div>
          {' '}
          <CardGiftcardIcon /> Become a seller
        </div>
        <div>
          {' '}
          <StarsIcon />
          Advertise
        </div>
        <div>
          {' '}
          <CardGiftcardIcon />
          Gift
        </div>
        <div>
          <CardGiftcardIcon />
          Banner
        </div>
        <div>
          <CardGiftcardIcon />
          Poster
        </div>
        <div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
