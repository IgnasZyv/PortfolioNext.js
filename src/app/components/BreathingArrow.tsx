import Image from "next/image";
import FloatingComponent from "@/app/components/FloatingComponent";

const BreathingArrow = () => {
    return (
        <FloatingComponent>
            <Image
                src="/down-arrow.svg"
                alt="Arrow Down"
                width={40}
                height={40}
            />
        </FloatingComponent>
    );
}

export default BreathingArrow