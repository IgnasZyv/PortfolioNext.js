

interface SectionHeaderTitleProps {
    title: string,
}

export default function SectionHeaderTitle({ title }: SectionHeaderTitleProps) {
    return(
        <div className={"flex justify-center"}>
            <h1 className={"text-2xl text-pink-700 font-bold p-4 w-fit mx-auto bg-black rounded-full my-4"}>
                {title}
            </h1>
        </div>
    )
}