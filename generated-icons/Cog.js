import {tags} from 'ziko';
const {svg} = tags;
const Cog = (props) => 
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
    tags.path({"d":"M11 10.27 7 3.34"}),
	tags.path({"d":"m11 13.73-4 6.93"}),
	tags.path({"d":"M12 22v-2"}),
	tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M14 12h8"}),
	tags.path({"d":"m17 20.66-1-1.73"}),
	tags.path({"d":"m17 3.34-1 1.73"}),
	tags.path({"d":"M2 12h2"}),
	tags.path({"d":"m20.66 17-1.73-1"}),
	tags.path({"d":"m20.66 7-1.73 1"}),
	tags.path({"d":"m3.34 17 1.73-1"}),
	tags.path({"d":"m3.34 7 1.73 1"}),
	tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.circle({"cx":"12","cy":"12","r":"8"})
    )
export default Cog;
