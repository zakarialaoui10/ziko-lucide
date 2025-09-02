import {tags} from 'ziko';
const {svg} = tags;
const CalendarCog = (props) => 
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
    tags.path({"d":"m15.228 16.852-.923-.383"}),
	tags.path({"d":"m15.228 19.148-.923.383"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"m16.47 14.305.382.923"}),
	tags.path({"d":"m16.852 20.772-.383.924"}),
	tags.path({"d":"m19.148 15.228.383-.923"}),
	tags.path({"d":"m19.53 21.696-.382-.924"}),
	tags.path({"d":"m20.772 16.852.924-.383"}),
	tags.path({"d":"m20.772 19.148.924.383"}),
	tags.path({"d":"M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"M8 2v4"}),
	tags.circle({"cx":"18","cy":"18","r":"3"})
    )
export default CalendarCog;
