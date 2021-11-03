// import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
// import useAuth from "../hooks/useAuth";

const ShowBookings = ({ myBooking }) => {
  const { Name, price, img, description, _id } = myBooking;
  // const { isLoading } = useAuth();
  const history = useHistory();

  const handleDelete = (id) => {
    const uri = `/mybooking`;

    const url = `https://limitless-dawn-51897.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Your Booking is Canceled");
          history.push(uri);
        }
      });
  };
  return (
    <div>
      <div className="card-group">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Name}</h5>
            <p className="card-text">{description}</p>
            <h5>${price}</h5>
          </div>
          <div className="card-footer">
            <button onClick={() => handleDelete(_id)} className="bookNow">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookings;
