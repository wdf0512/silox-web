'use client';

import React, { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "@radix-ui/themes";
import styles from './styles.module.css';
import 'react-calendar/dist/Calendar.css';

const DatePicker: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const times = Array.from({ length: 24 * 4 }, (_, i) => {
        const hours = String(Math.floor(i / 4)).padStart(2, "0");
        const minutes = String((i % 4) * 15).padStart(2, "0");
        return `${hours}:${minutes}`;
    });

    return (
        <div className="bg-[#0f172a] text-white p-6 rounded-lg w-[360px] shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
                {date.toDateString()}
            </h2>

            <Calendar
                onChange={setDate}
                value={date}
                className={styles.calendar}
            />

            <div className="flex justify-center gap-4 my-6">
                <Button
                    variant={selectedTime === "12h" ? "solid" : "outline"}
                    onClick={() => setSelectedTime("12h")}
                    className="w-20 text-center text-sm bg-[#1e293b] border-[#334155]"
                >
                    12h
                </Button>
                <Button
                    variant={selectedTime === "24h" ? "solid" : "outline"}
                    onClick={() => setSelectedTime("24h")}
                    className="w-20 text-center text-sm bg-[#1e293b] border-[#334155]"
                >
                    24h
                </Button>
            </div>

            <div className="overflow-y-auto max-h-48 border rounded-lg p-2 bg-[#1e293b] border-[#334155]">
                {times.map((time) => (
                    <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                            block w-full text-left p-2 rounded-lg 
                            hover:bg-[#334155] focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 
                            ${selectedTime === time ? "bg-[#334155]" : ""}
                        `}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DatePicker;