import {tags} from 'ziko';
const {svg} = tags;
const FerrisWheel = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.path({"d":"M12 2v4"}),
	tags.path({"d":"m6.8 15-3.5 2"}),
	tags.path({"d":"m20.7 7-3.5 2"}),
	tags.path({"d":"M6.8 9 3.3 7"}),
	tags.path({"d":"m20.7 17-3.5-2"}),
	tags.path({"d":"m9 22 3-8 3 8"}),
	tags.path({"d":"M8 22h8"}),
	tags.path({"d":"M18 18.7a9 9 0 1 0-12 0"})
    )
export default FerrisWheel;
