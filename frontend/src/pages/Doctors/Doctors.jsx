import React, { useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';

const Doctors = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(query.trim());
  };

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${query}`);

  return (
    <>
      <section className='pt-40'>
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor by name or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          {loading && <Loading />}
          {error && <Error message={error} />}
          {!loading && !error && doctors.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
          {!loading && !error && doctors.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No doctors found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
