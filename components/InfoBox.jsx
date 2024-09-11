import Link from "next/link";

const InfoBox = ({ children, bgColor, heading, buttonInfo }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading} </h2>
      <p className="mt-2 mb-4">
        {children}
      </p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.bgColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:${buttonInfo.bgHoverColor}`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
}

export default InfoBox;
