import DoctorCard from './DoctorCard'
import { BASE_URL } from '../../config'
import useGetProfile from '../../hooks/useFetchData'
import Loading from '../Loader/Loading'
import Error from '../Error/Error'
const DoctorList = () => {

  const {data,loading,error} = useGetProfile(`${BASE_URL}/doctors`)
  return (<>
    {loading && <Loading/>}
    {error && <Error/>}

    {!loading && !error && (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {data.map(doctor => (
          <DoctorCard key={doctor._id} doctor={doctor}/>
        ))}
      </div>
    )}
    
    </>)
}

export default DoctorList;
