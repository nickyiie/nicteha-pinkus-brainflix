import Logo from '../../assets/Images/Logo/Logo-brainflix.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import Lens from '../../assets/Images/Icons/Icon-search.svg';
import '../scss/Header.scss'

function Header () {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img className='header__logo' src={Logo} alt='logo'/>
        <div className='header__search'>
          <input className='header__search-bar' type='text' name='searchBar' placeholder='Search'></input>
          <img className='header__image' src={Lens} alt='magnifying glass'/>
        </div>
        <p className='header__button'>+ UPLOAD</p>
        <img className='header__avatar' src={Avatar} alt='avatar'/> 
      </nav>
    </header>
  )
}

export default Header;