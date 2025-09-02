import {tags} from 'ziko';
const {svg} = tags;
const Binoculars = (props) => 
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
    tags.path({"d":"M10 10h4"}),
	tags.path({"d":"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}),
	tags.path({"d":"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}),
	tags.path({"d":"M 22 16 L 2 16"}),
	tags.path({"d":"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}),
	tags.path({"d":"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"})
    )
export default Binoculars;
