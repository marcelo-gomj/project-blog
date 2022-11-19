import Link from 'next/link';
import header from './header.module.css';
import Search from '../../assets/search.svg';

export function Header() {
   return (
      <header className={header['container']}>

         <div className={header['logo-blog']}>UNIVERSO BLOG</div>

         <nav className={header['menu-container']}>
            <ul className={header['menu']}>
               <Link href={'/Inicio'}>
                  <li>Inicio</li>
               </Link>
               <Link href={'/Windows'}>
                  <li>Windows</li>
               </Link>
               <Link href={'/Celular'}>
                  <li>Celular</li>
               </Link>
               <Link href={'/Linux'}>
                  <li>Linux</li>
               </Link>
               <Link href={'/Sobre'}>
                  <li>Sobre</li>
               </Link>
            </ul>
         </nav>

         <div className={header['search-button']}><Search /></div>
      </header>
   )
}