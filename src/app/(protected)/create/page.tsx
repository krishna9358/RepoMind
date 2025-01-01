"use client"
import { FormInput } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

type FormInput = {
    repoUrl : string
    projectName : string
    githubToken? : string
}

export default function CreatePage(){
    const {register, handleSubmit, reset} = useForm<FormInput>()
    function onSubmit(data:FormInput){
        window.alert(data)
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

                    </form>
                </div>
            </div>
        </div>
    )
}