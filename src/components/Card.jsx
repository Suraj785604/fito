import { BsCurrencyDollar } from 'react-icons/bs';
import { BsFileText } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import images from './image/images.jpeg';
import ima from './image/ima3.jpeg';
// import Chart from './Pai-chart';

const Cards = () => {
      return (
            <>

                  <section className=' relative'>
                        <div>
                              <h1>Hello Suraj</h1>
                        </div>
                        <div className=' absolute right-10 pl-2 flex border-hidden'>
                              <BiSearch className=' relative flex top-2' />
                              <input type="text" placeholder='search' className=' outline-none pl-1' />
                        </div>
                  </section><br /><br />
                  <section className='flex gap-11'>

                        <div className="card-block h-[10rem] bg-slate-100 w-[15rem] flex items-center gap-[2rem] pl-5">
                              <div className="card-left  bg-cyan-300 w-[5rem] h-[5rem] rounded-[50%] flex justify-center items-center border-r-2 border-l-2 border-b-2 rotate-45 border-green-600" >
                                    <BsCurrencyDollar className='rotate-[-45deg]' />
                              </div>
                              <div className="card-right">
                                    <h6 className=" font-normal">Earning</h6>
                                    <h1 className=" font-extrabold"><b>$198K</b></h1>
                                    <h5><em className=" text-red-500">37.8%</em> this month</h5>
                              </div>
                        </div>
                        <div className="card-block h-[10rem] bg-slate-100 w-[15rem] flex items-center gap-[2rem] pl-4">
                              <div className="card-left  bg-cyan-300 w-[5rem] h-[5rem] rounded-[50%] flex justify-center items-center" >

                                    <BsFileText className=" left-[2rem]  top-8 text-3xl" />
                              </div>
                              <div className="card-right">
                                    <h6 className=" font-normal">Order</h6>
                                    <h1 className=" font-extrabold"><b>$2.4K</b></h1>
                                    <h5><em className=" text-red-500">2%</em> this month</h5>
                              </div>
                        </div>
                        <div className="card-block h-[10rem] bg-slate-100 w-[15rem] flex items-center gap-[2rem] pl-4">
                              <div className="card-left  bg-cyan-300 w-[5rem] h-[5rem] rounded-[50%] flex justify-center items-center" >
                                    <CiWallet className=" left-[2rem]  top-8 text-3xl" />
                              </div>
                              <div className="card-right">
                                    <h6 className=" font-normal">Balance</h6>
                                    <h1 className=" font-extrabold"><b>$2.4K</b></h1>
                                    <h5><em className=" text-red-500">2%</em> this month</h5>
                              </div>
                        </div>
                        <div className="card-block h-[10rem] bg-slate-100 w-[15rem] flex items-center gap-[2rem] pl-4">
                              <div className="card-left  bg-cyan-300 w-[5rem] h-[5rem] rounded-[50%] flex justify-center items-center" >
                                    <FaShoppingBag className=" left-[2rem]  top-8 text-3xl" />
                              </div>
                              <div className="card-right">
                                    <h6 className=" font-normal">Order</h6>
                                    <h1 className=" font-extrabold"><b>$89K</b></h1>
                                    <h5><em className=" text-green-500">2%</em> this month</h5>
                              </div>
                        </div>
                  </section><br></br>
                  <section className=" flex gap-11">
                        <div className=" bg-slate-50 w-[116vh] h-[50vh] flex gap-7" >
                              <p>hello</p>
                              <div className=" bg-slate-400 h-[25vh] w-[5vh] flex  relative top-[8rem] rounded-[1rem]">
                                    <p className=" flex pt-[25vh]">Jan</p>
                              </div>
                              <div className=" bg-slate-400 h-[20vh] w-[5vh] flex  relative top-[10rem] rounded-[1rem]">
                                    <p className=" flex pt-[21vh]">Feb</p>
                              </div>
                              <div className=" bg-slate-400 h-[33vh] w-[5vh] flex  relative top-[4.1rem] rounded-[1rem]">
                                    <p className=" flex pt-[34vh]">Mar</p>
                              </div>
                              <div className=" bg-slate-400 h-[27vh] w-[5vh] flex  relative top-[6.8rem] rounded-[1rem]">
                                    <p className=" flex pt-[28vh]">Apr</p>
                              </div>
                              <div className=" bg-slate-400 h-[30vh] w-[5vh] flex  relative top-[5.4rem] rounded-[1rem]">
                                    <p className=" flex pt-[31vh]">May</p>
                              </div>
                              <div className=" bg-slate-400 h-[10vh] w-[5vh] flex  relative top-[14.3rem] rounded-[1rem]">
                                    <p className=" flex pt-[12vh]">Jun</p>
                              </div>
                              <div className=" bg-slate-400 h-[30vh] w-[5vh] flex  relative top-[5.4rem] rounded-[1rem]">
                                    <p className=" flex pt-[32vh]">Jul</p>
                              </div>
                              <div className=" bg-blue-500 h-[32vh] w-[5vh] flex  relative top-[4.3rem] rounded-[1rem]">
                                    <p className=" flex pt-[34vh]">Aug</p>
                              </div>
                              <div className=" bg-slate-400 h-[29vh] w-[5vh] flex  relative top-[5.7rem] rounded-[1rem]">
                                    <p className=" flex pt-[31vh]">Seb</p>
                              </div>
                              <div className=" bg-slate-400 h-[23vh] w-[5vh] flex  relative top-[8.6rem] rounded-[1rem]">
                                    <p className=" flex pt-[25vh]">Oct</p>
                              </div>
                              <div className=" bg-slate-400 h-[20vh] w-[5vh] flex  relative top-[10rem] rounded-[1rem]">
                                    <p className=" flex pt-[22vh]">Nov</p>
                              </div>
                              <div className=" bg-slate-400 h-[20vh] w-[5vh] flex  relative top-[10rem] rounded-[1rem]">
                                    <p className=" flex pt-[22vh]">Dec</p>
                              </div>
                        </div>
                        <div className=" bg-slate-100 h-[50vh] w-[40vh] flex justify-center items-center">
                              <div className=' text-[40rem]  '>
                                    <div > <img src={ima} alt="" className='  text-3xl' /></div>
                              </div>
                              {/* <Chart></Chart> */}
                        </div>
                  </section><br />

                  <section>
                        <div className="bg-slate-100 h-[20vh] w-[100%]">
                              <p className=' pl-4'>Product Sell</p>
                              <div className=' flex relative '>
                                    <div className='absolute right-10 flex gap-3'>
                                          <BiSearch className=' absolute top-1 left-1 ' />
                                          <input type="text" placeholder='search' className=' w-[20vw] pl-7 outline-none' />
                                          <p className=' bg-white '>last 30 days</p>

                                    </div>
                                    <div className=' mt-6 ml-4 text-slate-500  '>
                                          <p>product Name</p>
                                    </div>
                              </div>
                              <hr></hr>
                              <div className='w-[10vh] h-[8vh] pl-[1rem] pt-2 flex'>
                                    <img src={images} alt="" className='' />
                                    <p>Abstract3d</p>

                                    <div className=' absolute right-10 flex gap-2'>
                                          <p className=' relative right-[-400px]'>32 in stok</p>
                                          <p className='relative right-[-420px]'>$45.99</p>
                                          <p className='relative right-[-440px]'>20</p>
                                    </div>

                              </div>
                        </div>
                  </section>

            </>


      );
}
export default Cards;