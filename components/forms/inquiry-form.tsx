"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit Indian mobile number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  product: z.string().min(1, 'Please select a product'),
  branch: z.string().min(1, 'Please select a preferred branch'),
  message: z.string().max(250, 'Message cannot exceed 250 characters').optional(),
});

interface InquiryFormProps {
  defaultProduct?: string;
  title?: string;
}

export function InquiryForm({ defaultProduct = 'Savings Account', title = 'Express Interest' }: InquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      email: '',
      product: defaultProduct,
      branch: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    // Simulate API delay
    setTimeout(() => {
      setRefNo(`REF-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl text-center space-y-4 shadow-accent/10">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Inquiry Submitted!</h3>
        <p className="text-foreground/70">
          Thank you for expressing interest in MNS Bank. Our representative will contact you shortly.
        </p>
        <div className="inline-block px-4 py-2 mt-4 bg-muted/50 rounded-lg text-sm font-mono font-bold text-foreground">
          Reference: {refNo}
        </div>
        <div className="pt-6">
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] pointer-events-none" />
      <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Rajesh Kumar" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address (Optional)</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="rajesh@example.com" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Branch <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select a branch" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bairagarhi">Bairagarhi (Head Office)</SelectItem>
                      <SelectItem value="tt-nagar">T.T. Nagar Branch</SelectItem>
                      <SelectItem value="karond">Karond Branch</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any specific requirements or questions..." 
                    className="resize-none bg-background/50 h-24"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button type="submit" className="w-full md:w-auto px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Submit Inquiry
            </Button>
            <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
              By submitting this form, you authorize MNS Bank to contact you via phone/SMS/email. This site is protected by reCAPTCHA.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
