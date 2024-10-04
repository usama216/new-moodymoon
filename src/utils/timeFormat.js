export const timeArray = [
    { startTime: "08:30 am", endTime: "09:00 am", label: "8:30 am - 9:00 am" },
    { startTime: "09:00 am", endTime: "09:30 am", label: "9:00 am - 9:30 am" },
    { startTime: "09:30 am", endTime: "10:00 am", label: "9:30 am - 10:00 am" },
    { startTime: "10:00 am", endTime: "10:30 am", label: "10:00 am - 10:30 am" },
    { startTime: "10:30 am", endTime: "11:00 am", label: "10:30 am - 11:00 am" },
    { startTime: "11:00 am", endTime: "11:30 am", label: "11:00 am - 11:30 am" },
    { startTime: "11:30 am", endTime: "12:00 pm", label: "11:30 am - 12:00 pm" },
    { startTime: "12:00 pm", endTime: "12:30 pm", label: "12:00 pm - 12:30 pm" },
    { startTime: "12:30 pm", endTime: "01:00 pm", label: "12:30 pm - 1:00 pm" },
    { startTime: "01:00 pm", endTime: "01:30 pm", label: "1:00 pm - 1:30 pm" },
    { startTime: "01:30 pm", endTime: "02:00 pm", label: "1:30 pm - 2:00 pm" },
    { startTime: "02:00 pm", endTime: "02:30 pm", label: "2:00 pm - 2:30 pm" },
    { startTime: "02:30 pm", endTime: "03:00 pm", label: "2:30 pm - 3:00 pm" },
    { startTime: "03:00 pm", endTime: "03:30 pm", label: "3:00 pm - 3:30 pm" },
    { startTime: "03:30 pm", endTime: "04:00 pm", label: "3:30 pm - 4:00 pm" },
    { startTime: "04:00 pm", endTime: "04:30 pm", label: "4:00 pm - 4:30 pm" },
    { startTime: "04:30 pm", endTime: "05:00 pm", label: "4:30 pm - 5:00 pm" },
    { startTime: "05:00 pm", endTime: "05:30 pm", label: "5:00 pm - 5:30 pm" },
    { startTime: "05:30 pm", endTime: "06:00 pm", label: "5:30 pm - 6:00 pm" },
    { startTime: "06:00 pm", endTime: "06:30 pm", label: "6:00 pm - 6:30 pm" },
    { startTime: "06:30 pm", endTime: "07:00 pm", label: "6:30 pm - 7:00 pm" },
];




export const disableTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toISOString().split("T")[0];
}
