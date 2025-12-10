import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const RegisterSchema = z
  .object({
    registerType: z.string().min(1, 'Tipo de registro requerido'),
    names: z.string().min(1, 'Nombres requeridos'),
    surnames: z.string().min(1, 'Apellidos requeridos'),
    docType: z.string().min(1, 'Tipo de documento requerido'),
    docNumber: z.string().min(5, 'Número de documento inválido'),
    phone: z.string().min(7, 'Teléfono inválido'),
    email: z.string().email('Correo inválido'),
    password: z.string().min(8, 'Contraseña mínima de 8 caracteres'),
    confirmPassword: z.string().min(8, 'Debes repetir la contraseña'),
    documentFile: z.any().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  });

export type RegisterFormType = z.infer<typeof RegisterSchema>;

export const RegisterFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      registerType: 'user',
      names: '',
      surnames: '',
      docType: 'V',
      docNumber: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      documentFile: null,
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
