import {tags} from 'ziko';
const {svg} = tags;
const TriangleDashed = (props) => 
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
    tags.path({"d":"M10.17 4.193a2 2 0 0 1 3.666.013"}),
	tags.path({"d":"M14 21h2"}),
	tags.path({"d":"m15.874 7.743 1 1.732"}),
	tags.path({"d":"m18.849 12.952 1 1.732"}),
	tags.path({"d":"M21.824 18.18a2 2 0 0 1-1.835 2.824"}),
	tags.path({"d":"M4.024 21a2 2 0 0 1-1.839-2.839"}),
	tags.path({"d":"m5.136 12.952-1 1.732"}),
	tags.path({"d":"M8 21h2"}),
	tags.path({"d":"m8.102 7.743-1 1.732"})
    )
export default TriangleDashed;
