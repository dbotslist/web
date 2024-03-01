"use client";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";

const footerLinks = [
    {
        label: "Socials",
        sublinks: [
            {
                label: "Instagram",
                href: "/api/redirect?s=ig"
            },
            {
                label: "Discord",
                href: "/api/redirect?s=dc"
            }
        ]
    }
]
export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/api/auth/success" || pathname.includes("secret")) return <></>
    return <footer className="bg-card mt-auto w-full">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <h1 className="text-2xl font-semibold">discord<strong>bots</strong></h1>
                    <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                        Browse hundreds of bots made for your community.
                    </p>
                    <div className="mt-8 flex gap-6">
                        <Button><ChatBubbleOvalLeftEllipsisIcon className="w-5 mr-2" />Join our Discord</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                    {footerLinks.map((f, key) => <div key={key}>
                        <p className="font-medium">{f.label}</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            {f.sublinks.map((l, lkey) => <li key={lkey}>
                                <a href={l.href} className="text-muted-foreground">
                                    {l.label}
                                </a>
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()}. discordbots. All rights reserved.
            </p>
        </div>
    </footer>
}