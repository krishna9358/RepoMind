"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [{
    title : "Dashboard",
    url : "/dashboard",
    icon : LayoutDashboard
},
{
    title : "Q&A",
    url : "/qna",
    icon : Bot
},
{
    title : "Meetings",
    url : "/meetings",
    icon : Presentation
},
{
    title : "Billing",
    url : "/billing",
    icon : CreditCard
},

]

export function AppSidebar(){
    const pathname = usePathname();
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                RepoMind 
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>

                        {items.map(item=> {
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className={cn({
                                            '!bg-primary !text-white' : pathname === item.url
                                        })}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                             </Link>
                                        </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}