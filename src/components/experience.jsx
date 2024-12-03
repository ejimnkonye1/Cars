
export const Experience = () => {
    return(
        <section className="bg-gray-200 relative py-12" id="section-counter">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center counter-wrap">
                <div className="block-18 p-6 bg-white rounded-lg shadow-lg">
                    <div className="text text-border flex items-center">
                        <strong className="number text-3xl font-bold" data-number="60">0</strong>
                        <span className="ml-4 text-lg">
                            Year <br /> Experienced
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center counter-wrap">
                <div className="block-18 p-6 bg-white rounded-lg shadow-lg">
                    <div className="text text-border flex items-center">
                        <strong className="number text-3xl font-bold" data-number="1090">0</strong>
                        <span className="ml-4 text-lg">
                            Total <br /> Cars
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center counter-wrap">
                <div className="block-18 p-6 bg-white rounded-lg shadow-lg">
                    <div className="text text-border flex items-center">
                        <strong className="number text-3xl font-bold" data-number="2590">0</strong>
                        <span className="ml-4 text-lg">
                            Happy <br /> Customers
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center counter-wrap">
                <div className="block-18 p-6 bg-white rounded-lg shadow-lg">
                    <div className="text flex items-center">
                        <strong className="number text-3xl font-bold" data-number="67">0</strong>
                        <span className="ml-4 text-lg">
                            Total <br /> Branches
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}