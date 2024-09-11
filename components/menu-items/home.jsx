import React from 'react';

const Home = ({ variant }) => {
  const styles = {
    default: 'absolute left-0 top-[38px] z-20 flex w-[150px] flex-col bg-white',
    other: ' ',
  };
  const selectedStyle = styles[variant] || styles.default;


  return (
    <div className={selectedStyle}>
      <ul className="flex w-full flex-col items-start ">
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]">
          Home
        </li>
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]">
          About
        </li>
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]">
          Account
        </li>
      </ul>
    </div>
  );
};

export default Home;
