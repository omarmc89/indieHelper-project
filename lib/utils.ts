import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"



function onlyId(data: any[]) {
  return data.map((element)=>element.artwork_id)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export {
  onlyId,
}