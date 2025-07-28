"use client";

import { cn } from '@/lib/utils';
import { FormValidator, FormValues } from '@/lib/validators/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import SendButton from "../ui/send-button";
import { Textarea } from "../ui/textarea";
import AnimationContainer from "../utils/animation-container";

const Contact = () => {

    const form = useForm<FormValues>({
        resolver: zodResolver(FormValidator),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    });

    const [isSent, setIsSent] = useState(false);

    // This function now handles the mailto link generation and opening
    const handleSendMessage = (data: FormValues) => {
        const subject = encodeURIComponent(`Portfolio Contact - ${data.name}`);
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
        );
        const mailtoLink = `mailto:gandotra.akshit@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        toast.success("Opening your email client!");
        form.reset();
        setIsSent(true);
        // Reset the button state after a few seconds
        setTimeout(() => setIsSent(false), 4000);
    };


    return (
        <div id="contact" className="w-full relative pt-10 pb-40 z-40">
            <AnimationContainer
                animation="slide-up"
                delay={0.1}
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        Get In Touch
                    </h2>
                </div>
            </AnimationContainer>

            <div className="flex flex-col items-center justify-center gap-5 pt-10 w-full">
                <div className="w-full">
                    <Link href="mailto:gandotra.akshit@gmail.com" className="flex-[0.5] w-full lg:w-auto">
                        <Button type='button' variant="outline" className="flex-col items-start w-full h-auto p-5 hover:scale-100">
                            <h6 className="text-base font-medium">
                                Email me at:
                            </h6>
                            <p className="mt-2 text-base text-foreground/70">
                                gandotra.akshit@gmail.com
                            </p>
                        </Button>
                    </Link>
                </div>

                <Form {...form}>
                    {/* The onSubmit now calls our new mailto handler */}
                    <form onSubmit={form.handleSubmit(handleSendMessage)} className="flex flex-col items-center justify-center w-full space-y-5">
                        <AnimationContainer
                            animation="slide-up"
                            delay={0.2}
                            className="w-full"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Name"
                                                autoComplete="off"
                                                className="h-12 px-5 capitalize outline-none rounded-lg hover:border-blue-500"
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            <motion.span
                                                initial={{ opacity: 0, y: 0 }}
                                                animate={{ opacity: 1, y: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {form.formState.errors.name && form.formState.errors.name.message}
                                            </motion.span>
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                        </AnimationContainer>
                        <AnimationContainer
                            animation="slide-up"
                            delay={0.3}
                            className="w-full"
                        >
                            <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className={cn("w-full mb-0",
                                            form.formState.errors.phone && "mb-5"
                                        )}>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    required
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                    className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                <motion.span
                                                    initial={{ opacity: 0, y: 0 }}
                                                    animate={{ opacity: 1, y: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {form.formState.errors.email && form.formState.errors.email.message}
                                                </motion.span>
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className={cn("w-full mb-0",
                                            form.formState.errors.email && "mb-5"
                                        )}>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    autoComplete="off"
                                                    className="h-12 px-5 outline-none rounded-lg hover:border-blue-500"
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                <motion.span
                                                    initial={{ opacity: 0, y: 0 }}
                                                    animate={{ opacity: 1, y: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {form.formState.errors.phone && form.formState.errors.phone.message}
                                                </motion.span>
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </AnimationContainer>
                        <AnimationContainer
                            animation="slide-up"
                            delay={0.4}
                            className="w-full"
                        >
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                required
                                                rows={5}
                                                name="message"
                                                placeholder="Message..."
                                                autoComplete="off"
                                                className="w-full p-5 outline-none resize-none rounded-lg hover:border-blue-500"
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            <motion.span
                                                initial={{ opacity: 0, y: 0 }}
                                                animate={{ opacity: 1, y: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {form.formState.errors.message && form.formState.errors.message.message}
                                            </motion.span>
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                        </AnimationContainer>
                        <AnimationContainer
                            animation="slide-up"
                            delay={0.5}
                            className="w-full"
                        >
                            <div className="flex items-center justify-center w-full mx-auto">
                                <SendButton
                                    isSent={isSent}
                                    isLoading={false}
                                    setIsSent={setIsSent}
                                    disabled={!form.formState.isValid}
                                />
                            </div>
                        </AnimationContainer>
                    </form>
                </Form>
            </div>
        </div>
    )
};

export default Contact
