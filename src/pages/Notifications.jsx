import { useNotificationContext } from "../Context";
import Notification from "../components/Notification";

const Notifications = () => {
  const { data, setData } = useNotificationContext();

  const countNew = data.filter((obj) => obj.isNew === true).length;

  const markAllAsRead = () => {
    const updatedData = data.map((notification) => ({
      ...notification,
      isNew: false,
    }));
    setData(updatedData);
  };

  return (
    <section className="sm:w-1/3 w-full bg-white rounded-md py-8 sm:my-4">
      <div className="flex justify-around">
        <div className="flex space-x-4">
          <p className="font-bold text-lg">Notifications</p>
          <span className="bg-blue text-white px-3 rounded-md">{countNew}</span>
        </div>
        <div>
          <button
            onClick={markAllAsRead}
            className="text-blue hover:cursor-pointer"
          >
            Mark all as read
          </button>
        </div>
      </div>
      {data.map((notification, index) => {
        return (
          <div key={index}>
            <Notification {...notification} />
          </div>
        );
      })}
    </section>
  );
};
export default Notifications;
