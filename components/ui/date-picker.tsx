'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/utils/cn';
import Button  from './Button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { DayPickerProvider } from 'react-day-picker';

function DatePicker({ ...props }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild={true}>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DayPickerProvider initialProps={{ }}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            {...props}
          />
        </DayPickerProvider>
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = 'DatePicker';
export { DatePicker };
