import {tags} from 'ziko';
const {svg} = tags;
const GraduationCap = (props) => 
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
    tags.path({"d":"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}),
	tags.path({"d":"M22 10v6"}),
	tags.path({"d":"M6 12.5V16a6 3 0 0 0 12 0v-3.5"})
    )
export default GraduationCap;
