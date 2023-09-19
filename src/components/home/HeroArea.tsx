import React from "react";

function HeroArea() {
    return (
        <>
            <style>{`
            .glass {
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.7px);
-webkit-backdrop-filter: blur(4.7px);
border: 1px solid rgba(255, 255, 255, 0.2);
}
            `}</style>

            <div
                style={{backgroundImage: "url('image/hero.jpg')"}}
                className="bg-cover h-[50vh] mt-5 -z-10 relative rounded-t-lg shd">

                <div
                    className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-300 p-[30px] lg:p-[60px] glass">


                    <p className="text-blue-950 font-bold text-2xl text-center"> Asigurarea ta, <br/> prioritatea
                        noastră </p>
                </div>
            </div>
        </>
    );
};

export default HeroArea;