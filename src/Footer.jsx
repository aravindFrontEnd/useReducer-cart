
const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="footer-div">{`Copyright © papajaan Code ${year}`}</div>;
};

export default Footer;