import {tags} from 'ziko';
const {svg} = tags;
const SquaresSubtract = (props) => 
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
    tags.path({"d":"M10 22a2 2 0 0 1-2-2"}),
	tags.path({"d":"M16 22h-2"}),
	tags.path({"d":"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"}),
	tags.path({"d":"M20 8a2 2 0 0 1 2 2"}),
	tags.path({"d":"M22 14v2"}),
	tags.path({"d":"M22 20a2 2 0 0 1-2 2"})
    )
export default SquaresSubtract;
