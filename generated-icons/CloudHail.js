import {tags} from 'ziko';
const {svg} = tags;
const CloudHail = (props) => 
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
    tags.path({"d":"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}),
	tags.path({"d":"M16 14v2"}),
	tags.path({"d":"M8 14v2"}),
	tags.path({"d":"M16 20h.01"}),
	tags.path({"d":"M8 20h.01"}),
	tags.path({"d":"M12 16v2"}),
	tags.path({"d":"M12 22h.01"})
    )
export default CloudHail;
