import {tags} from 'ziko';
const {svg} = tags;
const SwatchBook = (props) => 
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
    tags.path({"d":"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}),
	tags.path({"d":"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}),
	tags.path({"d":"M 7 17h.01"}),
	tags.path({"d":"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"})
    )
export default SwatchBook;
