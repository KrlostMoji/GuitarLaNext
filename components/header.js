import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'

export default function Header(){

    const router = useRouter()

    return(
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href='/'>
                    <Image src="/img/logo.svg" width={600} height={80} alt="logotipo"/>
                </Link>
                

                <nav className={styles.navegacion}>
                    <Link legacyBehavior href={'/'}>
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>    
                    </Link>
                    <Link legacyBehavior href={'/nosotros'}>
                        <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                            Nosotros
                        </a>
                    </Link>
                    <Link legacyBehavior href={'/tienda'}>
                        <a className={router.pathname === '/tienda' ? styles.active : ''}>
                            Tienda
                        </a>
                    </Link>
                    <Link legacyBehavior href={'/blog'}>
                        <a className={router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>
                    <Link legacyBehavior href={'/carrito'}>
                        <a>
                            <Image width={30} height={25} src='/img/carrito.png' alt="carrito de compras" ></Image>
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
        
    )
}