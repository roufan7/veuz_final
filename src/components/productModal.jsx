const workshopOptions = [
    [
        "Global Leaders Forum !NEW (3 Days)",
        "GITEX Main Stage",
        "Artificial Intelligence & Robotics (15)",
        "AI Everything (4 Days)",
        "Cybersecurity (4 Days)",
        "Future Health !NEW (2 Days)",
    ],
    [
        "Digital Cities (1 Day)",
        "Edtech (1 Day)",
        "Energy Transition (1 Day)",
        "Intelligent Connectivity (1 Day)",
        "Digital Finance (1 Day)",
        "Future Mobility (1 Day)",
    ],
];
const ProductModal = ({ setProducts, products }) => {

    const handleCheckboxClick = (label) => {
        let temp = [...products];
        if (temp.includes(label)) {
            setProducts(temp.filter(item => item != label))
        }
        else {
            temp.push(label)
            setProducts(temp)
        }
    }
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Try Product/Service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <p className="text-sm text-gray-700 mb-4 leading-relaxed font-alexandria">
                    I Am Interested In Sourcing The Following Solutions/Products? (Select
                    Top 5) * Please Ensure You Have Chosen At Least One Category In Each
                    Section
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {workshopOptions.map((column, columnIndex) => (
                        <div key={columnIndex}>
                            {column.map((label, index) => (
                                <label
                                    key={index}
                                    className="flex items-start space-x-2 text-sm text-gray-800 mb-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={products.includes(label)}
                                        className="w-5 h-5 accent-black border-2 border-black rounded-sm"
                                        onClick={(e) => handleCheckboxClick(label)}
                                    />
                                    <span>{label}</span>
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductModal;
