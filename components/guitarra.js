import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}){

    const {descripcion, imagen, nombre, precio, url} = guitarra;

    return(
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link legacyBehavior href={`guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Detalles
                    </a>
                </Link>
            </div>
            
        </div>
    )
}