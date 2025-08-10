import KeyCloakService from "../helpers/KeycloakService";

const Nav = () => {
 
 return (
   <div>
     <div className="top-0 w-full flex flex-wrap">
       <section className="x-auto">
         <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
             <div className="hidden xl:flex items-center space-x-5">
              <ul className="flex space-x-5">
                  <li>
                    <a href="/" className="hover:text-gray-800">Home</a>
                  </li>
                  <li>
                    <a href="/golang" className="hover:text-gray-800">Golang Page</a>
                  </li>
                  </ul>
               <div className="hover:text-gray-200">
                 {!KeyCloakService.GetInstance().authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => KeyCloakService.GetInstance().login()}
                   >
                     Login
                   </button>
                 )}

                 {!!KeyCloakService.GetInstance().authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => KeyCloakService.GetInstance().logout()}
                   >
                     Logout ({KeyCloakService.GetInstance().tokenParsed.preferred_username})
                   </button>
                 )}
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;