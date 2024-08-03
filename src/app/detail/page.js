export default function Page(){
    return(
        <div className="min-h-screen flex flex-row p-5  justify-between items-center">
            <div className="h-[90vh] bg-white flex items-center">
                <img className="  w-96 rounded-t-xl mx-auto" src="https://i.pinimg.com/736x/fd/24/76/fd24767ed677750c025bc9f380504f5b.jpg" />
            </div>
            <div className="grow mx-2 h-[90vh] bg-gray-800 p-5">
                <h1 className="text-xl font-bold">Masukkan Judul disini</h1>
            </div>
        </div>
    )
}