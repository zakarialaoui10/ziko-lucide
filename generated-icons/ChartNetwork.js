import {tags} from 'ziko';
const {svg} = tags;
const ChartNetwork = (props) => 
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
    tags.path({"d":"m13.11 7.664 1.78 2.672"}),
	tags.path({"d":"m14.162 12.788-3.324 1.424"}),
	tags.path({"d":"m20 4-6.06 1.515"}),
	tags.path({"d":"M3 3v16a2 2 0 0 0 2 2h16"}),
	tags.circle({"cx":"12","cy":"6","r":"2"}),
	tags.circle({"cx":"16","cy":"12","r":"2"}),
	tags.circle({"cx":"9","cy":"15","r":"2"})
    )
export default ChartNetwork;
