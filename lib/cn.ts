// Codes by mahdi tasha
// Importing part
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// Creating and exporting cn function which combines twMerge and clsx functions together via given parameter
export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}