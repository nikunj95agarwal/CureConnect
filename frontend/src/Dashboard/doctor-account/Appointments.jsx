import React from 'react';
import doctorimg from "../../assets/images/doctor-img01.png";

const Appointments = ({ appointments }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-gray-500">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase hidden md:table-header-group">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Payment
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Booked on
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {appointments?.map(item => (
                        <tr key={item._id} className="flex flex-col md:table-row md:flex-none">
                            <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <img src={doctorimg}
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{item.user.name}</div>
                                    <div className="text-normal text-gray-500">{item.user.email}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4 capitalize md:table-cell hidden">
                                {item.user.gender}
                            </td>
                            <td className="px-6 py-4 md:table-cell hidden">
                                {item.isPaid ? (
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                        Paid
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
                                        Paid
                                    </div>
                                )}
                            </td>
                            <td className="px-6 py-4 md:table-cell hidden">
                                {item.doctor.ticketPrice}
                            </td>
                            <td className="px-6 py-4 md:table-cell hidden">
                                {new Date(item.createdAt).toLocaleDateString()}
                            </td>
                            {/* For mobile view */}
                            <td className="px-6 py-4 md:hidden">
                                <div className="flex flex-col">
                                    <span className="capitalize"><strong>Gender:</strong> {item.user.gender}</span>
                                    <span>
                                        <strong>Payment:</strong> {item.isPaid ? 'Paid' : 'Unpaid'}
                                    </span>
                                    <span><strong>Price:</strong> {item.doctor.ticketPrice}</span>
                                    <span><strong>Booked on:</strong> {new Date(item.createdAt).toLocaleDateString()}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;
