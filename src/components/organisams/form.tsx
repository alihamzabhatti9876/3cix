'use client';

import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodSchema } from 'zod';
import FormGroup from '../molecules/formGroup';
import Button from '../atoms/button';

interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  placeholder?: string;
  icon?: React.ReactNode;
}

interface FormProps<T> {
  schema: ZodSchema<T>;
  fields: Field[];
  onSubmit: (values: T) => void;
  submitLabel?: string;
  defaultValues?: Partial<T>;
}

function Form<T extends FieldValues>({ schema, fields, onSubmit, submitLabel = 'Submit' }: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit: SubmitHandler<T> = async (data: any) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      {fields.map((field) => (
        <FormGroup
          key={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          icon={field.icon}
          error={(errors as any)[field.name]?.message}
          {...register(field.name as any)}
        />
      ))}

      <Button variant="primary" type="submit" loading={isSubmitting} className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}

export default Form;
