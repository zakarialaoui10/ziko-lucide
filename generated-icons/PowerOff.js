import {tags} from 'ziko';
const {svg} = tags;
const PowerOff = (props) => 
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
    tags.path({"d":"M18.36 6.64A9 9 0 0 1 20.77 15"}),
	tags.path({"d":"M6.16 6.16a9 9 0 1 0 12.68 12.68"}),
	tags.path({"d":"M12 2v4"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default PowerOff;
