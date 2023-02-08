import moment from 'moment';

export function joinedDate(ISO: string | undefined): string {
  const date = moment(ISO);
  const formattedDate = `Joined ${date.format('d MMM YYYY')}`;
  
  return formattedDate;
}