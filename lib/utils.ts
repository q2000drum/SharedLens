import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return 'N/A';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatCurrency(amount: number | null | undefined, currency: string = 'USD'): string {
  if (amount === null || amount === undefined) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatPercentage(value: number | null | undefined): string {
  if (value === null || value === undefined) return '0%';
  return `${Math.round(value)}%`;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-800',
    in_review: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    deprecated: 'bg-red-100 text-red-800',
    not_started: 'bg-gray-100 text-gray-800',
    in_process: 'bg-blue-100 text-blue-800',
    complete: 'bg-green-100 text-green-800',
    on_hold: 'bg-orange-100 text-orange-800',
    late_to_plan: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    draft: 'Draft',
    in_review: 'In Review',
    approved: 'Approved',
    deprecated: 'Deprecated',
    not_started: 'Not Started',
    in_process: 'In Process',
    complete: 'Complete',
    on_hold: 'On Hold',
    late_to_plan: 'Late to Plan',
  };
  return labels[status] || status;
}
