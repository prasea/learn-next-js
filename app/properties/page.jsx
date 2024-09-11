import PropertyCard from '@/components/PropertyCard';
import properties from '@/properties.json'
const PropertiesPage = ({ params, searchParams }) => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-5">
        {
          properties.length == 0 ?
            (<p>Properties not listed yet !</p>) :
            (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map(property => (
                  <PropertyCard property={property} />
                ))}
              </div>
            )
        }
      </div>
    </section>
  )
}

export default PropertiesPage;
