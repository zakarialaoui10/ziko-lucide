import {tags} from 'ziko';
const {svg} = tags;
const Newspaper = (props) => 
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
    tags.path({"d":"M15 18h-5"}),
	tags.path({"d":"M18 14h-8"}),
	tags.path({"d":"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}),
	tags.rect({"width":"8","height":"4","x":"10","y":"6","rx":"1"})
    )
export default Newspaper;
