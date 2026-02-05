import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes without conflicts.
 * This is the "secret sauce" for cinematic styling.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}