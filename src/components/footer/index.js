import './index.css';

const Footer = ({ menuClassName, footerClassName }) => {
  return (
    <div className="footer">
      <div className={menuClassName}>
        <ul>
          <li className="menu-text">About us</li>
          <li className="menu-text">Privacy policy</li>
          <li className="menu-text">Terms of use</li>
          <li className="menu-text">Rating and review guidelines</li>
        </ul>
      </div>
      <div className='footer-bg'>
        <div className="subpage-container">
          <div className={footerClassName}>
            <div className="footer-content">
              <img
                className="footer-logo"
                src="/images/peak-logo.svg"
                alt=""
              />
            </div>
            <div className=''>
              <p className="footer-text">All rights reserved 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
