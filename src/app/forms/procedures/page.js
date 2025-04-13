"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Check, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

// Define procedureOptions
const procedureOptions = [
  { id: "upper_endoscopy", label: "Upper Endoscopy" },
  { id: "colonoscopy", label: "Colonoscopy" },
  { id: "sigmoidoscopy", label: "Sigmoidoscopy" },
  { id: "ercp", label: "ERCP" },
  { id: "eus", label: "Endoscopic Ultrasound" },
]

// Define complaintOptions
const complaintOptions = [
  { id: "abdominal_pain", label: "Abdominal Pain" },
  { id: "heartburn", label: "Heartburn" },
  { id: "nausea", label: "Nausea" },
  { id: "vomiting", label: "Vomiting" },
  { id: "diarrhea", label: "Diarrhea" },
  { id: "constipation", label: "Constipation" },
  { id: "rectal_bleeding", label: "Rectal Bleeding" },
  { id: "weight_loss", label: "Weight Loss" },
  { id: "difficulty_swallowing", label: "Difficulty Swallowing" },
]

// Define therapeuticOptions
const therapeuticOptions = [
  { id: "biopsy", label: "Biopsy" },
  { id: "polypectomy", label: "Polypectomy" },
  { id: "dilation", label: "Dilation" },
  { id: "stent_placement", label: "Stent Placement" },
  { id: "hemostasis", label: "Hemostasis" },
  { id: "egd_therapeutic", label: "EGD Therapeutic" },
]

// Define the form schema
const formSchema = z.object({
  patientName: z.string().min(2, { message: "Patient name is required" }),
  sex: z.string().min(1, { message: "Sex is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  primaryIndication: z.string().min(2, { message: "Primary indication is required" }),
  procedureUndertaken: z.array(z.string()).min(1, { message: "Please select at least one procedure" }),
  complaints: z.array(z.string()).optional(),
  otherComplaint: z.string().optional(),
  esophagusFindings: z.string().optional(),
  stomachFindings: z.string().optional(),
  duodenumFindings: z.string().optional(),
  rectumFindings: z.string().optional(),
  colonFindings: z.string().optional(),
  otherFindings: z.string().optional(),
  therapeuticInterventions: z.array(z.string()).optional(),
  otherTherapeuticIntervention: z.string().optional(),
})

// Main component
export default function GastroenterologyProcedureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      sex: "",
      age: "",
      primaryIndication: "",
      procedureUndertaken: [],
      complaints: [],
      otherComplaint: "",
      esophagusFindings: "",
      stomachFindings: "",
      duodenumFindings: "",
      rectumFindings: "",
      colonFindings: "",
      otherFindings: "",
      therapeuticInterventions: [],
      otherTherapeuticIntervention: "",
    },
  })

  async function onSubmit(values) {
    console.log(values)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      form.reset()
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-4">
        <Link 
          href="/forms" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Forms
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Gastroenterology Procedure Form</h1>
          <p className="text-muted-foreground">
            Please complete this form with the patient's procedure details and findings
          </p>
        </div>
      </div>
      
      <div className="bg-card text-card-foreground rounded-xl shadow-sm border p-8">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center p-12 space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Form Submitted Successfully!</h2>
            <p className="text-muted-foreground">The procedure data has been recorded.</p>
            <Button className="mt-4" onClick={() => setIsSubmitted(false)}>Submit Another Form</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Patient Info */}
              <div className="space-y-6">
                <div className="border-b pb-2">
                  <h2 className="text-xl font-semibold text-foreground">Patient Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Patient Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Sex</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Age</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Procedure Information */}
              <div className="space-y-6">
                <div className="border-b pb-2">
                  <h2 className="text-xl font-semibold text-foreground">Procedure Information</h2>
                </div>
                
                <FormField
                  control={form.control}
                  name="primaryIndication"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Primary Indication</FormLabel>
                      <FormControl>
                        <Input placeholder="Reason for procedure" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="procedureUndertaken"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-sm font-medium">Procedure Undertaken</FormLabel>
                        <FormDescription>
                          Select all procedures that were performed
                        </FormDescription>
                      </div>
                      {procedureOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="procedureUndertaken"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, option.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== option.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="complaints"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-sm font-medium">Complaints</FormLabel>
                        <FormDescription>
                          Select all relevant complaints
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {complaintOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="complaints"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="otherComplaint"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Other Complaint</FormLabel>
                      <FormControl>
                        <Input placeholder="Specify any other complaints" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Findings */}
              <div className="space-y-6">
                <div className="border-b pb-2">
                  <h2 className="text-xl font-semibold text-foreground">Findings</h2>
                </div>
                
                <FormField
                  control={form.control}
                  name="esophagusFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Esophagus Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any findings in the esophagus"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="stomachFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Stomach Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any findings in the stomach"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="duodenumFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Duodenum Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any findings in the duodenum"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rectumFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Rectum Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any findings in the rectum"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="colonFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Colon / TI Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any findings in the colon or terminal ileum"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="otherFindings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Other Findings</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any other relevant findings"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Interventions */}
              <div className="space-y-6">
                <div className="border-b pb-2">
                  <h2 className="text-xl font-semibold text-foreground">Therapeutic Interventions</h2>
                </div>
                
                <FormField
                  control={form.control}
                  name="therapeuticInterventions"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-sm font-medium">Therapeutic Interventions</FormLabel>
                        <FormDescription>
                          Select all interventions performed
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {therapeuticOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="therapeuticInterventions"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="otherTherapeuticIntervention"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Other Therapeutic Intervention</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any other therapeutic interventions"
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-4 border-t">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : "Submit Procedure Form"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>This form is for medical record purposes. All information is confidential.</p>
      </div>
    </div>
  );
} 