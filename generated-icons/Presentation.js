import {tags} from 'ziko';
const {svg} = tags;
const Presentation = (props) => 
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
    tags.path({"d":"M2 3h20"}),
	tags.path({"d":"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}),
	tags.path({"d":"m7 21 5-5 5 5"})
    )
export default Presentation;
