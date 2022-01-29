/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'
import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        profile: {userName: "Psherman32", firstName: 'Peter', lastName:"Sherman", address:"32 Wallaby Way", city: "Sydney",
            state: "AU", postCode:"40019", password: "psherman32wallabywaysydney", phone: "502-555-5555",},
        };
    }
    render(){
    return (

        <div className="mt-2 mb-5 m-auto w-50 bg-light shadow-lg border-2 border overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Username's Profile </h3>
                {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.state.profile.firstName} {this.state.profile.lastName}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">502-555-5555</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Password</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">PW FIELD</dd>
                    </div>
                </dl>
            </div>
        </div>
    )}
}

export default Profile;