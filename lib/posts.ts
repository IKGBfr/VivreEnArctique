import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'

export function formatDate(date: string): string {
  try {
    const parsedDate = parseISO(date)
    return format(parsedDate, 'd MMMM yyyy', { locale: fr })
  } catch (error) {
    console.error('Error formatting date:', error)
    return date
  }
}

export function formatDateShort(date: string): string {
  try {
    const parsedDate = parseISO(date)
    return format(parsedDate, 'd MMM yyyy', { locale: fr })
  } catch (error) {
    console.error('Error formatting date:', error)
    return date
  }
}

export function getRelativeTime(date: string): string {
  try {
    const parsedDate = parseISO(date)
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - parsedDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return "Aujourd'hui"
    if (diffInDays === 1) return 'Hier'
    if (diffInDays < 7) return `Il y a ${diffInDays} jours`
    if (diffInDays < 30) return `Il y a ${Math.floor(diffInDays / 7)} semaines`
    if (diffInDays < 365) return `Il y a ${Math.floor(diffInDays / 30)} mois`
    return `Il y a ${Math.floor(diffInDays / 365)} ans`
  } catch (error) {
    console.error('Error calculating relative time:', error)
    return date
  }
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}
