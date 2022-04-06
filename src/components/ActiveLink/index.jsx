import { useRouter } from 'next/router'
import Link from 'next/link'
function ActiveLink({ children, href}) {
    const router = useRouter()
    const linkClass = "nav-link scrollto" + (router.pathname === href ? " active":"")

    return (<Link href={href}>
            <a className={linkClass} >
                {children}
            </a>
        </Link>

    )
}

export default ActiveLink
