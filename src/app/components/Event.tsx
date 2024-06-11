import Card from "./Card"

export default function Event() {

    return (
        <div className="h-screen w-full my-20 flex flex-col justify-around">
            <div className="p-20" >
                <h2 className="text-5xl font-extrabold md:text-6xl antialiased text-center ">Proximos Eventos</h2>
            </div>
            <div className="w-[90%] mx-auto">
                <Card />
            </div>
        </div>

    );
}