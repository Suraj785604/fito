import React from "react";
import { RiSettingsLine } from 'react-icons/ri';
import { TbSquareKey } from 'react-icons/tb';
import { RiWallet3Line } from 'react-icons/ri'
import { MdOutlineAccountBox } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci';
import { SiNginxproxymanager } from 'react-icons/si';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';
import Cards from "./Card";



function Dashboard() {
   return (
      <>
         {/* <section>
            <aside className=" pl-[40vh]"><h1>cfqfuidjq</h1></aside>
         </section> */}
         <section className=" flex flex-row gap-[4rem]" >
            <div className="left">
               <div className="bg-blue-900 w-[14rem] h-[731px]  ">
                  <div className="">
                     <div className=" pl-[1.5rem]  ">
                        <RiSettingsLine className=" relative bottom-1 top-6 text-[1.4rem] text-slate-100" />
                        <h1 className=" pl-[1.8rem] text-white">Dashboard</h1>
                     </div>
                  </div>

                  <div className=" pt-[10vh]  text-white pl-[3.3rem]">
                     {/* <div className=" text-white">
                     <h2 className="pl-[3.3rem] text-sm">Dashboard</h2>
                     <TbSquareKey className=" relative bottom-4  left-[1.6rem] text-[2.5vw]" />
                  </div> */}
                     <div className=" hover:bg-blue-300">
                        <h2 className="text-sm">Dashboard</h2>
                        <TbSquareKey className=" relative bottom-4 right-7" />
                     </div>
                     <div className="   ">
                        <h2 className="text-sm">Product</h2>
                        <SiNginxproxymanager className=" relative bottom-4 right-7" />
                     </div>
                     <div className="  ">
                        <h2 className="text-sm">Customer</h2>
                        <MdOutlineAccountBox className=" relative bottom-4 right-7" />
                     </div>
                     <div className="  ">
                        <h2 className="text-sm">Income</h2>
                        <RiWallet3Line className="relative bottom-4  right-7" />
                     </div>
                     <div className="  ">
                        <h2 className="text-sm">Promote</h2>
                        <CiDiscount1 className=" relative bottom-4 right-7" />
                     </div>
                     <div className="  ">
                        <h2 className="text-sm">Help</h2>
                        <BsFillChatSquareHeartFill className=" relative bottom-4 right-7" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="right">
               <Cards></Cards><br />
               {/* <Cards></Cards> */}

            </div>




         </section >





      </>
   )
}
export default Dashboard;