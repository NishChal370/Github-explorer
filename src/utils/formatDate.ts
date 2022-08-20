
export const formatDate: Function = (date: string): string=>{

      return new Date(date).toDateString().slice(3).trim();
}