import {tags} from 'ziko';
const {svg} = tags;
const BookLock = (props) => 
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
    tags.path({"d":"M18 6V4a2 2 0 1 0-4 0v2"}),
	tags.path({"d":"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}),
	tags.path({"d":"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}),
	tags.rect({"x":"12","y":"6","width":"8","height":"5","rx":"1"})
    )
export default BookLock;
