



const Banner = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>


            <div className="hero min-h-screen rounded-xl " style={{backgroundImage: 'url(   https://img.freepik.com/premium-photo/newspaper-background-concept_23-2149501622.jpg?w=740  )'}}>
  <div className="hero-overlay rounded-xl bg-opacity-60"></div>
  <div className=" text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Today</h1>
      <p className="mb-5 text-4xl ">HighLights All News </p>
      <div className=" flex justify-center items-center gap-5">

      <button className="btn btn-primary">News</button>
      <button className="btn btn-primary">Breaking News</button>
        
      </div>  
      
    </div>
  </div>
</div>












            </div>
            
        </div>
    );
};

export default Banner;