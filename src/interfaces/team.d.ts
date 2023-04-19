import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    propertyType: string,
    location: string,
    price: number | undefined,
}

export interface TeamCardProps {
  id?: BaseKey | undefined,
  teamName: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  age:string,
  teammates:[],
  paiementStatus: string,
  paidAmount:number,
}

export interface InfoBarProps {
  icon: ReactNode,
  name: string
}
