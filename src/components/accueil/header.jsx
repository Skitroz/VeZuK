import BG from '../../img/serpent.jpg';
import iconcs from '../../img/icon-csgo.png';
import VeZuK2 from '../../img/VeZuK2.png';
import './header.css';

function Header() {
    return (
        <>
            <menu>
                <nav className='bg-white flex justify-center gap-10 items-center shadow-lg shadow-bottom p-2 fixed w-full z-50'>
                    <a href="/"><img src={VeZuK2} alt="Logo VeZuK Blanc" width={60} className='rounded' /></a>
                    <ul className='flex gap-10'>
                        <li><a href="#" className='text-xl font-semibold'>Nos équipes</a></li>
                        <li><a href="#" className='text-xl font-semibold'>À propos</a></li>
                        <li><a href="#" className='text-xl font-semibold'>Nous rejoindre</a></li>
                    </ul>
                </nav>
            </menu>
            <header>
                <div className='relative'>
                    <img src={BG} alt="fond de la page d'accueil" className='w-screen h-[750px] shadow-lg shadow-bottom bg-white brightness-[0.20]' />
                    <h1 className='text-[15rem] text-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 typewriter'>VeZuK</h1>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center w-[500px] text-lg font-medium my-8'>Nous sommes une équipe CS:GO amateur passionnée, déterminée à repousser nos limites et à vivre des moments mémorables dans le monde compétitif de Counter-Strike. Notre force réside dans notre unité et notre désir de nous améliorer constamment.</p>
                </div>
                <div className='flex justify-center my-4 brightness-[8]'>
                    <img src={iconcs} alt="Icon csgo" className='' />
                </div>
            </header>
        </>
    )
}

export default Header;