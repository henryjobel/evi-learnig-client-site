import React from 'react';

const Howmany = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Courses statistics</h2>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Total free Courses</dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">2k</dd>
                </dl>
            </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Enrollment</dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">19.2K</dd>
                </dl>
            </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Total Courses</dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">4.9K</dd>
                </dl>
            </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Total users</dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">166.7K</dd>
                </dl>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Howmany;