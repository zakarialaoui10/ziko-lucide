import {tags} from 'ziko';
const {svg} = tags;
const TicketPercent = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),
	tags.path({"d":"M9 9h.01"}),
	tags.path({"d":"m15 9-6 6"}),
	tags.path({"d":"M15 15h.01"})
    )
export default TicketPercent;
