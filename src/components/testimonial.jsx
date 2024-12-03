import person1 from '../images/person_1.jpg'
import person2 from '../images/person_2.jpg'
import person3 from '../images/person_3.jpg'
import person4 from '../images/person_4.jpg'

export const Testimonial = () => {
    return(
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
            <div className="text-center mb-5">
                <span className="text-gray-600 text-sm">Testimonial</span>
                <h2 className="mb-3 text-3xl font-bold">Happy Clients</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Testimonial Item 1 */}
                <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <img src={person1} alt="Roger Scott" className="mb-2 rounded-full h-24 w-24 object-cover" />
                    <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name font-semibold">Roger Scott</p>
                        <span className="position text-gray-500">Marketing Manager</span>
                    </div>
                </div>
                {/* Testimonial Item 2 */}
                <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <img src={person2} alt="Roger Scott" className="mb-2 rounded-full h-24 w-24 object-cover" />
                    <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name font-semibold">Roger Scott</p>
                        <span className="position text-gray-500">Interface Designer</span>
                    </div>
                </div>
                {/* Testimonial Item 3 */}
                <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <img src={person3} alt="Roger Scott" className="mb-2 rounded-full h-24 w-24 object-cover" />
                    <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name font-semibold">Roger Scott</p>
                        <span className="position text-gray-500">UI Designer</span>
                    </div>
                </div>
                {/* Testimonial Item 4 */}
                <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <img src={person4} alt="Roger Scott" className="mb-2 rounded-full h-24 w-24 object-cover" />
                    <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name font-semibold">Roger Scott</p>
                        <span className="position text-gray-500">Web Developer</span>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    )
}