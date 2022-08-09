import './Index.css';

const Footer = () => {
  return (
    <div className="footer container mx-auto">
      <div className="fouth-section grid justify-items-center">
        <div className="menu-section">
          <ul>
            <li className="menu-text">About us</li>
            <li className="menu-text">Privacy policy</li>
            <li className="menu-text">Terms of use</li>
            <li className="menu-text">Rating and review guidelines</li>
          </ul>
        </div>
      </div>
      <div className="footer-section grid grid-cols-2 justify-items-stretch my-10 ml-40 mr-10">
        <div className="justify-self-start">
          <img
            className=""
            src="./images/happy-jobs-logo.svg"
            alt=""
          />
        </div>
        <div className="justify-self-end">
          <p className="text-footer">All rights reserved 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
