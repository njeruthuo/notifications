// eslint-disable-next-line react/prop-types
const Notification = ({
  action,
  img,
  name,
  subject,
  time,
  message,
  isNew,
  extraImg,
}) => {
  const notificationClasses = `
  ${isNew ? "bg-veryLightGrayishBlue" : ""} w-[90%] mx-auto my-4 p-2 rounded-md
  `;
  return (
    <div className={notificationClasses}>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <img className="h-12" src={img} alt={name} />

          <div>
            <p className="text-grayishBlue">
              <span className="font-bold text-veryDarkBlue hover:text-blue hover:cursor-pointer">{` ${name}`}</span>{" "}
              {action}
              <span className="text-darkGrayishBlue hover:text-blue hover:cursor-pointer hover:font-bold">
                {subject && ` ${subject}`}
              </span>
              {/* <p className="inline ml-12 bg-red rounded-full w-4 h-4 text-red"></p> */}
              {isNew && <span className="text-red text-xl ml-3">&#x25CF;</span>}
              <span className="block">{time}</span>
            </p>

            {message ? (
              <p className="hover:bg-lightGrayishBlue1 border border-grayishBlue text-darkGrayishBlue my-2 p-2 rounded-md">{` ${message}`}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        {extraImg && (
          <div id="image">
            <img className="h-10" src={extraImg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Notification;
