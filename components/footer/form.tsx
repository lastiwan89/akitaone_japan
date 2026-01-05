'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const formSchema = z.object({
  name: z
    .string()
    .min(5, 'your name must be at least 5 characters.')
    .max(32, 'your name must be at most 32 characters.'),
  email: z
    .email()
    .trim()
    .min(5, 'your email must be at least 5 characters')
    .max(13, 'your email must be at most 13 characters.'),
  phone: z
    .string()
    .min(10, 'your phone number must be at least 10 digit')
    .max(14, 'your phone number must bet at most 14 digit number'),
  destination: z
    .string()
    .trim()
    .min(3, 'your entered character must be at least 3 character'),
  accomodation: z.string(),
  arrivalDate: z.string(),
  journeyLength: z
    .number()
    .min(3, 'must be at least 1 day visit')
    .max(90, 'at most 90 days visits'),
  participants: z.number().min(1).max(30),
  classType: z.string(),
  participantType: z.string(),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '+6281234567890',
      destination: '',
      accomodation: '',
      arrivalDate: '',
      journeyLength: 3,
      classType: '',
      participantType: '',
      participants: 3,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Reques Tour Plan</CardTitle>
        <CardDescription>
          You can fill our packet table for your choice tour & travel to several
          cities in Japan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-name">Your Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Name Example"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-email">Your Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="example@apple.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-phone">Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id="form-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your phone number"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="destination"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-destination">
                    Cities in Japan
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-destination"
                    aria-invalid={fieldState.invalid}
                    placeholder="Cities in Japan you want to visit"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="accomodation"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-accomodation">
                    Accomodation
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-accomodation"
                    aria-invalid={fieldState.invalid}
                    placeholder="Accomodation (Hotel/Transport/Meals)"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="arrivalDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-arrival-date">
                    Arrival Time
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-arrival-date"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your Arrival Time"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex gap-4">
              <Controller
                name="journeyLength"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-journey-length">
                      Journey Length
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-journey-length"
                      aria-invalid={fieldState.invalid}
                      placeholder="How many days (Example: 5 days)"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="participants"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-journey-length">
                      Number of Participants
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-journey-length"
                      aria-invalid={fieldState.invalid}
                      placeholder="How many participants (Example: 5)"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className="flex gap-4">
              <Controller
                name="classType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="classType">Class Type</FieldLabel>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Class</SelectLabel>
                          <SelectItem {...field} value="basic">
                            Basic
                          </SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="vip">VIP</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="participantType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="class">Participant Type</FieldLabel>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Participant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Participant Types</SelectLabel>
                          <SelectItem {...field} value="individual">
                            Individual
                          </SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form">
            Submit Plan
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
