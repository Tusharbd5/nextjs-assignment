import crucified from '../../../public/poses/crucified-pose.png'
import dancer from '../../../public/poses/dancer-pose.png'
import motion from '../../../public/poses/dancer-motion.png'
import arrow from '../../../public/poses/ArrowRight.png'
import Image from 'next/image'

export default function Body() {
    return (
        <div className=" px-10 mt-28">
            {/* Text Line Status */}
            <div className="flex lg:flex-row flex-col items-center">
                <div className="lg:w-1/2 lg:pl-32">
                    <h1 className="text-3xl lg:ml-36 leading-10">Healthy in side <br /> fresh out side</h1>
                </div>
                <div className="lg:w-1/2 lg:pr-32">
                    <p className="text-justify font-poppins text-base">
                        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day
                    </p>
                </div>
            </div>
            {/* Shape Info Status */}
            <div className="lg:pl-32 lg:mt-24 mt-10">
                <div className="shape-info-rectangle lg:mx-36 flex lg:flex-row flex-col items-center justify-center lg:gap-20 gap-8">
                    <div className='flex flex-row items-center gap-10'>
                        <div className='relative flex justify-center items-center'>
                            <Image src={crucified} alt='Crucified'></Image>
                            <span className="poses-rectangle absolute" />
                        </div>
                        <div>
                            <h2 className='text-white font-bold font-poppins text-base lg:text-xl'>
                                Get that 11 line <br /> in 30 days
                            </h2>
                            <span className='flex flex-row items-center gap-5 learn-more font-poppins'>Learn more <Image src={arrow} alt='Arrow right'></Image></span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <div className='relative flex justify-center items-center'>
                            <Image src={dancer} alt='Crucified'></Image>
                            <span className="poses-rectangle absolute" />
                        </div>
                        <div>
                            <h2 className='text-white font-bold font-poppins text-base lg:text-xl'>
                                14 Days <br /> sherd challenge
                            </h2>
                            <span className='flex flex-row items-center gap-5 learn-more font-poppins'>Learn more <Image src={arrow} alt='Arrow right'></Image></span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <div className='relative flex justify-center items-center'>
                            <Image src={motion} alt='Crucified'></Image>
                            <span className="poses-rectangle absolute" />
                        </div>
                        <div>
                            <h2 className='text-white font-bold font-poppins text-base lg:text-xl'>
                                Get flat belly <br /> in 30 days
                            </h2>
                            <span className='flex flex-row items-center gap-5 learn-more font-poppins'>Learn more <Image src={arrow} alt='Arrow right'></Image></span>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
