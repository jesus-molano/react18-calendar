import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import {parse, format, startOfWeek, getDay, addHours} from 'date-fns'
import {enUS} from 'date-fns/locale'
import {NavBar} from '@/calendar/index.js'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [{
  title: 'My event',
  notes: 'Some notes about this event',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#f0ad4e',
  user: {
    name: 'John Doe',
    id: 1
  }
}]

export const CalendarPage = () => {
  return (
    <>
      <NavBar />
      <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end' style={{height: 'calc(100vh - 80px)'}} />
    </>
  )
}
