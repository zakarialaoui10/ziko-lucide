import {tags} from 'ziko';
const {svg} = tags;
const IceCreamBowl = (props) => 
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
    tags.path({"d":"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}),
	tags.path({"d":"M12.14 11a3.5 3.5 0 1 1 6.71 0"}),
	tags.path({"d":"M15.5 6.5a3.5 3.5 0 1 0-7 0"})
    )
export default IceCreamBowl;
