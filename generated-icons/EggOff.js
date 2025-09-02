import {tags} from 'ziko';
const {svg} = tags;
const EggOff = (props) => 
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
    tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19"}),
	tags.path({"d":"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"})
    )
export default EggOff;
