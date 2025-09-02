import {tags} from 'ziko';
const {svg} = tags;
const BookKey = (props) => 
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
    tags.path({"d":"m19 3 1 1"}),
	tags.path({"d":"m20 2-4.5 4.5"}),
	tags.path({"d":"M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}),
	tags.path({"d":"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"}),
	tags.circle({"cx":"14","cy":"8","r":"2"})
    )
export default BookKey;
