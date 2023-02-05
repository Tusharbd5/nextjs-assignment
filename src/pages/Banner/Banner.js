import Image from 'next/image'
import banner1 from '../../../public/images/Banner1.jpg'
import Mesh from '../../../public/shapes/Mesh.png'
import Workout1 from '../../../public/shapes/Workout1.png'
import curve from '../../../public/shapes/Curve.png'
import ellipse from '../../../public/shapes/Ellipse.png'
import Workout2 from '../../../public/shapes/Workout2.png'
import Workout3 from '../../../public/shapes/Workout3.png'
import bannerBtn from '../../../public/shapes/play button.png'
import playBtn from '../../../public/shapes/Play.png'
import info from '../../../public/shapes/Info.png'
import Nike from '../../../public/brands/Nike.png'
import Addidas from '../../../public/brands/Addidas.png'
import Puma from '../../../public/brands/Puma.png'
import Reebok from '../../../public/brands/Reebok.png'


export default function Banner() {
    return (
        <div className='mt-24'>
            <div className='flex items-center lg:justify-center flex-col lg:flex-row px-10'>
                <div className='lg:w-1/2 lg:pl-32'>
                    <h2 className='text-2xl lg:ml-36'>Healthy in side <br></br><span><span className='text-sky-800 font-bold'>fresh</span> out side</span></h2>

                    <p className='lg:ml-36 text-justify'>
                        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                    </p>

                    {/* Banner Button */}
                    <div className='lg:ml-36 mt-10 flex flex-row items-center gap-10'>
                        <button className='banner-btn flex flex-row items-center justify-evenly'>Get Started <Image src={bannerBtn} alt='banner Button'></Image></button>

                        <button className='learn-banner-btn flex flex-row items-center justify-evenly'><Image src={playBtn} alt='banner Button 1'></Image> Learn More </button>
                    </div>

                    {/* Brands */}
                    <div className='lg:ml-36 mt-10'>
                        <p>Brands:</p>

                        <div className='flex flex-row gap-5 mt-7 items-center'>
                            <Image src={Nike} height='25' width='59' alt="Nike"></Image>
                            <Image src={Addidas} height='54' width='55' alt="Addidas"></Image>
                            <Image src={Puma} height='42' width='80' alt="Puma"></Image>
                            <Image src={Reebok} height='30' width='120' alt="Reebok"></Image>
                        </div>
                    </div>
                </div>

                {/* Image portion */}
                <div className='lg:w-1/2 w-2/3'>

                    <div className='relative lg:mt-24 mt-32'>

                        <div className='flex justify-center'>

                            <div>
                                <Image className='bottom-0 absolute curve-img' src={curve} alt='Curve'></Image>

                                <Image className='bottom-0 absolute lg:left-48' src={ellipse} alt='Ellipse'></Image>

                                <Image className='workout3 absolute -left-12 lg:left-20 lg:-bottom-20 bottom-0' src={Workout3} alt='workout3'></Image>

                                <Image className='workout2 absolute -right-2 lg:right-52 z-30 -top-10' src={Workout2} alt='Workout2'></Image>
                            </div>

                            <div className='flex items-center justify-end'>

                                <Image className='mesh-img bottom-0 z-0' src={Mesh} alt='shape1'></Image>

                                <Image className='bottom-0 banner-img absolute z-20' src={banner1} alt='Image'></Image>
                            </div>
                        </div>

                        {/* Information portion */}
                        <div className='banner-work-div lg:-top-10 -top-10 absolute p-2 rounded-3xl shadow-2xl bg-white lg:left-52 -left-10 z-30'>
                            <div className='flex items-center'>
                                <Image className='workout1' src={Workout1} height='60' width='60' alt='workout'></Image>

                                <div>
                                    <h1 className='font-bold'>150+</h1>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>

                        <div className='info-work absolute flex flex-col justify-center items-center lg:right-32 -right-5 bottom-10 z-50'>
                            <Image className='info-img' src={info} height='66' width='66' alt='workout'></Image>

                            <div className='mt-3'>
                                <p>Zaqky Simorang</p>
                                <p className='text-gray-400'>Trainer</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
