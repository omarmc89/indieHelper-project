import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"



function onlyId(data: any[]) {
  return data.map((element)=>element.id)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export {
  onlyId,
}