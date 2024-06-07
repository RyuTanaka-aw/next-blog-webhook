import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

export default function ConvertDate({ dateISO }) {
  return (
    <time datetime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {local: ja})}
    </time>
  )
}