import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div className="container mx-auto py-8">
      {loading && <Loading message="Loading appointments..." />}
      {error && <Error message="Failed to fetch appointments. Please try again." />}
      {!loading && !error && appointments.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center text-2xl font-semibold text-primaryColor">
          You have not booked any doctor appointments yet!
        </h2>
      )}
    </div>
  );
}

export default MyBookings;
