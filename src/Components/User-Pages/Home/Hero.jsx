import Button from "../../UI/Buttons/Button";

export default function Hero() {
    return (
        <section className="pt-[90px]">
            <div className="Container">
                <div className="flex items-center justify-center flex-col gap-[20px] text-center">
                    <h1
                        className="text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] leading-[1.3] text-SecondColor font-bold"
                    >
                        Welcome to the world of Mathematics
                    </h1>
                    <p className="text-[16px] sm:text-[18px] mb-[10px]">
                        MathQuest is the best platform for math testing
                    </p>
                    <div>
                        <Button content={'Start'} />
                    </div>
                </div>
            </div>
        </section>
    );
}
