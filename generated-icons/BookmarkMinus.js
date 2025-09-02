import {tags} from 'ziko';
const {svg} = tags;
const BookmarkMinus = (props) => 
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
    tags.path({"d":"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}),
	tags.line({"x1":"15","x2":"9","y1":"10","y2":"10"})
    )
export default BookmarkMinus;
