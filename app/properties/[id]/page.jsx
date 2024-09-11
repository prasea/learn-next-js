const PropertyPage = ({ params, searchParams }) => {
  return (
    <>
      <h1>Propery Id is {params.id}</h1>
      <h2>Property name is {searchParams.name}</h2>
    </>
  )
}

export default PropertyPage;
