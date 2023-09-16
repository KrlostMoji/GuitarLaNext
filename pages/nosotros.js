import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros(){
    return(
        <>
            <Layout
                title='Nosotros'
                description='Acerca de nosotros'>
                    <main className='contenedor'>
                        <h1 className='heading'>Nosotros</h1>
                        <div className={styles.contenido}>
                            <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut tellus leo. Aenean malesuada ut nisl in pellentesque. Aenean congue lectus a tellus interdum vestibulum. Nullam accumsan aliquet ante vitae tristique. Maecenas vel ligula ac lacus dictum consequat. Integer ac maximus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius dolor ac lacus malesuada, non posuere diam ultrices.
                                </p>
                                <p>
                                Praesent ultricies sed enim vitae accumsan. Sed eu mauris fermentum, tempor est eget, congue lectus. Integer sit amet felis metus. Etiam vitae vehicula eros, nec elementum libero. Maecenas condimentum sem et condimentum iaculis. Proin ultrices rutrum blandit. Nullam nec nulla vitae ante lacinia hendrerit. Maecenas feugiat lectus nec tellus dignissim, vel mattis libero cursus. Morbi aliquet tristique est ut lobortis.
                                </p>
                            </div>
                        </div>
                    </main>
            </Layout>
            
        </>    
    )
}