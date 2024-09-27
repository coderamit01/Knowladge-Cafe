import Logo from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className=''>
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b py-3">
          <h2 className='text-3xl font-semibold'>Knowledge Cafe</h2>
          <img src={Logo} alt="" /> 
        </div>
      </div>
    </div>
  );
};

export default Header;