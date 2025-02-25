import { format, isSameDay, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

interface DateDividerProps {
  date: string;
}

const DateDivider = ({ date }: DateDividerProps) => {
  const formatDate = () => {
    const today = new Date();
    const messageDate = parseISO(date);

    if (isSameDay(messageDate, today)) {
      return "Hari ini";
    }

    return format(messageDate, "EEEE, d MMMM yyyy", { locale: enUS });
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex items-center w-full gap-4">
        <div className="h-[1px] flex-1 bg-base-content/20" />
        <div className="bg-base-content/10 text-base-content text-[11px] md:text-xs px-3 py-1.5 md:py-2 rounded-full">
          {formatDate()}
        </div>
        <div className="h-[1px] flex-1 bg-base-content/20" />
      </div>
    </div>
  );
};

export default DateDivider;
