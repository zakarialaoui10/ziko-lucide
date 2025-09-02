import {tags} from 'ziko';
const {svg} = tags;
const PilcrowLeft = (props) => 
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
    tags.path({"d":"M14 3v11"}),
	tags.path({"d":"M14 9h-3a3 3 0 0 1 0-6h9"}),
	tags.path({"d":"M18 3v11"}),
	tags.path({"d":"M22 18H2l4-4"}),
	tags.path({"d":"m6 22-4-4"})
    )
export default PilcrowLeft;
