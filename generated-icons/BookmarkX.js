import {tags} from 'ziko';
const {svg} = tags;
const BookmarkX = (props) => 
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
    tags.path({"d":"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}),
	tags.path({"d":"m14.5 7.5-5 5"}),
	tags.path({"d":"m9.5 7.5 5 5"})
    )
export default BookmarkX;
