import {tags} from 'ziko';
const {svg} = tags;
const PilcrowRight = (props) => 
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
    tags.path({"d":"M10 3v11"}),
	tags.path({"d":"M10 9H7a1 1 0 0 1 0-6h8"}),
	tags.path({"d":"M14 3v11"}),
	tags.path({"d":"m18 14 4 4H2"}),
	tags.path({"d":"m22 18-4 4"})
    )
export default PilcrowRight;
