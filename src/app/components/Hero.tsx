import Image from "next/image";

export default function Hero() {
    return (
        <div
            className={"flex justify-center items-center"}
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                clipPath: 'inset(0 0 0 0)',
            }}
        >
            <div
                className={"fixed h-full w-full"}
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    zIndex: -1
                }}
            >
                <Image
                    src="/header-bg.jpg"
                    alt="header"
                    layout="fill"
                    objectFit="cover"
                    sizes="100vh"
                />
            </div>

            <HeroText/>
        </div>
    )
}

function HeroText() {
    return (
        <div
            className={"bg-black p-5 rounded-3xl"}
        >
            <div className={"text-2xl"}>Portfolio</div>
        </div>
    )

}