"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { FormInput, Plus } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
    repoUrl: string
    projectName: string
    githubToken?: string
}

export default function CreatePage() {
    const { register, handleSubmit, reset } = useForm<FormInput>()
    const createProject = api.project.createProject.useMutation()

    function onSubmit(data: FormInput) {
        window.alert(JSON.stringify(data,null,2))
        createProject.mutate({githubUrl:data.repoUrl,name:data.projectName, githubtToken:data.githubToken},{onSuccess : ()=> {
            toast.success("Project Created Successfully")
        }, onError: () =>{
            toast.error("Failed to create project")
        }})
        return true;
    }
    return (
        <div className="flex items-center gap-12 h-full  justify-center">
            <img src={"/computers.png"} className="w-auto h-56 " />
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">Link your GitHub Repository</h1>
                    <p className="text-sm text-muted-foreground">Enter the URL of your Repository to link it to RepoMind</p>
                </div>
                <div className="h-4"></div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" required {...register('projectName', { required: true })} placeholder="Project Name" />
                        <div className="h-2"></div>
                        <Input type="text" required {...register('repoUrl', { required: true })} placeholder="Github Repository URL" />
                        <div className="h-2"></div>
                        <Input type="text"  {...register('githubToken')} placeholder="Github Token" />
                        <div className="h-2"></div>
                        <Button type="submit" className="btn btn-primary"> <Plus /> Create Project</Button>

                    </form>
                </div>
            </div>
        </div>
    )
}