'use client'

import { useState } from 'react';
import { redirect } from "next/navigation";
import { ScrollText, User, Sword, Mail, MessageSquare } from "lucide-react"
import { createInquiry } from "../app/services/inquire/actions"
import Form from 'next/form'

const serviceTypes = [
    "Inferno Cape",
    "Quiver",
    "Blood Ornament Kit",
    "Radiant Oathplate Kit"
]

const accountTypes = [
    "Main",
    "Ironman",
    "Pure",
    "Zerker"
]

const gearRequirements = [
    {
        title: "Max Gear",
        description: "I have all required high-tier equipment"
    },
    {
        title: "Require Gear Loan",
        description: "I need to borrow gear for the service"
    }
]

export default function ServiceForm() {
    const [formData, setFormData] = useState({
        serviceType: '',
        accountType: '',
        gearRequirements: '',
        email: '',
        additionalNotes: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    

    return (
        <section className="bg-white pb-20">
            <div className="flex flex-col mx-auto p-8 max-w-xl text-sm text-black bg-white border border-gray-200 border-border rounded-md">
                <div className="pb-6">
                    <h1 className="font-bold text-lg">Inquiry Details</h1>
                    <p className="text-gray-400">Please provide your account details and service requirements</p>
                </div>
                <div className="text-sm">
                    <Form action={createInquiry} >
                        <div className="pb-6">
                            <div className="pb-2 font-bold">
                                <label className="flex gap-2"><ScrollText />Service Type</label>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {serviceTypes.map((serviceType, index) => (
                                    <div key={index} className="">
                                        <input type="radio" name="serviceType" required id={serviceType} value={formData.serviceType} onChange={(value) => handleInputChange("serviceType", serviceType)} className="peer absolute opacity-0 pointer-events-none"/>
                                        <label htmlFor={serviceType} className="flex items-center space-x-2 bg-white text-black border border-gray-200 border-border rounded-md p-2 px-4 transition duration-200 ease-in-out hover:bg-gray-100 cursor-pointer peer-checked:bg-gray-400 peer-checked:bg-gray-400/30">{serviceType}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pb-6">
                            <div className="pb-2 font-bold">
                                <label className="flex gap-2"><User />Account Type</label>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {accountTypes.map((accountType, index) => (
                                    <div key={index} className="">
                                        <input type="radio" name="accountType" required id={accountType} value={formData.accountType} onChange={(value) => handleInputChange("accountType", accountType)} className="peer absolute opacity-0 pointer-events-none"/>
                                        <label htmlFor={accountType} className="flex items-center space-x-2 bg-white text-black border border-gray-200 border-border rounded-md p-2 px-4 transition duration-200 ease-in-out hover:bg-gray-100 cursor-pointer peer-checked:bg-gray-400 peer-checked:bg-gray-400/30">{accountType}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pb-6">
                            <div className="pb-2 font-bold">
                                <label className="flex gap-2"><Sword />Gear Requirements</label>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                {gearRequirements.map((gearRequirements, index) => (
                                    <div key={index}>
                                        <input type="radio" name="gearRequirements" required id={gearRequirements.title} value={formData.gearRequirements} onChange={(value) => handleInputChange("gearRequirements", gearRequirements.title)} className="peer absolute opacity-0 pointer-events-none"/>
                                        <label htmlFor={gearRequirements.title} className="flex flex-col space-x-2 bg-white text-black border border-gray-200 border-border rounded-md p-2 px-4 transition duration-200 ease-in-out cursor-pointer hover:bg-gray-100 peer-checked:bg-gray-400 peer-checked:bg-gray-400/30">
                                            {gearRequirements.title}
                                            <p className="text-gray-600">{gearRequirements.description}</p>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pb-6">
                            <div className="pb-2 font-bold">
                                <label className="flex gap-2"><Mail />Email</label>
                            </div>
                            <div className="">
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="your.email@example.com"
                                id="email" 
                                value={formData.email} 
                                onChange={((e) => handleInputChange("email", e.target.value))} 
                                required 
                                className="bg-gray-200 text-black rounded-md p-2 px-4 w-full"/>
                            </div>
                        </div>
                        <div className="pb-6">
                            <div className="pb-2 font-bold">
                                <label className="flex gap-2"><MessageSquare />Additional Notes</label>
                            </div>
                            <div className="">
                                <textarea 
                                name="additionalNotes" 
                                placeholder="E.g. No Twisted Bow, No Rigour, ..."
                                id="additionalNotes" 
                                rows={3}
                                value={formData.additionalNotes} 
                                onChange={((e) => handleInputChange("additionalNotes", e.target.value))}
                                className="bg-gray-200 text-black rounded-md p-2 px-4 w-full"/>
                            </div>
                        </div>
                        <button type="submit" className="bg-black rounded-md p-4 text-white cursor-pointer transition duration-200 ease-in-out hover:opacity-90 w-full">
                            Submit Inquiry
                        </button>
                    </Form>
                </div>
            </div>
        </section>
    );
}
