import Image from "next/image";
import FloatingComponent from "@/app/components/FloatingComponent";

const BreathingArrow = () => {
    return (
        <FloatingComponent>
            <div className={"mr-0"}>
                <Image
                    src="/down-arrow.svg"
                    alt="Arrow Down"
                    width={40}
                    height={40}
                    className={"mx-auto"}
                />
            </div>

        </FloatingComponent>
    );
}

export default BreathingArrow