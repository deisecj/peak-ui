import './index.css';

const Footer = ({ menuClassName, footerClassName }) => {
  return (
    <div className="footer">
      <div className={menuClassName}>
        <ul>
          <a href='/info?q=1'><li className="menu-text">About us</li></a>
          <a href='/info?q=2'><li className="menu-text">Privacy policy</li></a>
          <a href='/info?q=3'><li className="menu-text">Terms of use</li></a>
          <a href='/info?q=4'><li className="menu-text">Rating and review guidelines</li></a>
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
