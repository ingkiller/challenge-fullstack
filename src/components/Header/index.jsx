import ActiveLink from "../ActiveLink";

export default () => {
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
               <h1 className="logo"><a href="/posts">Challenger<span>.</span></a></h1>
               <nav id="navbar" className="navbar">
                   <ul>
                       <li><ActiveLink href="/posts" >Posts</ActiveLink></li>
                       <li><ActiveLink href="/albums" >Albums</ActiveLink></li>
                       <li><ActiveLink href="/todo" >Todo</ActiveLink></li>
                       <li><ActiveLink href="/about" >About</ActiveLink></li>
                       <li><ActiveLink href="/contact" >Contact</ActiveLink></li>
                   </ul>
                   <i className="bi bi-list mobile-nav-toggle"/>
               </nav>
           </div>
       </header>
   </>)
}
