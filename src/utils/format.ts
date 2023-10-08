import dayjs from 'dayjs';

export const formatDate: any = (date: number) => dayjs(date).format('MMMM D, YYYY h:mm A');
