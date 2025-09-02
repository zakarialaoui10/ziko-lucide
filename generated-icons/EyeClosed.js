import {tags} from 'ziko';
const {svg} = tags;
const EyeClosed = (props) => 
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
    tags.path({"d":"m15 18-.722-3.25"}),
	tags.path({"d":"M2 8a10.645 10.645 0 0 0 20 0"}),
	tags.path({"d":"m20 15-1.726-2.05"}),
	tags.path({"d":"m4 15 1.726-2.05"}),
	tags.path({"d":"m9 18 .722-3.25"})
    )
export default EyeClosed;
