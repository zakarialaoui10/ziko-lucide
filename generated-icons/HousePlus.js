import {tags} from 'ziko';
const {svg} = tags;
const HousePlus = (props) => 
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
    tags.path({"d":"M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475"}),
	tags.path({"d":"M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"}),
	tags.path({"d":"M15 18h6"}),
	tags.path({"d":"M18 15v6"})
    )
export default HousePlus;
