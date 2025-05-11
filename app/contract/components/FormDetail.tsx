'use client'

import { Box, Grid, Text, Select, RadioGroup, TextArea, Button } from '@radix-ui/themes';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const formSchema = z.object({
    workEmail: z.string().email('Please enter a valid email').nonempty('Work Email is required'),
    firstName: z.string().nonempty('First Name is required'),
    lastName: z.string().nonempty('Last Name is required'),
    companyName: z.string().nonempty('Company Name is required'),
    websiteUrl: z.string().optional(),
    phoneNumber: z.string().nonempty('Phone Number is required').regex(/^[0-9+\-\s]+$/, 'Please enter a valid phone number'),
    lookingFor: z.string().nonempty('Please select an option'), // Ensure this matches the RadioGroup values
    budget: z.string().nonempty('Please select a budget'),
    timeline: z.string().optional(),
    projectBrief: z.string().nonempty('Project brief is required'),
    briefFile: z.any().optional(),
    howDidYouFind: z.string().optional(),
});

const FormDetail = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            workEmail: '',
            firstName: '',
            lastName: '',
            companyName: '',
            websiteUrl: '',
            phoneNumber: '',
            lookingFor: '', // This is fine as a default, but validation will trigger on submit if not selected
            budget: '',
            timeline: '',
            projectBrief: '',
            briefFile: null,
            howDidYouFind: '',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
        // Handle form submission (e.g., API call)
    };

    return (
        <Grid columns={'2'} gap={'5'} className="p-4 bg-gradient-to-b from-blue-200 to-purple-300 min-h-screen">
            <Box className="max-w-[35ch] break-words">
                <Text>
                    At SiloX, we design, build, and implement cutting-edge business solutions across industries, leveraging our expertise in web development, mobile development, and low-code technologies.
                    <br />
                    <br />
                    Our capabilities include AI Agents (n8n), Power Platform (Power Apps, Power Automate, Power BI, and Copilot Studio), and Microsoft Copilot.
                    <br />
                    <br />
                    We provide scalable, high-impact solutions to drive efficiency and innovation in your business. Let’s build the future together.
                </Text>
            </Box>
            <Box className="p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Work Email */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Work Email*
                        </Text>
                        <input
                            type="email"
                            {...register('workEmail')}
                            placeholder="hello@silox.com.au"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.workEmail && (
                            <p className="mt-1 text-sm text-red-600">{errors.workEmail.message}</p>
                        )}
                    </div>

                    {/* First Name */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            First Name*
                        </Text>
                        <input
                            type="text"
                            {...register('firstName')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.firstName && (
                            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Last Name*
                        </Text>
                        <input
                            type="text"
                            {...register('lastName')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                    </div>

                    {/* Company Name */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Company Name*
                        </Text>
                        <input
                            type="text"
                            {...register('companyName')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.companyName && (
                            <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                        )}
                    </div>

                    {/* Website URL */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Website URL
                        </Text>
                        <input
                            type="url"
                            {...register('websiteUrl')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Phone Number*
                        </Text>
                        <input
                            type="tel"
                            {...register('phoneNumber')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.phoneNumber && (
                            <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
                        )}
                    </div>

                    {/* I'm looking for */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            I&apos;m looking for*
                        </Text>
                        <Controller
                            name="lookingFor"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup.Root
                                    value={field.value}
                                    onValueChange={(value) => {
                                        field.onChange(value); // Update the form state
                                    }}
                                    className="mt-1 space-y-2"
                                >
                                    <div className="flex items-center">
                                        <RadioGroup.Item value="AI Agents and AI Automation" id="r1" />
                                        <Text htmlFor="r1" className="ml-2">
                                            AI Agents and AI Automation
                                        </Text>
                                    </div>
                                    <div className="flex items-center">
                                        <RadioGroup.Item value="Power Platform Solution" id="r2" />
                                        <Text htmlFor="r2" className="ml-2">
                                            Power Platform Solution
                                        </Text>
                                    </div>
                                    <div className="flex items-center">
                                        <RadioGroup.Item value="Microsoft Copilot and Automation" id="r3" />
                                        <Text htmlFor="r3" className="ml-2">
                                            Microsoft Copilot and Automation
                                        </Text>
                                    </div>
                                    <div className="flex items-center">
                                        <RadioGroup.Item value="Web Development" id="r4" />
                                        <Text htmlFor="r4" className="ml-2">
                                            Web Development
                                        </Text>
                                    </div>
                                    <div className="flex items-center">
                                        <RadioGroup.Item value="Mobile App Development" id="r5" />
                                        <Text htmlFor="r5" className="ml-2">
                                            Mobile App Development
                                        </Text>
                                    </div>
                                </RadioGroup.Root>
                            )}
                        />
                        {errors.lookingFor && (
                            <p className="mt-1 text-sm text-red-600">{errors.lookingFor.message}</p>
                        )}
                    </div>

                    {/* Budget */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            What is your budget for this project?*
                        </Text>
                        <Controller
                            name="budget"
                            control={control}
                            render={({ field }) => (
                                <Select.Root onValueChange={field.onChange} value={field.value}>
                                    <Select.Trigger
                                        placeholder="Select a budget"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    <Select.Content>
                                        <Select.Item value="Under $5,000">Under $5,000</Select.Item>
                                        <Select.Item value="$5,000 - $10,000">$5,000 - $10,000</Select.Item>
                                        <Select.Item value="$10,000 - $20,000">$10,000 - $20,000</Select.Item>
                                        <Select.Item value="Over $20,000">Over $20,000</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            )}
                        />
                        {errors.budget && (
                            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                        )}
                    </div>

                    {/* Timeline */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            What is your timeline?
                        </Text>
                        <input
                            type="text"
                            {...register('timeline')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Project Brief */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Summary of project brief message*
                        </Text>
                        <TextArea
                            {...register('projectBrief')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                        />
                        {errors.projectBrief && (
                            <p className="mt-1 text-sm text-red-600">{errors.projectBrief.message}</p>
                        )}
                    </div>

                    {/* File Upload */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            Upload your brief
                        </Text>
                        <input
                            type="file"
                            {...register('briefFile')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* How did you find Silo X */}
                    <div>
                        <Text className="block text-sm font-medium text-gray-700">
                            How did you find Silo X?
                        </Text>
                        <Controller
                            name="howDidYouFind"
                            control={control}
                            render={({ field }) => (
                                <Select.Root onValueChange={field.onChange} value={field.value}>
                                    <Select.Trigger
                                        placeholder="Select an option"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    <Select.Content>
                                        <Select.Item value="Google Search">Google Search</Select.Item>
                                        <Select.Item value="Referral">Referral</Select.Item>
                                        <Select.Item value="Social Media">Social Media</Select.Item>
                                        <Select.Item value="Other">Other</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        SUBMIT
                    </Button>
                </form>
            </Box>
        </Grid>
    );
};

export default FormDetail;