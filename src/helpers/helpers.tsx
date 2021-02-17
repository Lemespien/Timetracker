export const formatTime = (timer: number) => {
    const hours = Math.floor(timer / (60 * 60));
    const minutes = Math.floor((timer % (60 * 60)) / 60);
    const seconds = (timer % (60 * 60)) % 60;
    return { hours, minutes, seconds }
}
export const getTimeString = (timer: number, excludeSeconds: boolean) => {
    const { hours, minutes, seconds } = formatTime(timer)
    const hourString = hours < 10 ? `0${hours}` : `${hours}`;
    const minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    if (excludeSeconds) return `${hourString}:${minuteString}`;

    const secondString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${hourString}:${minuteString}:${secondString}`;
}
