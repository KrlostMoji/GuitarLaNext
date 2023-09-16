import Layout from "@/components/layout"
import Link from 'next/link'

export default function Page404(){
    return(
        <Layout
            title="Página no encontrada">
            <p className="error">Página no encontrada</p>
            <Link legacyBehavior href='/'>
                <a className="error-enlace">
                    Regresar al Inicio
                </a>
            </Link>
        </Layout>

    )

}