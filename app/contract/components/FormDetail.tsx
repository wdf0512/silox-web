'use client';

import {
    Box,
    Grid,
    Text,
    Select,
    RadioGroup,
    TextArea,
    Button,
    Flex,
    Link,
} from '@radix-ui/themes';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
    workEmail: z.string().email().nonempty(),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    companyName: z.string().nonempty(),
    websiteUrl: z.string().optional(),
    phoneNumber: z.string().nonempty().regex(/^[0-9+\-\s]+$/),
    lookingFor: z.string().nonempty(),
    budget: z.string().nonempty(),
    timeline: z.string().optional(),
    projectBrief: z.string().nonempty(),
    briefFile: z.any().optional(),
    howDidYouFind: z.string().optional(),
});

const FormDetail = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            workEmail: '',
            firstName: '',
            lastName: '',
            companyName: '',
            websiteUrl: '',
            phoneNumber: '',
            lookingFor: '',
            budget: '',
            timeline: '',
            projectBrief: '',
            briefFile: null,
            howDidYouFind: '',
        },
    });

    const onSubmit = (data: any) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="w-full max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 py-8 bg-gradient-to-b from-blue-200 to-purple-300 rounded-xl shadow-md">
                {/* Left Description */}
                <Box>
                    <Text className="text-base leading-relaxed text-gray-700">
                        At SiloX, we design, build, and implement cutting-edge business solutions across industries, leveraging our expertise in web development, mobile development, and low-code technologies.
                        <br />
                        <br />
                        Our capabilities include AI Agents (n8n), Power Platform (Power Apps, Power Automate, Power BI, and Copilot Studio), and Microsoft Copilot.
                        <br />
                        <br />
                        We provide scalable, high-impact solutions to drive efficiency and innovation in your business. Let’s build the future together.
                    </Text>
                </Box>

                {/* Right Form */}
                <Box className="p-6 rounded-lg shadow-lg">
                    <Flex direction={'column'} className='py-2'>
                        <Text weight={'bold'}>SEND US AN EMAIL</Text>
                        <Link href='#'>hello@silox.com.au</Link>
                    </Flex>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {[
                            { label: 'Work Email*', name: 'workEmail', type: 'email' },
                            { label: 'First Name*', name: 'firstName', type: 'text' },
                            { label: 'Last Name*', name: 'lastName', type: 'text' },
                            { label: 'Company Name*', name: 'companyName', type: 'text' },
                            { label: 'Website URL', name: 'websiteUrl', type: 'url' },
                            { label: 'Phone Number*', name: 'phoneNumber', type: 'tel' },
                            { label: 'Timeline', name: 'timeline', type: 'text' },
                        ].map(({ label, name, type }) => (
                            <div key={name}>
                                <Text className="block text-sm font-medium text-gray-700">
                                    {label}
                                </Text>
                                <input
                                    type={type}
                                    {...register(name as keyof typeof formSchema._input)}
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors[name as keyof typeof formSchema._input] && (
                                    <p className="text-sm text-red-600">
                                        {(errors[name as keyof typeof formSchema._input]?.message as string) || ''}
                                    </p>

                                )}

                            </div>
                        ))}

                        {/* Looking For */}
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
                                        onValueChange={field.onChange}
                                        className="mt-2 space-y-2"
                                    >
                                        {[
                                            'AI Agents and AI Automation',
                                            'Power Platform Solution',
                                            'Microsoft Copilot and Automation',
                                            'Web Development',
                                            'Mobile App Development',
                                        ].map((item, index) => (
                                            <div className="flex items-center" key={index}>
                                                <RadioGroup.Item value={item} id={`r${index}`} />
                                                <Text className="ml-2">{item}</Text>
                                            </div>
                                        ))}
                                    </RadioGroup.Root>
                                )}
                            />
                            {errors.lookingFor && (
                                <p className="text-sm text-red-600">{errors.lookingFor.message}</p>
                            )}
                        </div>

                        {/* Budget */}
                        <div>
                            <Text className="block text-sm font-medium text-gray-700">
                                What is your budget?*
                            </Text>
                            <Controller
                                name="budget"
                                control={control}
                                render={({ field }) => (
                                    <Select.Root onValueChange={field.onChange} value={field.value}>
                                        <Select.Trigger className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
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
                                <p className="text-sm text-red-600">{errors.budget.message}</p>
                            )}
                        </div>

                        {/* Project Brief */}
                        <div>
                            <Text className="block text-sm font-medium text-gray-700">
                                Summary of project brief*
                            </Text>
                            <TextArea
                                {...register('projectBrief')}
                                rows={4}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            />
                            {errors.projectBrief && (
                                <p className="text-sm text-red-600">{errors.projectBrief.message}</p>
                            )}
                        </div>

                        {/* Upload Brief */}
                        <div>
                            <Text className="block text-sm font-medium text-gray-700">
                                Upload your brief
                            </Text>
                            <input
                                type="file"
                                {...register('briefFile')}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* How Did You Find Us */}
                        <div>
                            <Text className="block text-sm font-medium text-gray-700">
                                How did you find Silo X?
                            </Text>
                            <Controller
                                name="howDidYouFind"
                                control={control}
                                render={({ field }) => (
                                    <Select.Root onValueChange={field.onChange} value={field.value}>
                                        <Select.Trigger className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
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

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            SUBMIT
                        </Button>
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default FormDetail;
