import {tags} from 'ziko';
const {svg} = tags;
const Goal = (props) => 
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
    tags.path({"d":"M12 13V2l8 4-8 4"}),
	tags.path({"d":"M20.561 10.222a9 9 0 1 1-12.55-5.29"}),
	tags.path({"d":"M8.002 9.997a5 5 0 1 0 8.9 2.02"})
    )
export default Goal;
