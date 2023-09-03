import React, { useState } from 'react';
import logoV from '../../img/logo-vipeer.jpg';
import logoL from '../../img/lapomme.png';
import logoS from '../../img/skitroz.png';
import logoSepraNoob from '../../img/sepra.png';
import logoM from '../../img/minataw.png';
import logoE from '../../img/existenz.png';
import logoSix from '../../img/sixtxz.png';
import logoC from '../../img/chaoo.jpeg';
import logoK from '../../img/k1pzablek.png';
import logoA from '../../img/acr.png';
import logoMaz from '../../img/maz.png';
import logoExec from '../../img/exec.png'
import '../accueil/main.css'

function Main() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <main>
            <h2 className="text-center text-4xl mt-16 font-semibold">NOS MEMBRES SUR <span className="text-red-500">COUNTER-STRIKE: GLOBAL OFFENSIVE</span></h2>
            <section className='flex flex-col'>
                <div className='flex justify-center my-16'>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoV} alt="Logo de Vipeer" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Vipeer</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>IGL / AWPer</p>
                                <p className='uppercase text-sm font-medium'>20 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoS} alt="Logo de Skitroz" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Skitroz</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry</p>
                                <p className='uppercase text-sm font-medium'>18 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoL} alt="Logo de La Pomme" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Lapomme</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Riffle</p>
                                <p className='uppercase text-sm font-medium'>24 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoSepraNoob} alt="Logo de Sepra" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Sepra</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry</p>
                                <p className='uppercase text-sm font-medium'>21 ans, France</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-center my-16'>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoM} alt="Logo de Minataw" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Minataw</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>AWPer</p>
                                <p className='uppercase text-sm font-medium'>21 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoE} alt="Logo de Existenz" width={400} className='bg-black' />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Existenz</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Riffle</p>
                                <p className='uppercase text-sm font-medium'>29 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoSix} alt="Logo de sixtxz" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>sixtxz</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry</p>
                                <p className='uppercase text-sm font-medium'>18 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoC} alt="Logo de Chaoo" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Chaoo</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry / AWPer</p>
                                <p className='uppercase text-sm font-medium'>20 ans, France</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-center my-16'>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoK} alt="Logo de k1pzablek" width={400} className='bg-black' />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>k1pzablek</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Riffle</p>
                                <p className='uppercase text-sm font-medium'>31 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoA} alt="Logo de ACR" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>ACR</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry / Riffle</p>
                                <p className='uppercase text-sm font-medium'>22 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoMaz} alt="Logo de Maz" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Maz</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Entry</p>
                                <p className='uppercase text-sm font-medium'>22 ans, France</p>
                            </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={() => setShowInfo(true)}
                        onMouseLeave={() => setShowInfo(false)}
                        className="relative transition-opacity duration-700 ease-in-out hover:opacity-100"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                    >
                        <img src={logoExec} alt="Logo de Exec" width={400} />
                        {showInfo && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col backdrop-blur-md items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                <h3 className='uppercase text-3xl font-bold'>Exec</h3>
                                <p className='mt-2 mb-4 px-8 pt-1 pb-1 bg-black text-lg' style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>Riffle</p>
                                <p className='uppercase text-sm font-medium'>27 ans, France</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;