import picture from '../../../public/images/Picture.jpg'
import Arrow from '../../../public/poses/Right.png'
import Image from 'next/image'
export default function about() {
    return (
        <div className='mt-10 px-5 lg:px-0'>
            <a className='bg-gray-500 px-3 py-2 text-white font-poppins text-bold rounded-md shadow-lg' href='..'>Home</a>
            <div className='relative flex items-center justify-center'>
                <Image className='rounded-full h-32 w-32 lg:h-80 lg:w-80 absolute z-10' src={picture} alt='Picture'></Image>
                <div className='bg-sky-300 h-36 w-36 lg:h-80 lg:w-80 rounded-full shadow-md blur-md'></div>
            </div>

            <div className='flex justify-center flex-col items-center mt-7 bg-gray-200 rounded-md shadow-2xl py-3'>
                <div className='flex justify-start flex-col px-4'>
                    <h1 className='font-bold text-xl lg:text-2xl text-center'>About The Developer</h1>
                    <span className='flex flex-row items-center mt-2'><h2 className='font-bold text-base lg:text-2xl '>Name:</h2> <p className='font-poppins text-base lg:text-2xl text-yellow-700'>&nbsp; Tanjim Hasan</p></span>

                    <span className='flex flex-row items-center mt-2'><h2 className='font-bold text-base lg:text-2xl '>Email:</h2> <p className='font-poppins text-base text-yellow-700'>&nbsp; tushardebhata24@gmail.com</p></span>

                    <span className='flex flex-row items-center mt-2'><h2 className='font-bold text-base lg:text-2xl '>Education:</h2> <p className='font-poppins text-base lg:text-2xl text-yellow-700'>&nbsp; B.Sc in CSE</p></span>

                    <span className='flex flex-row  mt-2'><h2 className='font-bold text-base lg:text-2xl '>Institution:</h2> <p className='font-poppins text-base lg:text-2xl text-yellow-700'>&nbsp; Bangladesh University of Business and Technology</p></span>

                    <span className='flex flex-row items-center mt-2'><h2 className='font-bold text-base lg:text-2xl '>Address:</h2> <p className='font-poppins text-base lg:text-2xl text-yellow-700'>&nbsp; Mirpur-2, Dhaka-1216</p></span>

                    <h1 className='text-center font-bold text-lg lg:text-2xl mt-5 mb-3'>My Projects</h1>

                    <h2 className='flex items-center'><span className='flex items-center'><Image src={Arrow} alt='right' height='40' width='40'></Image> E commerce full stack- </span><a className='text-blue-500' target='blank' href="https://electro-tools-6f406.web.app/">&nbsp; Click Here</a></h2>

                    <h2 className='flex items-center'><span className='flex items-center'><Image src={Arrow} alt='right' height='40' width='40'></Image>Warehouse Mangement-</span> <a className='text-blue-500' target='blank' href="https://warehouse-management-b76ea.web.app/">&nbsp; Click Here</a></h2>

                    <h2 className='flex items-center'><span className='flex items-center'><Image src={Arrow} alt='right' height='40' width='40'></Image>Self Teaching Provider- </span><a className='text-blue-500' target='blank' href="https://self-teaching-provider.web.app/">&nbsp; Click Here</a></h2>

                    <h2 className='flex items-center'><span className='flex items-center'><Image src={Arrow} alt='right' height='40' width='40'></Image>Laptop Collection- </span><a className='text-blue-500' target='blank' href="https://laptop-collection.netlify.app/">&nbsp; Click Here</a></h2>

                    <h2 className='flex items-center'><span className='flex items-center'><Image src={Arrow} alt='right' height='40' width='40'></Image>Phone Bazar-</span><a className='text-blue-500' target='blank' href="https://phone-bazar-bd.netlify.app/">&nbsp; Click Here</a></h2>

                </div>
            </div>
        </div>
    )
}
