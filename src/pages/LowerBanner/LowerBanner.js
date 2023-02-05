import Image from "next/image"
import Exercise from '../../../public/images/image 78.png'
import Mesh from '../../../public/images/Mesh.png'
import Ellipse from '../../../public/shapes/Ellipse1.png'
import vector from '../../../public/shapes/Vector.png'
import Workout2 from '../../../public/shapes/Workout2.png'
import Breathing from '../../../public/shapes/Breathing.png'
import Crucified from '../../../public/poses/crucified-pose.png'
import Arrow from '../../../public/poses/ArrowRight.png'

export default function LowerBanner() {
    return (
        <div className="flex lg:flex-row flex-col-reverse items-center lg:mt-32 mt-14 px-10">
            {/* Image portion starts */}
            <div className="lg:w-1/2 lg:pl-32 flex justify-end mt-20 lg:mt-0">
                <div className="relative">
                    <Image className="lower-banner-mesh" src={Mesh} alt='Mesh'></Image>
                    <Image className="absolute -z-10 bottom-0" src={Ellipse} alt='Ellipse'></Image>
                    <Image className="absolute lg:-left-20 -left-10 bottom-0" src={vector} alt='Vector'></Image>
                    <Image className="lower-banner-img absolute lg:-left-16 -left-5 bottom-0" src={Exercise} alt='Exercise'></Image>
                    <Image className="absolute bottom-1/2 -right-3 low-workout-shape-1" src={Workout2} alt='Workout'></Image>
                    <Image className="absolute -top-5 lg:-left-5 -left-2 low-workout-shape-2" src={Breathing} alt='Breathing'></Image>

                    <div className='flex flex-row items-center justify-center gap-5 low-banner-rectangle absolute bottom-9 lg:-left-40 -left-20'>
                        <div className='relative flex justify-center items-center'>
                            <Image className="crucified-lw-banner-img mx-auto z-30" src={Crucified} alt='Crucified'></Image>
                            <span className="poses-ellipse absolute" />
                        </div>
                        <div>
                            <h2 className='font-bold font-poppins text-xs lg:text-base'>
                                800 kall
                            </h2>
                            <p className="font-poppins text-xs">Burn fat</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:w-1/2 lg:pr-32 lg:ml-28">
                <h1 className="text-3xl leading-10 mb-7">Best full body <br /> workout to lose fat</h1>

                <p className="font-poppins text-base text-justify">
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                </p>

                <button className='banner-btn flex flex-row items-center justify-center gap-5 mt-12'><span className="font-poppins text-xs lg:text-base">Get Started </span><Image src={Arrow} alt='banner Button'></Image></button>
            </div>
        </div>
    )
}
