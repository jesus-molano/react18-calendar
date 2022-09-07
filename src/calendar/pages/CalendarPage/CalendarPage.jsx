import {Calendar} from 'react-big-calendar'
import {addHours} from 'date-fns'
import {CalendarEvent, NavBar} from '@/calendar'
import {localizer} from '@/helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    }
    return{
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({doubleClick: event})
  }
  const onSelect = (event) => {
    console.log({click: event})
  }
  const onViewChanged = (event) => {
    console.log({viewChanged: event})
  }

  return (
    <>
      <NavBar/>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView='month'
        startAccessor="start"
        endAccessor="end"
        style={{height: 'calc(100vh - 80px)'}}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}
