import ActiveLink from "../ActiveLink";
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    console.log('router:',router)
   return ( <>
       <section id="topbar" className="d-flex align-items-center">
           <div className="container d-flex justify-content-center justify-content-md-between">
               <div className="contact-info d-flex align-items-center">
                   <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                   <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 2345 678901 23</span></i>
               </div>
               <div className="social-links d-none d-md-flex align-items-center">
                   <a href="#" className="twitter"><i className="bi bi-twitter"/></a>
                   <a href="#" className="facebook"><i className="bi bi-facebook"/></a>
                   <a href="#" className="instagram"><i className="bi bi-instagram"/></a>
                   <a href="#" className="linkedin"><i className="bi bi-linkedin"/></a>
               </div>
           </div>
       </section>
       <header id="header" className="d-flex align-items-center">
           <div className="container d-flex align-items-center justify-content-between">

               <h1 className="logo"><a href="index.html">Challenger<span>.</span></a></h1>
               <nav id="navbar" className="navbar">
                   <ul>
                       <li><a className="nav-link" href="#hero">Post</a></li>
                       <li><ActiveLink href="/posts" >Posts</ActiveLink></li>
                       <li><ActiveLink href="/albums" >Albums</ActiveLink></li>
                       <li><a className="nav-link scrollto" href="#about">Albums</a></li>
                       <li><a className="nav-link scrollto" href="#services">Todo</a></li>
                       <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                       <li><a className="nav-link scrollto" href="#team">Team</a></li>
                       <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                           <ul>
                               <li><a href="#">Drop Down 1</a></li>
                               <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                   <ul>
                                       <li><a href="#">Deep Drop Down 1</a></li>
                                       <li><a href="#">Deep Drop Down 2</a></li>
                                       <li><a href="#">Deep Drop Down 3</a></li>
                                       <li><a href="#">Deep Drop Down 4</a></li>
                                       <li><a href="#">Deep Drop Down 5</a></li>
                                   </ul>
                               </li>
                               <li><a href="#">Drop Down 2</a></li>
                               <li><a href="#">Drop Down 3</a></li>
                               <li><a href="#">Drop Down 4</a></li>
                           </ul>
                       </li>
                       <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                   </ul>
                   <i className="bi bi-list mobile-nav-toggle"></i>
               </nav>

           </div>
       </header>

   </>)
}
