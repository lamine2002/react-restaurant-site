export function MenuItem({ item }) {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={`images/${item.image}`} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="text-lg font-semibold text-blue-800">{item.price}</div>
                </div>
            </div>
        </>
    )
}