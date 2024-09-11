import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import InfoBoxes from "@/components/InfoBoxes";
import properties from '@/properties.json'
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const HomePage = () => {
  const recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3)
  console.log("Recent properties-----------> ", recentProperties)
  return (
    <>
      <Hero />
      <InfoBoxes />
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-5">
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>Featured Properties </h2>
          {
            recentProperties.length == 0 ?
              (<p>Not any properties listed yet !</p>) :
              (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentProperties.map(property => (
                    <PropertyCard property={property} />
                  ))}
                </div>
              )
          }
        </div>

      </section>
      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
