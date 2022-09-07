import {dateFnsLocalizer} from 'react-big-calendar'
import {parse, format, startOfWeek, getDay} from 'date-fns'
import {enUS} from 'date-fns/locale'

const locales = {
  'en-US': enUS,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
