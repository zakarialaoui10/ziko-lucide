import {tags} from 'ziko';
const {svg} = tags;
const MonitorCog = (props) => 
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
    tags.path({"d":"M12 17v4"}),
	tags.path({"d":"m14.305 7.53.923-.382"}),
	tags.path({"d":"m15.228 4.852-.923-.383"}),
	tags.path({"d":"m16.852 3.228-.383-.924"}),
	tags.path({"d":"m16.852 8.772-.383.923"}),
	tags.path({"d":"m19.148 3.228.383-.924"}),
	tags.path({"d":"m19.53 9.696-.382-.924"}),
	tags.path({"d":"m20.772 4.852.924-.383"}),
	tags.path({"d":"m20.772 7.148.924.383"}),
	tags.path({"d":"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}),
	tags.path({"d":"M8 21h8"}),
	tags.circle({"cx":"18","cy":"6","r":"3"})
    )
export default MonitorCog;
