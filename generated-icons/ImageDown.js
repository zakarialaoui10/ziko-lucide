import {tags} from 'ziko';
const {svg} = tags;
const ImageDown = (props) => 
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
    tags.path({"d":"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}),
	tags.path({"d":"m14 19 3 3v-5.5"}),
	tags.path({"d":"m17 22 3-3"}),
	tags.circle({"cx":"9","cy":"9","r":"2"})
    )
export default ImageDown;
