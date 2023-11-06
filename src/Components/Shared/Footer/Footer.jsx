
// import logo from '../../public/GlobalSpeakLogo.png'
const Footer = () => {

    return (
        <div className='text-center mt-[130px] pt-[50px]'>
            <hr className='border-[#004d73]' />
            {/* Heading Started */}
            <h1 className='pt-[50px] primary_text text-5xl mb-16 fontB '>muzAcademy
            </h1>
            <div className='relative mb-10'>
                <hr className='w-72 -mt-12 border border-[#004d73] mx-auto ' />
                <p className='absolute -top-5 primary_text left-1/2 -translate-x-1/2 text-7xl font-thin rotate-12'>"</p>
            </div>
            <p className='fontA -mt-6 text-lg mb-7'>Subscribe to our mailing list</p>
            {/* Heading Finish */}

            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px]'>
                {/* Subscribe Email */}
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#004d73] input rounded-full' type="email" placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-[#004d73] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#004d73] hover:bg-[#13303f] hover:text-base-300' type="submit">Subscribe</button>
            </div>


            <div className='pb-[50px] MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4'>
                <ul >
                    <li className='text-xl fontB'>Popular Classes</li>
                    <li>Turkish</li>
                    <li>Korean</li>
                    <li>Arabic</li>
                    <li>Mandarin Chinese</li>
                    <li>German</li>
                    <li>Spanish</li>

                </ul>
                <ul >
                    <li className='text-xl fontB'>Popular Instructors </li>
                    <li>Ayşe Kaya</li>
                    <li>Seo Yeon-ji</li>
                    <li>Fatima Khalid</li>
                    <li>Li Wei</li>
                    <li>Hans Müller</li>
                    <li>Maria Rodriguez</li>
                </ul>
                <ul>
                    <li className='text-xl fontB'>Contacts</li>
                    <li>1122 Potter Rd, Antelope</li>
                    <li>info@example.com</li>
                    <li>18881234567</li>

                </ul>
                <ul>
                    <li className='text-xl fontB'>Social</li>
                    <li>Facebook</li>
                    <li>Behance</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <hr className='border-[#004d73]' />

            <img
                className='h-10 mt-2 mx-auto'  />

            <p className=' mb-4 textShadow '>Copyright © 2023 Mahmud Uz Zaman</p>
        </div>
    );
};

export default Footer;