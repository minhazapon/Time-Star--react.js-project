



const Nav = () => {
    return (
        <div className=" mt-2 ml-2 mr-2">

            <div>


 

            <div className="navbar bg-base-100">
  <div className="flex-1">

    <div className=" flex items-center gap-2">
    <img className=" h-[50px]" src="https://i.ibb.co/QNdh8nw/newspaper.png" alt="" />
    <a className=" font-serif  text-4xl">Time Star</a>

    </div>
    
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="   https://i.ibb.co/DRDVcND/newspaper-2.png  " />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>






















            </div>
            
        </div>
    );
};

export default Nav;