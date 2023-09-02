import VeZuK from '../../img/VeZuK.png';
import BG from '../../img/bg-accueil.png';
import iconcs from '../../img/icon-csgo.png';

function Header() {
    return (
        <>
            <menu>
                <nav className=' bg-white flex justify-center gap-10 items-center shadow-lg shadow-bottom p-2 fixed w-full'>
                    <a href="/"><img src={VeZuK} alt="Logo VeZuK Blanc" width={60} className='rounded' /></a>
                    <ul className='flex gap-10'>
                        <li><a href="#" className='text-xl font-semibold'>Nos équipes</a></li>
                        <li><a href="#" className='text-xl font-semibold'>À propos</a></li>
                        <li><a href="#" className='text-xl font-semibold'>Nous rejoindre</a></li>
                    </ul>
                </nav>
            </menu>
            <header>
                <img src={BG} alt="fond de la page d'accueil" className='w-screen pt-16' />
                <div className='flex justify-center'>
                    <p className='text-center w-[500px] text-lg font-medium'>Nous sommes une équipe CS:GO amateur passionnée, déterminée à repousser nos limites et à vivre des moments mémorables dans le monde compétitif de Counter-Strike. Notre force réside dans notre unité et notre désir de nous améliorer constamment.</p>
                </div>
                <div className='flex justify-center my-4 brightness-[8]'>
                <img src={iconcs} alt="Icon csgo"  className=''/>
                </div>
            </header>
        </>
    )
}

export default Header;