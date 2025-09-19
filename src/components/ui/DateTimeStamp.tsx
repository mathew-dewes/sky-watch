import { formatDateTime } from "../helpers/date"


export default function DateTimeStamp({date}:{
    date: Date
}){
    return <p className="my-2">{formatDateTime(date)}</p>
}