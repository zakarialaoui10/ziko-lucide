import {tags} from 'ziko';
const {svg} = tags;
const LocateOff = (props) => 
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
    tags.path({"d":"M12 19v3"}),
	tags.path({"d":"M12 2v3"}),
	tags.path({"d":"M18.89 13.24a7 7 0 0 0-8.13-8.13"}),
	tags.path({"d":"M19 12h3"}),
	tags.path({"d":"M2 12h3"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M7.05 7.05a7 7 0 0 0 9.9 9.9"})
    )
export default LocateOff;
