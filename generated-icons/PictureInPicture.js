import {tags} from 'ziko';
const {svg} = tags;
const PictureInPicture = (props) => 
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
    tags.path({"d":"M2 10h6V4"}),
	tags.path({"d":"m2 4 6 6"}),
	tags.path({"d":"M21 10V7a2 2 0 0 0-2-2h-7"}),
	tags.path({"d":"M3 14v2a2 2 0 0 0 2 2h3"}),
	tags.rect({"x":"12","y":"14","width":"10","height":"7","rx":"1"})
    )
export default PictureInPicture;
