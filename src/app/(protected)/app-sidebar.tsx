"use client"

import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation, Ship } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [{
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard
},
{
    title: "Q&A",
    url: "/qna",
    icon: Bot
},
{
    title: "Meetings",
    url: "/meetings",
    icon: Presentation
},
{
    title: "Billing",
    url: "/billing",
    icon: CreditCard
},]

const projects = [{
    title: "Project 1"
}, {
    title: "Project 2"
},
{
    title: "Project 3"
}]

export function AppSidebar() {
    const pathname = usePathname();
    const {open} = useSidebar()
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <span className="flex items-center gap-2 ml-1 text-red-500"><Ship/>
              {open && (<h1>RepoMind</h1>)}  </span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>

                            {items.map(item => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url} className={cn({
                                                '!bg-primary !text-white': pathname === item.url
                                            })}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map(project => {
                                return (
                                    <SidebarMenuItem key={project.title}>
                                        <SidebarMenuButton asChild>
                                            <div>
                                                <div className={cn('rounded-sm border size-6 flex items-center justify-center text-primary',
                                                    {
                                                        'bg-primary text-white p-1 m-0': true
                                                    }
                                                )}>
                                                    {project.title[0]}
                                                </div>
                                                { open && (<span>{project.title}</span>)}
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                            <div className="h-2"></div>
                            <SidebarMenuItem>
                                <Link href={"/create"}>
                                    <Button variant={"outline"} className="w-full" size='sm'> <Plus /> {open && (<p>Create</p>)} </Button>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>


                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}