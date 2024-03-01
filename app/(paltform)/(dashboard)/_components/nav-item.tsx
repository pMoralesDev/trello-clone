"use client"

import Image from "next/image"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import {Activity, CreditCard, Layout, Settings} from 'lucide-react'
import {useRouter, usePathname} from 'next/navigation'
import { Button } from "@/components/ui/button"

export type Organization = {
    id: string
    slug: string
    imageUrl: string
    name: string
}

interface NavItemProps {
    isExpanded: Boolean
    isActive: Boolean
    organization: Organization
    onExpand: (id:string) => void
}

export const NavItem = ({
    isExpanded, isActive, organization, onExpand
} : NavItemProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const routes = [
        {
            label: 'Boards',
            icon: <Layout className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label: 'Activity',
            icon: <Activity className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: 'Billing',
            icon: <CreditCard className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/billing`
        },
        {
            label: 'Settings',
            icon: <Settings className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
    ]

    const onClick = (href: string) => {
        router.push(href)
    }

    return (
        <AccordionItem value="organization.id" className="border-none">
            <AccordionTrigger onClick={ () => onExpand(organization.id)}
            className={cn( "flex items-center gap-x-2 p-1.5 text-neutral-400 rounded-md hover:bg-slate-700 transition text-start no-underline hover:no-underline",
            isActive && !isExpanded && "bg-slate-700 text-neutral-100")}>
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 realtive">
                        <Image width={100} height={100} src={organization.imageUrl} alt="Organization img" className="rounded-sm object-cover" />
                    </div>
                    <span className="font-medium text-sm">{organization.name}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-1 text-neutral-400">
                {routes.map((route) => (
                    <Button key={route.href} size="sm" onClick={() => onClick(route.href)}
                    className={cn(
                    "w-full font-normal justify-start pl-10 mb-1",
                    pathname === route.href && "bg-slate-700 text-neutral-100"
                    )}
                    variant="ghost"
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}