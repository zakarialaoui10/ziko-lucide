import {tags} from 'ziko';
const {svg} = tags;
const BookOpenText = (props) => 
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
    tags.path({"d":"M12 7v14"}),
	tags.path({"d":"M16 12h2"}),
	tags.path({"d":"M16 8h2"}),
	tags.path({"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}),
	tags.path({"d":"M6 12h2"}),
	tags.path({"d":"M6 8h2"})
    )
export default BookOpenText;
