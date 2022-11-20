import Link from 'next/link';
import header from './header.module.css';
import Search from '../../assets/search.svg';
import { useRouter }  from 'next/router';

export function Header() {
   const { pathname } = useRouter();

   const isHome = pathname === '/';

   return (
      <header className={header['container']}>
         <div className={header['top-header']}>
            <div className={header['logo-blog']}>UNIVERSO BLOG</div>

            <div className={header['search-main']}>
               <input type="text" />
            </div>

            <div className={header['controllers']}>
               <div className={header['login-button']}>Entrar</div>
               <div className={header['search-button']}>
                  {/* <Search /> */}
                  Pesquisar
               </div>
            </div>
         </div>

         <nav className={header['menu-container']}>
            <ul className={header['menu']}>
               <Link href={'/'}>
                  <li className={isHome ? header['active-menu'] : '' }>Inicio</li>
               </Link>
               <Link href={'/tutorias'}>
                  <li>Tutorias</li>
               </Link>
               <Link href={'/programacão'}>
                  <li>Programacão</li>
               </Link>
               <Link href={'/outros'}>
                  <li>Outros</li>
               </Link>
               <Link href={'/Sobre'}>
                  <li>Sobre</li>
               </Link>
            </ul>
         </nav>


      </header>
   )
}