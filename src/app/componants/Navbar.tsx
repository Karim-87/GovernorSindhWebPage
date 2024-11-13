
function Navbar () {
    return ( 
        <nav className="relative flex justify-between bg-sky-800 px-6 py-7">
            <div>
                <img className="z-10 w-18 h-28 absolute top-1/3" src="/logo.g.png" alt="Logo" />
            </div>
            <div>
            <h1 className="text-2xl text-blue-200"><b>Tuition Free Education Program on Latest Technologies</b></h1>

            </div>
            <div>
                <ul className="flex text-white space-x-6">
                <li className="">
                   <a href="/"> Home
                   </a>                </li>
                <li><a href="">Apply
                </a>
                </li>
                <li><a href="">Jobs</a>

                </li>
                <li><a href="">Result</a>
                    
                </li>
                <li>
                   <a href="">Courses</a> 

                </li>
                </ul>
                </div>
        </nav>
        
    )
};

export default Navbar
