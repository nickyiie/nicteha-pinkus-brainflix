import Logo from '../../assets/Images/Logo/Logo-brainflix.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import Lens from '../../assets/Images/Icons/Icon-search.svg';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Header.scss'

function Header () {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <NavLink className='header__link' to='/'><img className='header__logo' src={Logo} alt='logo'/></NavLink>
        <div className='header__search'>
          <img className='header__image' src={Lens} alt='magnifying glass'/>  
          <input className='header__search-bar' type='text' name='searchBar' placeholder='Search'></input>
        </div>
        <NavLink className='header__link' to='/upload'><p className='header__button'>+ UPLOAD</p></NavLink>
        <img className='header__avatar' src={Avatar} alt='avatar'/> 
      </nav>
    </header>
  )
}

export default Header;