import {tags} from 'ziko';
const {svg} = tags;
const Syringe = (props) => 
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
    tags.path({"d":"m18 2 4 4"}),
	tags.path({"d":"m17 7 3-3"}),
	tags.path({"d":"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}),
	tags.path({"d":"m9 11 4 4"}),
	tags.path({"d":"m5 19-3 3"}),
	tags.path({"d":"m14 4 6 6"})
    )
export default Syringe;
