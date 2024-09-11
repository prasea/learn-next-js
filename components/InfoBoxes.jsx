import InfoBox from "./InfoBox";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            bgColor={"bg-gray-100"}
            heading="For Renters"
            buttonInfo={{
              text: "Browser Properties",
              link: "/properties",
              bgColor: "bg-gray-500",
              bgHoverColor: "bg-gray-700"
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            bgColor={"bg-blue-100"}
            heading="For Property Owners"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              bgColor: "bg-blue-500",
              bgHoverColor: "bg-blue-700"
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
