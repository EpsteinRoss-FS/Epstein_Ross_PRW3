/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'
import React, {useEffect, useState} from "react";

export default function Profile() {
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState( {
        firstName: '',
        lastName: '',
        streetName: '',
        city: '',
        state: '',
        zip: '',
        username: '',

    });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        async function fetchData() {

            await fetch("https://randomuser.me/api/")
                .then(res => res.json())
                .then(
                    async (result) => {
                        setIsLoaded(true);
                        let profileData = result.results[0];
                        // await setProfile(result.results);
                        // await setProfile(result);
                        setProfile((prevState) => ({
                            ...prevState,
                                firstName: profileData.name.first,
                                lastName: profileData.name.last,
                                streetName: profileData.location.street.number + " " + profileData.location.street.name,
                                city: profileData.location.city,
                                state: profileData.location.state,
                                zip: profileData.location.postcode,
                                username: profileData.login.username
                            }
                            )
                        );
                    },

                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }

        if(!isLoaded) {
            fetchData()
        }

    } ,)


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Loading...</h1></div>;
    } else {
        return (

            <div className="mt-2 mb-5 m-auto w-50 bg-light shadow-lg border-2 border overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900"> {profile.username.toUpperCase()}'s Profile </h3>
                    {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profile.firstName} {profile.lastName}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {profile.streetName}
                                <p>{profile.city}, {profile.state} {profile.zip}</p>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
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
        )
    }
}

