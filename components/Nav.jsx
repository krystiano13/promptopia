'use client'

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import {signin} from "@node_modules/next-auth/core/routes";

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        }
    }, []);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link className="flex gap-2 flex-center" href="/">
                <Image width={30} height={30} src="/assets/images/logo.svg" alt="logo"/>
                <p className="logo_text">Promptopia</p>
            </Link>
            <div className="sm:flex hidden">
                {
                    isUserLoggedIn ? (
                            <div className="flex gap-3 md:gap-5">
                                <Link href="/create-prompt" className="black_btn">
                                    Create Post
                                </Link>
                                <button className="outline_btn" type="button" onClick={signOut}>
                                    Sign Out
                                </button>
                                <Link href="/profile">
                                    <Image
                                        className="rounded-full"
                                        src="/assets/images/logo.svg"
                                        alt="profile"
                                        width={37}
                                        height={37}/>
                                </Link>
                            </div>
                        )
                        :
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    onClick={() => signin(provider.id)}
                                    type="button"
                                    key={provider.name}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))}
                        </>
                }
            </div>

            <div className="flex relative sm:hidden">
                {isUserLoggedIn ? (
                        <div className="flex">
                            <Image
                                className="rounded-full"
                                src="/assets/images/logo.svg"
                                alt="profile"
                                width={37}
                                height={37}
                            />
                        </div>
                    ) :
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                onClick={() => signin(provider.id)}
                                type="button"
                                key={provider.name}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>}
            </div>

        </nav>
    )
}

export default Nav;