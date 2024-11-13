import Image from "next/image";

export default function Home() {
  return ( <div className="justify-center">

    <div className="flex h-screen bg-cover bg-center bg-[url('/governor-house-03.jpg')]">
    {/* left section */}
       <div className="relative inset-0 bg-white/25 backdrop-blur-md p-10 pt-28 w-10/12 ">
       <p><h1 className="z-10 text-[4rem] font-extrabold leading-10 tracking-wider text-main whitespace-nowrap p-2  text-sky-800">Governor Sindh</h1></p>
       <p><h2 className="z-10 text-[2rem] p-1 text-sky-800  "><b>Kamran Khan Tessori</b></h2></p>
       <p className="z-10 text-[2rem] font-extrabold leading-10 tracking-wider text-sky-500">Certified Cloud <br />
          Applied Generative AI
           Engineer (GenEng) </p>
           <br />
            <p className="z-10 text-[1.5rem] font-extrabold leading-10 tracking-wider text-sky-900">
            Earn up to $5,000 / month
            <br />
            Now admissions are open in Hyderabad
            </p>
            <br />
         <div className="flex justify-around z-10"> 
          <button className="bg-sky-800 rounded-lg z-10 px-14 text-center text-white font-bold">APPLY NOW</button> 
         <p className="text-sky-800 text-center"><b className="text-[2rem] font-extrabold">562,143</b> <br />
         Accepted Applications</p></div></div>
      {/* right section of hero */}
      <div className=" inset-0 bg-white/25 backdrop-blur-md overflow-hidden  w-[1000px] h-[1900] ">
      <img className="z-10 pt-28 scale-150 w-[1600px] h-[1900] translate-x-1/4" src="/cover.1.png" alt="" />
      </div>
    </div>
    <div className=" p-11 text-center">
      <h1 className="text-[1.7rem] font-extrabold leading-10 tracking-wider text-sky-900">
        Certified Cloud Applied Generative AI Engineer (GenEng) 
        and Solopreneur <br /> Developing Billion-Dollar Valued Developers and Solopreneurs</h1> <br />
              <p className="px-10 py-10 justify-center text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon,
                Google, and OpenAI are winning by providing infrastructure, large AI foundation models,
                frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained
                in this program will win by automating work typically outsourced to employees, by directly 
                connecting to customers by eliminating the middleman, and by developing vertical metaverses,
                thus paving the way for the first billion-dollar valued solopreneur businesses. This program
               has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs 
               will adopt the ultra-lean business model and work independently and will not need to hire employees
                or other team members.</p>
    </div >
    <div className="flex  p-8 space-x-4 items-center">
      <div className="w-1/3">
        <img className="rounded-lg w-96 h-[350px] justify-center shadow-xl" src="/image.1.jpg" alt="" />
      </div>
      <div className="w-1/3">
        <img className="rounded-lg w-96 h-[350px] justify-center shadow-xl" src="/image.2.jpg" alt="" />
      </div>
      <div className="w-1/3">
        <img className="rounded-lg w-96 h-[350px] justify-center shadow-xl" src="/image.3.jpg" alt="" />
      </div>
    </div>
    <div className="space-x-4 p-8 flex">
      <div className="w-1/2">
        <img className="h-[600px] shadow-xl" src="slide.1.jpg" alt="" />
      </div>
      <div className="w-1/2">
        <img className="h-[600px] shadow-xl" src="slide.2.jpg" alt="" />
      </div>
    </div>
    <div className=" text-slate-500 justify-items-center  ">
         <h1 className="text-4xl">______________________________________________________________________________</h1>
      </div>
      <div>
        <h1 className="text-[1.7rem] px-10 py-10 font-extrabold leading-10 tracking-wider text-sky-900">Core Courses Sequence</h1>
      </div >
      <div className="flex px-10 py-10 space-x-5 justify-around justify-items-center w-[900px]">
        <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> <div>
          <img src="/core image1.jpg" alt="image1" /></div> image 1</div>
        <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/core image2.jpg" alt="image2" />
         </div> image 2 </div>
        <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/core image3.jpg" alt="image3" />
          </div> image 3
        </div>
        </div>
        <div>
        <div> <h1 className="text-[1.7rem] font-extrabold leading-10 tracking-wider text-sky-900 px-10 py-10">Advanced Courses
        </h1>        </div>
        
        
        
        
        <div className="flex px-10 py-10 space-x-5 justify-around justify-items-center w-[1300px]">
          
          
          <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 1.jpg" alt="image2" />
         </div> image </div></div>
          <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 2.jpg" alt="image2" />
         </div> image  </div></div>
          <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 3.jpg" alt="image2" />
         </div> image 2 </div></div>
          <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 4.jpg" alt="image2" />
         </div> image  </div></div>
        </div>

      </div >
      <div className="flex px-10 py-10 space-x-5 justify-around justify-items-center w-[650px]">
        <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 5.jpg" alt="image2" />
         </div> image  </div></div>
        <div> <div className="bg-slate-100  border-x-2 rounded-lg shadow-lg hover:scale-105"> 
          <div>
            <img src="/adv 6.jpg" alt="image2" />
         </div> image  </div></div>
      </div>

  
  </div>
  );
}
